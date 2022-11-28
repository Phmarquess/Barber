import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    
    flex: 1;
    background-color: #1C1C1C;
`;

export const SearchArea = styled.View`

    background-color: #363636;
    height: 40px;
    border-radius: 20px;
    padding: 0 20px;
    margin: 20px;
    margin-bottom: 0px;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #A77E2C;
`;

export const Scroller = styled.ScrollView`
    margin-top:25px;
    flex: 1;
    padding: 0 20px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 30px;
`;

export const ListArea = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const EmptyWarning = styled.Text`
    text-align: center;
    margin-top: 30px;
    color: #A77E2C;
    font-size: 14px;
`;