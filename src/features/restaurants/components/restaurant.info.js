import React from 'react';
import  {StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Image, FlatList} from 'react-native';
import Cardcomponent from './card';
import styled from 'styled-components/native';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import data from "../../../data/data.json"
import restaurantsData from "../../../data/datajs";





export default function RestaurantInfo () {

  
  return (
    <View>
    <FlatList
        data={restaurantsData}
        renderItem={({ item }) => (
          <Cardcomponent
            name={item.name}
            address={item.address}
            rating={item.rating}
            open={item.open}
            imagePath={item.imagePath}
            
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: '100%' }}
      />

  


    </View>
  );
};

