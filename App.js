
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar} from 'react-native';
import { ThemeProvider } from 'styled-components';
import RestaurantScreen from './src/features/restaurants/screens/restaurant.screen';
import { theme } from './src/infrastructure/themes/index';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/features/restaurants/screens/homepage..screen';


const Stack = createNativeStackNavigator();


export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
    <ThemeProvider  theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Restaurantscreen" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
    </ThemeProvider>
    </>
  );
}