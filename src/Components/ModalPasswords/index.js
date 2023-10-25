import React, {useState} from 'react';
import { Container, Button, ButtonText, Input, ContainerModal } from './styles';
import { TouchableWithoutFeedback, } from 'react-native';
import getRealm from '../../services/realm';

export default function ModalPasswords(props) {

  const [inputPassword, setInputPassword] = useState('');

  passwordSave = async() => {

    const realm = await getRealm();

    const id = realm.objects('Passwords').sorted('id', true).length > 0 ? realm.objects('Passwords').sorted('id', true)[0].id + 1 : 1;

    const dadosPassword = {
      id: id,
      passwordItem: inputPassword,
    }

    realm.write(() => {
      realm.create('Passwords', dadosPassword)
    })

  }

  async function addBook(){

    if(inputPassword === ''){
      alert('Preencha o campo primeiro!');
      return;
    }

    try{
      const data = {passwordItem: inputPassword}
      await passwordSave(data);
      setInputPassword('');
      
    }catch(err){
      alert(err)
    }
  

  }
 
  
  return (

    <TouchableWithoutFeedback>

      <Container>

        <ContainerModal>

        <Input
        value={inputPassword}
        onChangeText={(item) => setInputPassword(item)}
        placeholder='Digite sua senha'
        />

          <Button bg="#141414" onPress={addBook}>
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