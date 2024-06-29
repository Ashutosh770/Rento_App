import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'; // Assuming you are using Ionicons

// Import your screens for each tab
import MessageScreen from './MessageScreen';
import InvoiceScreen from './InvoiceScreen';
import SurveyScreen from './SurveyScreen';

const Tab = createBottomTabNavigator();

export default function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Messages') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'Invoices') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          } else if (route.name === 'Survey') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue', // Color of the active tab
        inactiveTintColor: 'gray', // Color of inactive tabs
      }}
    >
      <Tab.Screen name="Messages" component={MessageScreen} />
      <Tab.Screen name="Invoices" component={InvoiceScreen} />
      <Tab.Screen name="Survey" component={SurveyScreen} />
    </Tab.Navigator>
  );
}
