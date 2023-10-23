import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const List = styled.FlatList`
    flex: 1;
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