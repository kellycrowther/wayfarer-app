/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import Style from './DestinationsMapScreenStyle'
import MapboxGL from '@react-native-mapbox-gl/maps'

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoia2VsbHljcm93dGhlciIsImEiOiJjandmbWN0emIweDNmNDRrZHV3YzV0b3BqIn0.S-VaWf5_L6ZFUFWqZjglBQ'
)

class DestinationsMapScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      coordinates: [
        [-73.98330688476561, 40.76975180901395],
        [-73.96682739257812, 40.761560925502806],
        [-74.00751113891602, 40.746346606483826],
        [-73.95343780517578, 40.7849607714286],
        [-73.99017333984375, 40.71135347314246],
        [-73.98880004882812, 40.758960433915284],
        [-73.96064758300781, 40.718379593199494],
        [-73.95172119140624, 40.82731951134558],
        [-73.9829635620117, 40.769101775774935],
        [-73.9822769165039, 40.76273111352534],
        [-73.98571014404297, 40.748947591479705],
      ],
    }
  }
  componentDidMount() {
    console.info('DestinationsMapScreen->componentDidMount', this.props)
    MapboxGL.setTelemetryEnabled(false)
  }

  renderAnnotation(counter) {
    const id = `pointAnnotation${counter}`
    const coordinate = this.state.coordinates[counter]
    const title = `Longitude: ${this.state.coordinates[counter][0]} Latitude: ${
      this.state.coordinates[counter][1]
    }`

    return (
      <MapboxGL.PointAnnotation
        key={id}
        id={id}
        title={title}
        coordinate={coordinate}
        onSelected={console.info('Clicked Marker!')}
      >
        <Image
          source={require('App/Images/marker.png')}
          style={{
            flex: 1,
            resizeMode: 'contain',
            width: 25,
            height: 25,
          }}
        />
      </MapboxGL.PointAnnotation>
    )
  }

  renderAnnotations() {
    const items = []

    for (let i = 0; i < this.state.coordinates.length; i++) {
      items.push(this.renderAnnotation(i))
    }

    return items
  }

  render() {
    return (
      <View style={Style.page}>
        <View style={Style.container}>
          <MapboxGL.MapView
            // eslint-disable-next-line no-return-assign
            ref={(c) => (this._map = c)}
            style={{ flex: 1 }}
            zoomLevel={11}
            showUserLocation={true}
            userTrackingMode={1}
            centerCoordinate={this.state.coordinates[0]}
          >
            {this.renderAnnotations()}
          </MapboxGL.MapView>
        </View>
      </View>
    )
  }
}

DestinationsMapScreen.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationsMapScreen)
