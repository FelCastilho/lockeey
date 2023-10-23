import React, { useState, useContext } from 'react';
import { Container, Title, List, FabButton } from './styles';
import { Feather } from '@expo/vector-icons';
import { Modal } from 'react-native';
import ModalPasswords from '../../Components/ModalPasswords';
import ListPassword from '../../Components/ListPassword';

export default function Passwords() {
  const { password, addItemPassword } = useContext(PasswordContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>

      <Title>Minhas senhas</Title>

      <List
        data={password}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListPassword data={item} />}
      />

      <FabButton onPress={() => setModalVisible(true)}>
        <Feather name="edit-2" size={24} color="white" />
      </FabButton>

      <Modal animationType="fade" visible={modalVisible} transparent={true}>

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
        
      </Modal>

    </Container>
  );
}