import * as React from 'react';
import { Avatar, Button, Card, Text, Image } from 'react-native-paper';
import { styled } from 'styled-components/native';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import starimage from "../../../../assets/star.png"
import restimage from "../../../../assets/resto1.jpg"
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Title = styled.Text`
  color: #BF4F74;
  font-family: ${props => props.theme.Fonts.primaryFont};
`;
const Container = styled.View`
  padding: 16px;

`
const Contentbox =styled.View`
 width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 border: 1px solid black;
`
const Contentinfo =styled.View`

 border: 1px solid black;
`
const AdditionalView = styled.View`
 border: 1px solid black;
 width: 30%;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: flex-end;

`
const Imagecomponent = styled.Image`
  width: 20px;
  height: 20px;
`
const ImageCover = styled.Image`
  width: 100%;
  height: 200px;
`
const Textcomponent = styled.Text`

    font-size: 15px;
`


export default function  Cardcomponent(props) {

  const imagePath = props.imagepath;
  // const imageSource = imagePath ? require(imagePath) : "../src/docs";

  return(
  <Container>
    <ImageCover source={props.imagePath}/>
    <Contentbox>
    <Card.Title  title={props.name} subtitle={props.address} />
    <AdditionalView>
    <Title variant="titleLdarge">
      {props.open ? "OPEN" : "CLOSED"}
      </Title>
     
    <Imagecomponent
     source={require("../../../../assets/star.png")} 
   />
<Textcomponent>{props.rating}</Textcomponent>
    </AdditionalView>
    <Button>Details</Button>
 
    </Contentbox>
 
  </Container>
  )
}



