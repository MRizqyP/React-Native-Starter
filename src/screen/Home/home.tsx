import { View, Text } from 'react-native'
import React from 'react'
import {useSelector} from "react-redux";



const Home = () => {

const selectSelector = useSelector(state => state)


  return (
    <View>
      <Text>home</Text>
    </View>
  )
}

export default Home