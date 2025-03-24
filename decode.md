const decodePolyline = useCallback((encoded: string) => {
const path: google.maps.LatLng[] = [];
let index = 0;
const len = encoded.length;
let lat = 0;
let lng = 0;

    while (index < len) {
      let byte, shift = 0, result = 0;
      do {
        byte = encoded.charCodeAt(index++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);
      const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        byte = encoded.charCodeAt(index++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);
      const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
      lng += dlng;

      path.push(new google.maps.LatLng(lat / 1e5, lng / 1e5));
    }

    return path;

}, []);

const containerStyle = {
width: '100%',
height: '400px',
};

const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

const { isLoaded } = useLoadScript({
googleMapsApiKey: '',
libraries: ['geometry'],
});

{currentActivity?.map?.summary_polyline && (
<GoogleMap
mapContainerStyle={containerStyle}
center={{
            lat: currentActivity?.start_latlng?.[0] || 37.7749,
            lng: currentActivity?.start_latlng?.[1] || -122.4194,
          }}
zoom={12} >
{activities.map((activity, index) => (

            activity.map?.summary_polyline && (
              <Polyline
                key={activity.id}
                path={decodePolyline(activity.map.summary_polyline)}
                options={{
                  strokeColor: colors[index % colors.length],
                  strokeOpacity: 1.0,
                  strokeWeight: 2,
                }}
              />
            )
          ))}
        </GoogleMap>
      )}
