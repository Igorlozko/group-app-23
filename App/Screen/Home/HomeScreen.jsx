// HomeScreen.js
import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AppMapView from './AppMapView';
import Header from './Header';
import SearchBar from './SearchBar';
import { UserLocationContext } from '../../Context/UserLocationContext';
import GlobalApi from '../../Utils/GlobalApi';
import PlaceListView from './PlaceListView';

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);
    const [placeList,setPlaceList] = useState([]);
  useEffect(() => {
    location && GetNearByPlace();
  }, [location]);

  const GetNearByPlace = () => {
    const data = {
      "includedTypes": ["restaurant"],
      "maxResultCount": 10,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": location?.latitude,
            "longitude": location?.longitude
          },
          "radius": 5000.0
        }
      }
    };

    GlobalApi.NewNearByPlace(location.latitude, location.longitude)
  .then(resp => {
    if (resp && resp.length > 0) {
      console.log(JSON.stringify(resp)); // Optional: Log the response for debugging
      setPlaceList(resp); // Set the placeList state to the array of places
    } else {
      console.error('Empty or invalid response received from the API');
    }
  })
  .catch(error => {
    console.error('Error fetching nearby places:', error.message);
  });
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location) => console.log(location)} />
      </View>
      <AppMapView placeList={placeList} />
      <View style={styles.placelistcontainer}>
        <PlaceListView placeList={placeList}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 10,
    width: '100%',
    paddingHorizontal: 20
  },
  placelistcontainer:{
    position:'absolute',
    bottom:0,
    zIndex:10,
    width:'100%'
  }
});
