import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import {useSelector} from 'react-redux';
import {NavigationProps} from '../../navigators';
import {useAppDispatch} from '../../app/hooks';
import {auth_LOGOUT} from '../..//redux/features/auth/authSlice';

const Home = () => {
  // const selectSelector = useSelector(state => state)
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={{justifyContent: 'center'}}>
      <SafeAreaView />
      <TouchableOpacity
        style={{padding: 20, backgroundColor: 'red'}}
        onPress={() => dispatch(auth_LOGOUT())}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <Text>home</Text>
    </View>
  );
};

export default Home;
