import React from 'react';
import  {StyleSheet, Text, View, SafeAreaView, Platform, StatusBar} from 'react-native';
import Searchbarcomponent from '../../../components/searchbar';
import RestaurantInfo from '../components/restaurant.info';
import { Container, UpContainer, DownContainer } from '../../../styled-components/styled.restaurants-screens';


const RestaurantScreen = () => {
  return (
    <Container>
    
    <UpContainer>
      <Searchbarcomponent/>
     </UpContainer>
     <DownContainer>
     <RestaurantInfo/>
    </DownContainer>
    
    </Container>
  );
};

export default RestaurantScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    upcontainer: {
      width: "100%",
      height: "10%",
      backgroundColor: "purple", 
      padding: 6,
    },
    downcontainer: {
      width: "100%",
      height: "90%",
      backgroundColor: "white",
    },
  
  });
  