import React from 'react';
import { Container, Title, Button, ButtonText, Password, ContainerModal } from './styles';
import { TouchableWithoutFeedback, } from 'react-native';
import * as Clipboard from 'expo-clipboard';


export default function ModalComponent(props) {

  async function clipboardItem(){
    await Clipboard.setStringAsync(props.data);
  }

  return (

    <TouchableWithoutFeedback>

      <Container>

        <ContainerModal>

          <Title>Aqui está sua senha!</Title>
          <Password>{props.data}</Password>

          <Button bg="#1D77C3" onPress={clipboardItem}>
            <ButtonText>Copiar</ButtonText>
          </Button>

          <Button bg="#141414">
            <ButtonText onPress={props.close}>Gerar novamente</ButtonText>
          </Button>
        </ContainerModal>

      </Container >

    </TouchableWithoutFeedback>



  );
}