import React from "react";
import { Container, TaskText, Button } from "./styles";

import Clipboard from "@react-native-community/clipboard";
import Feather from 'react-native-vector-icons/Feather';

export default function ListPassword({data, deletePassword}) {

    function copyPassword(){
        Clipboard.setString(data.passwordItem);
        alert('Senha copiada!')
    }

    return (
        <Container onPress={() => copyPassword()}>

            <TaskText>{data.passwordItem}</TaskText>

            <Button onPress={() => deletePassword(data)}>
                <Feather name='trash-2' color='#fff' size={25} />
            </Button>

        </Container>
    )
}