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



