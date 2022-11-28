import React from 'react';
import  styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color: #111;
flex: 1;
justify-content: center;
align-items: center;
`;


export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton= styled.TouchableOpacity`
    height: 60px;
    background-color: #A77E2C;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText= styled.Text`
    font-size: 18px;
    color: #000;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justfy-content: center;
    margin-top: 50px;
    margin-bottom: 20px;        

`;
export const SignMessageButtonTextBold= styled.Text`
    font-size: 16px;
    color: #C4A76D;
    font-weight:bold;

`;