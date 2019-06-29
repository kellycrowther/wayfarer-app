import { createAppContainer, createStackNavigator } from 'react-navigation'
import Colors from 'App/Theme/Colors'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import LoginScreen from '../Containers/Login/LoginScreen'
import RegisterScreen from '../Containers/Register/RegisterScreen'
import DestinationsMapScreen from '../Containers/DestinationsMap/DestinationsMapScreen'
import WaypointDetailScreen from 'App/Containers/WaypointDetail/WaypointDetailScreen'
import { View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import React from 'react'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: {
      screen: DestinationsMapScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Destinations',
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerRight: (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('ExampleScreen')}>
              <View>
                <FontAwesome name="navicon" size={18} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        ),
      }),
    },
    ExampleScreen: {
      screen: ExampleScreen,
      navigationOptions: {
        title: 'Example Screen',
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: {
        title: 'Register',
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    DestinationsMapScreen: {
      screen: DestinationsMapScreen,
      navigationOptions: {
        title: 'Register',
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    WaypointDetailScreen: {
      screen: WaypointDetailScreen,
      navigationOptions: {
        title: 'Waypoint',
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'screen',
  }
)

export default createAppContainer(StackNavigator)
