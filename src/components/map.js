import React from 'react'
import GoogleMapElement from 'google-map-react'

const defaultProps = {
  center: {
    lat: 37.79,
    lng: -122.40,
  },
  zoom: 15,
}

const mapStyles = require('./map-styles.json')
console.log(mapStyles);

function createMapOptions(maps) {
  return {
    styles: mapStyles
  }
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

class GoogleMap extends React.Component {
  render () {
    return (
      <div className="map-wrapper">
        <GoogleMapElement
          bootstrapURLKeys={{ key: 'AIzaSyBggbQ5YQKN_hRRVOVs4-OkmdUGEt39ZZs' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          options={createMapOptions}
        >
          <AnyReactComponent
            lat={37.793061}
            lng={-122.401724}
            text={'A'}
          />
        </GoogleMapElement>
      </div>
    )
  }
}

export default GoogleMap



