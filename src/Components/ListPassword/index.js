import React from "react";
import { Container, Button, TaskText } from "./styles";
import { Feather } from '@expo/vector-icons';

export default function ListPassword({data}) {

    function formatedLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <Container>
            <TaskText>{data.password}</TaskText>

            <Feather name="eye" size={24} color="white" />
            <Feather name="trash-2" size={24} color="white" />
        </Container>
    )
}