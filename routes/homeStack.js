import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/home';
import Review from '../screens/review';

const screens = {
  Home: {
    screen:Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='GameZone' navigation={navigation} />
      }
    },
  },
  Review: {
    screen:Review,
    navigationOptions: {
      title: 'Review',
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;