import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1C1C1C
`;

export const HeaderArea = styled.View`
    margin-top:25px;
    height: 50px;
    justify-content: center;
    padding: 0 20px;
`;

export const HeaderTitle = styled.Text`
    font-size: 18px;
    color: #A77E2C;
    font-weight: bold;
`;

export const Scroller = styled.ScrollView`
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
    color:#A77E2C;
    font-size: 14px;
`;