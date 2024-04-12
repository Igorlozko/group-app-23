import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';

function Review({route}) {
  const { imageUrl } = route.params;
  const [review, setReview] = useState('');

  const submitReview = async () => {
    const response = await fetch('https://c0d3-79-140-211-73.ngrok-free.app/review', {
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
    </View>
  );
}

export default Review;