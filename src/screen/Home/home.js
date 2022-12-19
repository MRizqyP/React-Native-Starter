import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Home = () => {
  // const cart = useSelector(state => state);
  // console.log(cart);
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
