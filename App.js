import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TodoScreen from './Todo'
import PostScreen from './Post'

const Tab = createBottomTabNavigator();


// Location Screen
const LocationScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text>Location Screen</Text>
      </View>
    </SafeAreaView>
  );
};


const App = () => {
  return (

      <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
         
       tabBarIcon: ({ focused, color, size }) => {

      let iconName;
      if (route.name === 'Todo') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Posts') {
        iconName = focused ? 'document' : 'document-outline';
      } else if (route.name === 'Location') {
        iconName = focused ? 'location' : 'location-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },   

    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,

  })} >
        <Tab.Screen name="Todo" component={TodoScreen} />
        <Tab.Screen name="Posts" component={PostScreen} />
        <Tab.Screen name="Location" component={LocationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
