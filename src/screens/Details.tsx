import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route}: DetailsProps) => {

  const {productId} = route.params
  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>

      {/* Go Back one Page */}
      <Text style={styles.smallText}>Details Screen: {productId}</Text>
      <Button
      title='Go to One Screen Back' 
      onPress={() => navigation.goBack()}
      ></Button>

      {/* Go back directly to initial page but its not wotk if you replace that initial page  */}
      <Text style={styles.smallText}>Details Screen: {productId}</Text>
      <Button
      title='Go to Home Screen'
      onPress={() => navigation.popToTop()}
      
      // This is used to pop 2 or number pages at the same time
      // onPress={() => navigation.pop(2)}
      ></Button>

      {/* Go back through navigate option it create new page even if it's replaced */}
      <Text style={styles.smallText}>Details Screen: {productId}</Text>
      <Button
      title='Go to Home Screen Through navigate'
      onPress={() => navigation.navigate('Home')}
      ></Button>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText: {
        color: 'black'
    }
})