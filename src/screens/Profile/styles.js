import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`

    flex: 1;
    background-color: #1C1C1C;
`;

export const Scroller = styled.ScrollView`
    margin-top:25px;
    flex: 1;
    padding: 20px;
`;
export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #A77E2C;
`;