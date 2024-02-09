import styled from 'styled-components/native';
import  {StyleSheet, Text, View, SafeAreaView, Platform, StatusBar} from 'react-native';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import React, { useState, useEffect } from 'react';
// import { theme } from '../infrastructure/themes';
 


export const Container = styled.SafeAreaView`
flex: 1;
padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const UpContainer = styled.View`
width: 100%;
height: 10%;
/* background-color: ${props => props.theme.colors.black}; */
/* background-color: ${props => props.theme.colorpallet.secondary}; */

padding: 6px;
`;

export const DownContainer = styled.View`
width: 100%;
height: 90%;
/* background-color: ${props => props.theme.colorpallet.primary}; */
`;