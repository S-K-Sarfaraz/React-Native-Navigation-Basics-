import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>


      <Text style={styles.smallText}>Home Screen</Text>
      <View style={styles.marginContainer}>
        <Button
        title='Go to Details Screen with navigate'
        onPress={() => navigation.navigate("Details",{
          productId: '88'
        })}
        ></Button> 
      </View>


      <View style={styles.marginContainer}>
        <Button
        title='Go to Details Screen with push'
        onPress={() => navigation.push("Details",{
          productId: '88'
        })}
        ></Button>
      </View>

      <View style={styles.marginContainer}>
        <Button
        title='Go to Details Screen with replace'
        onPress={() => navigation.replace("Details",{
          productId: '88'
        })}
        ></Button>
      </View>

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
    marginContainer:{
      margin:20
    }
})