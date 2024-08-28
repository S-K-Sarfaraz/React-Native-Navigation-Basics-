import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
      title='Go to Details Screen'
      onPress={() => navigation.navigate("Details",{
        productId: '88'
      })}
      ></Button>
      <Button
      title='Go to Details Screen'
      onPress={() => navigation.push("Details",{
        productId: '88'
      })}
      ></Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText:{
        color: 'black'
    },
    buttonNavigator:{

    }
})