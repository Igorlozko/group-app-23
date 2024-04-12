import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, Button, FlatList } from 'react-native';

function Review({route}) {
  const { imageUrl } = route.params;
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://c0d3-79-140-211-73.ngrok-free.app/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const submitReview = async () => {
    const response = await fetch('https://c0d3-79-140-211-73.ngrok-free.app/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'User', description: review }),
    });
  
    const data = await response.json();
    console.log(data);
  
    if (!response.ok) {
      // Handle error
      console.error('Failed to submit review');
    } else {
      // If the review was successfully submitted, add it to the list of reviews
      setReviews(prevReviews => [...prevReviews, { name: 'User', description: review }]);
    }
  };

  return (
    <View>
      {imageUrl && <Image source={{ uri: imageUrl }} style={{ width: '100%', height: 200 }} />}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Write a Note"
        onChangeText={text => setReview(text)}
        value={review}
      />
      <Button title="Submit Review" onPress={submitReview} />

      <FlatList
        data={reviews}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}