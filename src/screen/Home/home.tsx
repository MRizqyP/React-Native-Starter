import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import {useSelector} from 'react-redux';
import {NavigationProps} from '../../navigators';

const Home = () => {
  // const selectSelector = useSelector(state => state)

  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={{justifyContent: 'center'}}>
      <SafeAreaView />
      <TouchableOpacity
        style={{padding: 20, backgroundColor: 'red'}}
        onPress={() => navigation.navigate('login')}>
        <Text>Button</Text>
      </TouchableOpacity>
      <Text>home</Text>
    </View>
  );
};

export default Home;
