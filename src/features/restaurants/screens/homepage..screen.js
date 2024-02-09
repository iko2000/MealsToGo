import React from 'react';
import  {StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


export default function Homepage ({ navigation }) {
  return (
    
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detals"
        onPress={() => navigation.navigate('Restaurantscreen')}
      />
    </View>
    
  );
};

