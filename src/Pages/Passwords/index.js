import React, { useState, useEffect } from 'react';
import { Container, Title, List, FabButton } from './styles';
import { Modal } from 'react-native';
import ListPassword from '../../Components/ListPassword';

import Feather from 'react-native-vector-icons/Feather';
import ModalPasswords from '../../Components/ModalPasswords';

import getRealm from '../../services/realm';

export default function Passwords() {

  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState([]);

  useEffect(() => {

    loadPasswords = async() => {

      const realm = await getRealm();

      const data = realm.objects('Passwords');

      setPassword(data);
    }

    loadPasswords();

  }, [])

  return(

    <Container>

      <List
        data={password}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListPassword data={item} />}
      />

      <FabButton onPress={() => setModalVisible(true)}>
        <Feather name="edit-2" size={24} color="white"/>
      </FabButton>

      <Modal animationType="fade" visible={modalVisible} transparent={true}>
        <ModalPasswords close={() => setModalVisible(false)}/>
      </Modal>

    </Container>
  );
}