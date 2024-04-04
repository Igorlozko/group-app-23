import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import { FontAwesome } from '@expo/vector-icons';

export default function PlaceItem({ place }) {
    const PLACE_PHOTO_BASE_URL = "https://maps.googleapis.com/maps/api/place/photo";
    return (
        <View
            style={{
                backgroundColor: '#ffffff',
                margin: 5,
                borderRadius: 10,
                width: Dimensions.get('screen').width * 0.9
            }}
        >
            <Image
                source={
                    place.photos && place.photos.length > 0
                        ? { uri: `${PLACE_PHOTO_BASE_URL}?maxheight=800&maxwidth=1200&photoreference=${place.photos[0].photo_reference}&key=${GlobalApi.API_KEY}` }
                        : require('./../../../assets/images/logo-11.png')
                }
                style={{
                    width: '100%',
                    height: 160,
                    borderRadius: 10
                }}
            />
            <View style={{ padding: 15 }}>
                <Text style={{ fontSize: 23 }}>{place.name}</Text>
                <Text style={{ marginTop: 5, color: '#5A5A5A' }}>{place.plus_code.compound_code}</Text>
                <View>
                    <Text style={{ marginTop: 5, color: '#808080' }}>Rating: {place.rating}</Text>
                </View>
                <View style={styles.directionsContainer}>
                    <Text style={[styles.directionsText, { color: 'white' }]}>Get directions to your resturaunt :</Text>
                    <FontAwesome name="location-arrow" size={25} color="white" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    directionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 6,
        paddingHorizontal: 14,
        backgroundColor: 'green',
        marginTop: 10,
    },
    directionsText: {
        marginRight: 10,
    },
});
