import React from 'react';
import { Container, Title, Button, ButtonText, Password, ContainerModal } from './styles';
import { TouchableWithoutFeedback, } from 'react-native';

export default function ModalComponent(props) {

  return (

    <TouchableWithoutFeedback>

      <Container>

        <ContainerModal>

          <Title>Aqui está sua senha!</Title>
          <Password>{props.data}</Password>

          <Button bg="#1D77C3" onPress={props.copy}>
            <ButtonText>Copiar</ButtonText>
          </Button>

          <Button bg="#141414" onPress={props.close}>
            <ButtonText>Gerar novamente</ButtonText>
          </Button>
        </ContainerModal>

      </Container >

    </TouchableWithoutFeedback>



  );
}