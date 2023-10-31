import React, { useState } from 'react';
import { Text, Modal } from 'react-native';
import { Container, Texto, Button, ButtonText } from './styles';

import Clipboard from '@react-native-community/clipboard';
import Slider from '@react-native-community/slider';

import ModalComponent from '../../Components/ModalHome';

export default function Home() {

  const [value, setValue] = useState(0);
  const [result, setResult] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  let charset = 'abcdefghijklmnopqrstuvxwyz12345678901234567890!+-@#$%*&1234567890';

  function generatePassword() {

    valueInt = Math.floor(value)
    
    let password = '';

    for(let i = 0, n = charset.length; i < valueInt; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setModalVisible(true);
    setResult(password);

  }

  function copyItem(){
    Clipboard.setString(result)
    alert('Texto copiado!')
  }

  return (

    <Container>

      <Texto>{value.toFixed(0)} caracteres</Texto>

      <Slider
        value={value}
        minimumValue={4}
        maximumValue={16}
        onValueChange={(valueSelected) => setValue(valueSelected)}
        minimumTrackTintColor="#1D77C3"
        maximumTrackTintColor="#666262"
        thumbTintColor="#42BFDD"
        style={{ width: '70%' }}
      />

      {value > 0 ? (
        <Button onPress={() => generatePassword()}>
          <ButtonText>Gerar senha</ButtonText>
        </Button>
      ) : (
        <Text></Text>
      )}

      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <ModalComponent data={result} close={() => setModalVisible(false)} copy={copyItem}/>
      </Modal>

    </Container>
  );
}