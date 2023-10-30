import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.61);
`;

export const ContainerModal = styled.View`
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #fff;
    width: 90%;
    height: 300px;
`;

export const Password = styled.Text`
    text-align: center;
    width: 70%;
    font-size: 20px;
    background-color: #141414;
    padding: 15px;
    border-radius: 5px;
    color: white;
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const Input = styled.TextInput`
    background-color: #d9d9d9;
    margin-bottom: 50px;
    width: 80%;
    margin-top: 10px;
    padding: 10px;
    border-radius: 8px;
    font-size: 17px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${props => props.bg};
    padding: 20px;
    border-radius: 5px;
    width: 50%;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 15px;
`;

