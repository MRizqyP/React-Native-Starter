import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import {useSelector} from 'react-redux';
import {NavigationProps} from '../../../navigators';
import {useAppDispatch} from '../../../app/hooks';
import {auth_SET_TOKEN} from '../../../redux/features/auth/authSlice';

const Login = () => {
  // const selectSelector = useSelector(state => state)

  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={{justifyContent: 'center'}}>
      <SafeAreaView />
      <TouchableOpacity
        style={{padding: 20, backgroundColor: 'red'}}
        // onPress={() => navigation.navigate('beranda')}
        onPress={() =>
          dispatch(auth_SET_TOKEN({token: 'asd', refreshToken: 'zxc'}))
        }>
        <Text>Button</Text>
      </TouchableOpacity>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
