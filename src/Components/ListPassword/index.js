import React, {useState} from "react";
import { Container, TaskText, Button, ContainerButton, ContainerText } from "./styles";

import Clipboard from "@react-native-community/clipboard";
import Feather from 'react-native-vector-icons/Feather';

export default function ListPassword({data, deletePassword}) {

    const [ passwordVisible, setPasswordVisible ] = useState(false);
    const [ password, setPassword ] = useState(data.passwordItem);

    function copyPassword(){
        Clipboard.setString(data.passwordItem);
        alert('Senha copiada!')
    }

    function hideItem(){
        const ocultPassword = '*'.repeat(password.length);

        if(passwordVisible){
            setPassword(data.passwordItem);
            
        }else{
            setPassword(ocultPassword);
        }
            
        setPasswordVisible(!passwordVisible);
    }

    return (

        <Container onPress={() => copyPassword()}>

            <ContainerText>

                <TaskText>
                    {password}
                </TaskText>

            </ContainerText>

            <ContainerButton>
                <Button onPress={() => hideItem()}>

                    {passwordVisible ? (
                        <Feather name='eye-off' color='#fff' size={25} />
                    ) : (
                        <Feather name='eye' color='#fff' size={25} />
                    )}
                    
                </Button>

                <Button onPress={() => deletePassword(data)}>
                    <Feather name='trash-2' color='#fff' size={25} />
                </Button>

            </ContainerButton>
            

        </Container>
    )
}