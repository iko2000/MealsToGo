import styled from 'styled-components/native';
import React from 'react';
import  {StyleSheet, Text, View, SafeAreaView, Platform, StatusBar} from 'react-native';

export const Container = styled.SafeAreaView`
flex: 1;
padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const UpContainer = styled.View`
width: 100%;
height: 10%;
background-color: purple;
padding: 6px;
`;

export const DownContainer = styled.View`
width: 100%;
height: 90%;
background-color: white;
`;