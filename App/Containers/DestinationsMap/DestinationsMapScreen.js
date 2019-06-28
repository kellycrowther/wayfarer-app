import React from 'react'
import PropTypes from 'prop-types'
import { View, Animated, Image } from 'react-native'
import { connect } from 'react-redux'
import Style from './DestinationsMapScreenStyle'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import CustomCallout from 'App/Components/CustomCallout/CustomCallout'
import DestinationActions from 'App/Stores/DestinationsMap/Actions'
import MapControls from 'App/Components/MapControls/MapControls'
import { WaypointProps } from 'App/Models/WaypointModels'

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoia2VsbHljcm93dGhlciIsImEiOiJjandmbWN0emIweDNmNDRrZHV3YzV0b3BqIn0.S-VaWf5_L6ZFUFWqZjglBQ'
)

class DestinationsMapScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.props,
      centerCoordinate: null,
    }

    this._scaleIn = null
    this._scaleOut = null
  }

  componentWillMount() {
    this.determineCenterCoordinate()
  }

  componentDidMount() {
    this.props.getAllWaypoints()
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.wayPoints !== nextProps.wayPoints) {
      this.setState({
        wayPoints: nextProps.wayPoints,
      })
    }
  }

  addMarker(feature) {
    this.props.addMarker(feature)
    this.forceUpdate()
  }

  increaseZoom() {
    this.setState({ ...this.state, zoomLevel: this.state.zoomLevel + 1 })
  }

  decreaseZoom() {
    this.setState({ ...this.state, zoomLevel: this.state.zoomLevel - 1 })
  }

  onAnnotationSelected(feature, selectedIndex) {
    this._scaleIn = new Animated.Value(0.6)
    Animated.timing(this._scaleIn, { toValue: 1.0, duration: 200 }).start()

    let newState = this.state.wayPoints.map((item, index) => {
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
      wayPoints: newState,
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

    if (this.state.wayPoints.length === 0) {
      return
    }

    for (let i = 0; i < this.state.wayPoints.length; i++) {
      const coordinate = [
        this.state.wayPoints[i].coordinate.latitude,
        this.state.wayPoints[i].coordinate.longitude,
      ]
      const wayPoint = this.state.wayPoints[i]

      const id = `pointAnnotation${i}`

      const animationStyle = {}
      if (i === this.state.activeAnnotationIndex) {
        animationStyle.transform = [{ scale: this._scaleIn }]
      } else if (i === this.state.previousActiveAnnotationIndex) {
        animationStyle.transform = [{ scale: this._scaleOut }]
      }

      items.push(
        <MapboxGL.PointAnnotation
          onSelected={(feature) => this.onAnnotationSelected(feature, i)}
          id={id}
          key={id}
          coordinate={coordinate}
        >
          {this.state.wayPoints[i].showCallout && (
            <CustomCallout
              onPress={() =>
                this.props.navigation.navigate('WaypointDetailScreen', { id: wayPoint.id })
              }
              title={this.state.wayPoints[i].title}
              subtitle={this.state.wayPoints[i].subtitle}
            />
          )}
          <Image source={require('App/Images/marker.png')} style={Style.marker} />
        </MapboxGL.PointAnnotation>
      )
    }

    return items
  }

  determineCenterCoordinate() {
    let centerCoordinate
    if (this.state.wayPoints && this.state.wayPoints[0] && this.state.wayPoints[0].coordinate) {
      centerCoordinate = [
        this.state.wayPoints[0].coordinate.latitude,
        this.state.wayPoints[0].coordinate.longitude,
      ]
      this.setState({ ...this.state, centerCoordinate: centerCoordinate })
    } else {
      this.setState({ ...this.state, centerCoordinate: [-73.98330688476561, 40.76975180901395] })
    }
  }

  render() {
    let annotations
    if (this.state.wayPoints.length > 0) {
      annotations = this.renderAnnotations()
    }
    return (
      <View {...this.props} style={Style.container}>
        <MapboxGL.MapView
          centerCoordinate={this.state.centerCoordinate}
          zoomLevel={this.state.zoomLevel}
          style={Style.map}
        >
          {annotations}
        </MapboxGL.MapView>
        <MapControls
          increaseZoom={() => this.increaseZoom()}
          decreaseZoom={() => this.decreaseZoom()}
          removeMarkers={() => this.props.purge()}
        />
      </View>
    )
  }
}

DestinationsMapScreen.propTypes = {
  activeAnnotationIndex: PropTypes.number,
  previousActiveAnnotationIndex: PropTypes.number,
  backgroundColor: PropTypes.string,
  wayPoints: PropTypes.arrayOf(WaypointProps),
  centerCoordinate: PropTypes.arrayOf(PropTypes.number),
  zoomLevel: PropTypes.number,
  id: PropTypes.number,
  addMarker: PropTypes.func,
  purge: PropTypes.func,
  getAllWaypoints: PropTypes.func,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
  activeAnnotationIndex: state.destination.activeAnnotationIndex,
  previousActiveAnnotationIndex: state.destination.previousActiveAnnotationIndex,

  backgroundColor: state.destination.backgroundColor,
  wayPoints: state.destination.wayPoints,
  centerCoordinate: state.destination.centerCoordinate,
  zoomLevel: state.destination.zoomLevel,
})

const mapDispatchToProps = (dispatch) => ({
  addMarker: (feature) => dispatch(DestinationActions.addMarker(feature)),
  purge: () => dispatch(DestinationActions.purge()),
  getAllWaypoints: () => dispatch(DestinationActions.getAllWaypoints()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationsMapScreen)
