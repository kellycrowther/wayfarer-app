import React from 'react'
import PropTypes from 'prop-types'
import { View, Animated, Image } from 'react-native'
import { connect } from 'react-redux'
import Style from './DestinationsMapScreenStyle'
import MapboxGL from '@react-native-mapbox-gl/maps'
import CustomCallout from 'App/Components/CustomCallout/CustomCallout'
import DestinationActions from 'App/Stores/DestinationsMap/Actions'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoia2VsbHljcm93dGhlciIsImEiOiJjandmbWN0emIweDNmNDRrZHV3YzV0b3BqIn0.S-VaWf5_L6ZFUFWqZjglBQ'
)

class DestinationsMapScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeAnnotationIndex: this.props.activeAnnotationIndex,
      previousActiveAnnotationIndex: this.props.previousActiveAnnotationIndex,

      backgroundColor: this.props.backgroundColor,
      coordinates: this.props.coordinates,
      zoomLevel: 16,
      centerCoordinate: [],
    }

    this._scaleIn = null
    this._scaleOut = null
  }

  componentWillMount() {
    this.determineCenterCoordinate()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.coordinates !== nextProps.coordinates) {
      this.setState({
        coordinates: nextProps.coordinates,
      })
    }
  }

  addMarker(feature) {
    this.props.addMarker(feature)
    this.forceUpdate()
  }

  onAnnotationSelected(feature, selectedIndex) {
    this._scaleIn = new Animated.Value(0.6)
    Animated.timing(this._scaleIn, { toValue: 1.0, duration: 200 }).start()

    let newState = this.state.coordinates.map((item, index) => {
      if (index !== selectedIndex) {
        return item
      }

      if (index === selectedIndex) {
        return {
          ...item,
          showCallout: !item.showCallout,
        }
      }
    })

    this.setState({
      ...this.state,
      coordinates: newState,
    })

    this.forceUpdate()

    if (this.state.previousActiveAnnotationIndex !== -1) {
      this._map.moveTo(feature.geometry.coordinates, 500)
    }
  }

  onAnnotationDeselected(deselectedIndex) {
    const nextState = {}

    if (this.state.activeAnnotationIndex === deselectedIndex) {
      nextState.activeAnnotationIndex = -1
    }

    this._scaleOut = new Animated.Value(1)
    Animated.timing(this._scaleOut, { toValue: 0.6, duration: 200 }).start()
    nextState.previousActiveAnnotationIndex = deselectedIndex
    this.setState(nextState)
  }

  renderAnnotations() {
    const items = []

    if (this.state.coordinates.length === 0) {
      return
    }

    for (let i = 0; i < this.state.coordinates.length; i++) {
      const coordinate = this.state.coordinates[i].coordinate

      const id = `pointAnnotation${i}`

      const animationStyle = {}
      if (i === this.state.activeAnnotationIndex) {
        animationStyle.transform = [{ scale: this._scaleIn }]
      } else if (i === this.state.previousActiveAnnotationIndex) {
        animationStyle.transform = [{ scale: this._scaleOut }]
      }

      items.push(
        <View key={id} style={Style.markerContainer}>
          <MapboxGL.PointAnnotation
            onSelected={(feature) => this.onAnnotationSelected(feature, i)}
            id={id}
            coordinate={coordinate}
          >
            {this.state.coordinates[i].showCallout && (
              <CustomCallout
                title={this.state.coordinates[i].title}
                subtitle={this.state.coordinates[i].subtitle}
              />
            )}
            <Image source={require('App/Images/marker.png')} style={Style.marker} />
          </MapboxGL.PointAnnotation>
        </View>
      )
    }

    return items
  }

  determineCenterCoordinate() {
    let centerCoordinate
    if (
      this.state.coordinates &&
      this.state.coordinates[0] &&
      this.state.coordinates[0].coordinate
    ) {
      centerCoordinate = this.state.coordinates[0].coordinate
      this.setState({ ...this.state, centerCoordinate: centerCoordinate })
    } else {
      this.setState({ ...this.state, centerCoordinate: [-73.98330688476561, 40.76975180901395] })
    }
  }

  render() {
    let camera
    let annotations
    camera = (
      <MapboxGL.Camera
        zoomLevel={this.state.zoomLevel}
        centerCoordinate={this.state.centerCoordinate}
      />
    )
    if (this.state.coordinates.length > 0) {
      annotations = this.renderAnnotations()
    }
    return (
      <View {...this.props} style={Style.container}>
        <MapboxGL.MapView
          ref={(c) => (this._map = c)}
          onPress={(feature) => this.props.addMarker(feature)}
          onDidFinishLoadingMap={this.onDidFinishLoadingMap}
          style={Style.mapBoxContainer}
        >
          {camera}
          {annotations}
        </MapboxGL.MapView>
        <View style={Style.mapControls}>
          <View style={Style.increaseZoom}>
            <FontAwesome
              name="plus"
              size={Style.mapControlIcon.size}
              color="white"
              style={Style.mapControlIcon}
            />
          </View>
          <View style={Style.increaseZoom}>
            <FontAwesome
              name="minus"
              size={Style.mapControlIcon.size}
              color="white"
              style={Style.mapControlIcon}
            />
          </View>
          <View style={Style.increaseZoom}>
            <FontAwesome
              name="trash"
              size={Style.mapControlIcon.size}
              color="white"
              style={Style.mapControlIcon}
            />
          </View>
        </View>
      </View>
    )
  }
}

DestinationsMapScreen.propTypes = {
  activeAnnotationIndex: PropTypes.number,
  previousActiveAnnotationIndex: PropTypes.number,
  backgroundColor: PropTypes.string,
  coordinates: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      showCallout: PropTypes.showCallout,
      coordinate: PropTypes.arrayOf(PropTypes.number),
    })
  ),
  addMarker: PropTypes.func,
  purge: PropTypes.func,
  centerCoordinate: PropTypes.arrayOf(PropTypes.number),
}

const mapStateToProps = (state) => ({
  activeAnnotationIndex: state.destination.activeAnnotationIndex,
  previousActiveAnnotationIndex: state.destination.previousActiveAnnotationIndex,

  backgroundColor: state.destination.backgroundColor,
  coordinates: state.destination.coordinates,
  centerCoordinate: state.destination.centerCoordinate,
})

const mapDispatchToProps = (dispatch) => ({
  addMarker: (feature) => dispatch(DestinationActions.addMarker(feature)),
  purge: () => dispatch(DestinationActions.purge()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationsMapScreen)
