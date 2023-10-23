import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Texto = styled.Text`
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

export const Button = styled.TouchableOpacity`
    width: 50%;
    align-items: center;
    justify-content: center;
    background-color: #1D77C3;
    padding: 20px;
    margin-top: 50px;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 20px;
`;
