# React Navigation Basics

- Install the required packages in your React Native project:

```
npm install @react-navigation/native
```

- Installing dependencies into a bare React Native project

```
npm install react-native-screens react-native-safe-area-context
```

- Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.

```
npm install @react-navigation/native-stack
```

## To use the React Native Navigation

### At "App.tsx"

- We first need to import these import statements in our App.tsx file

```
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
```

- Making a variable for transfernin the props from our file ( Its just an example )

```
const Stack = createNativeStackNavigator<RootStackParamList>()
```

- Use Case

```
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title:"Trending Products"
          }}
        />
    </NavigationContainer>
```

- <Stack.Navigate initialRouteName=""> This is for identifing the initial page of the app

---

- we need to determine the type of props that is going to transfer to the different pages

```
export type RootStackParamList = {
  Home: undefined,
  Details: {productId : string}
};
```

### At "Home.tsx"

- We need to import "NativeStackScreenProps" from react-native-navigate-stack for useing navigation props

```
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
```

- use a variable to provide the type of NativeStackScreenProps
  "Home" indicates that this file takes the props of Home file from RootStackParamList

```
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
```

- navigate is used to go to the navigaed page

```
onPress={() => navigation.navigate("Details")
```

- replace is used to totally replace the page from the app

```
onPress={() => navigation.replace("Details")
```

- push is used for pushing the page into stack for the navigaiton of pages in app but it contain back arrow on the top of the page

```
onPress={() => navigation.push("Details")
```

### At "Details.tsx"

- if we need to use props transfed from different page we have to import some import statements

```
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
```

- This used for typeScriptin of the Details page

```
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>
```

- we can also extract data from those props with the help of object
  - productId is variable
  - route is varible with the type of DetailsProps
  - params contain the data transfered from differebnt page
  ```
  const {productId} = route.params
  ```
- useNavigation hook

```
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
```

this navigation is used for navigatin the different pages

- Go Back only one Page

```
onPress={() => navigation.goBack()
```

- Go back directly to initial page but its not wotk if you replace that initial page

```
onPress={() => navigation.popToTop()
```

- This is used to pop 2 or number pages at the same time

```
onPress={() => navigation.pop(2)
```

- Go back through navigate option it create new page even if it's replaced

```
onPress={() => navigation.navigate('Home')
```
