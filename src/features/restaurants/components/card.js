import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { styled } from 'styled-components/native';
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Title = styled.Text`
  color: #BF4F74;
`;
const Container = styled.View`
  padding: 16px;

`


const Cardcomponent = (props) => (
  <Container>
    <Card.Title title="Card Title" subtitle="Card Subtitle" />
    <Card.Content>
      <Title variant="titleLarge">{props.title}</Title>
      <Text variant="bodyMedium">{props.content}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Closed</Button>
      <Button>OPEN</Button>
    </Card.Actions>
  </Container>
);

export default Cardcomponent;


