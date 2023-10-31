import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: #000;
`;

export const Texto = styled.Text`
    font-size: 20px;
    color: #807C7C;
    
`;

export const List = styled.FlatList`
    flex: 1;
    width: 90%;
`;

export const FabButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 6%;
    right: 8%;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #141414;
    align-items: center;
    justify-content: center;
`;