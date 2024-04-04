import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useRef } from 'react'
import PlaceItem from './PlaceItem';

export default function PlaceListView({placeList}) {
    console.log("***",placeList);
    const flatListRef = useRef(null);
    useEffect(()=>{

    },[])
  return (
    <View>
      <FlatList
        data={placeList}
        horizontal={true}
        pagingEnabled
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <View key={index}>
              <PlaceItem place={item}/>
            </View>
        )}
      />
    </View>
  )
}