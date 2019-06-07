import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Animated, Image } from 'react-native'
import { connect } from 'react-redux'
import Style from './DestinationsMapScreenStyle'
import MapboxGL from '@react-native-mapbox-gl/maps'
import Bubble from 'App/Components/Bubble'
import CustomCallout from 'App/Components/CustomCallout/CustomCallout'

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
    }

    this._scaleIn = null
    this._scaleOut = null

    this.addMarker = this.addMarker.bind(this)
  }

  addMarker(feature) {
    this.setState({
      ...this.state,
      coordinates: [
        ...this.state.coordinates,
        { showCallout: false, coordinate: feature.geometry.coordinates },
      ],
    })
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

  render() {
    return (
      <View {...this.props} style={Style.container}>
        <MapboxGL.MapView
          ref={(c) => (this._map = c)}
          onPress={this.addMarker}
          onDidFinishLoadingMap={this.onDidFinishLoadingMap}
          style={Style.mapBoxContainer}
        >
          <MapboxGL.Camera zoomLevel={16} centerCoordinate={this.state.coordinates[0].coordinate} />

          {this.renderAnnotations()}
        </MapboxGL.MapView>

        <Bubble>
          <Text>Click to add a point annotation</Text>
        </Bubble>
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
}

const mapStateToProps = (state) => ({
  activeAnnotationIndex: state.destination.activeAnnotationIndex,
  previousActiveAnnotationIndex: state.destination.previousActiveAnnotationIndex,

  backgroundColor: state.destination.backgroundColor,
  coordinates: state.destination.coordinates,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationsMapScreen)
