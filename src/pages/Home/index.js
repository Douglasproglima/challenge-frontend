import React, { Component } from 'react';
import api from '../../services/api';
import Container from '../../components/Container';
import CardImage from '../../components/CardImage';
import ButtonLike from '../../components/ButtonLike';

export default class Home extends Component {
  render() {
    return (
      <>
        <Container>
          <CardImage/>
          <ButtonLike/>
        </Container>
      </>
    );
  }
}
