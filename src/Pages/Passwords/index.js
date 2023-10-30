import React, { useState, useEffect } from 'react';
import { Container, List, FabButton } from './styles';
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

  deleteItem = async (data) => {
   //Abrindo a conexão
   const realm = await getRealm();

   const ID = data.id;
   
   realm.write(() => {
    if(realm.objects('Passwords').filtered('id =' + ID).length > 0){
        realm.delete(
            realm.objects('Passwords').filtered('id =' + ID)
        )
    }
  })

  const listPasswords = await realm.objects('Passwords').sorted('id', false);

  setPassword(listPasswords);
  
  } 

  
  
  return(

    <Container>

      <List
        data={password}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListPassword data={item} deletePassword={deleteItem}/>}
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