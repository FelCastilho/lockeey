import React, {useState, useContext} from 'react';
import { Container, Button, ButtonText, Input, ContainerModal } from './styles';
import { TouchableWithoutFeedback, } from 'react-native';

import { PasswordContext } from '../../contexts/PasswordContext';

export default function ModalPasswords(props) {
  const {addItemPassword } = useContext(PasswordContext);
  const [input, setInput] = useState('');

  function handleAddPassword(){
    addItemPassword(input)
    setInput('')
  }

  return (

    <TouchableWithoutFeedback>

      <Container>

        <ContainerModal>

        <Input
        value={input}
        onChangeText={(item) => setInput(item)}
        placeholder='Digite sua senha'
        />

          <Button bg="#141414" onPress={() => handleAddPassword()}>
            <ButtonText>Salvar</ButtonText>
          </Button>

          <Button bg="red" onPress={props.close}>
            <ButtonText>Fechar</ButtonText>
          </Button>

        </ContainerModal>

      </Container >

    </TouchableWithoutFeedback>



  );
}