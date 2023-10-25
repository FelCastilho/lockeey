import React from "react";
import { Container, TaskText, Button } from "./styles";
import Feather from 'react-native-vector-icons/Feather';

export default function ListPassword({data, deletePassword}) {

    return (
        <Container>
            <TaskText>{data.passwordItem}</TaskText>

            <Button onPress={() => deletePassword(data)}>
                <Feather name='trash-2' color='#fff' size={25} />
            </Button>
        </Container>
    )
}