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
