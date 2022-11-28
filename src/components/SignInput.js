import React from "react";
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #4F4E4A;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px
    align-items: center;
    margin-bottom: 15px;
    

`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #A77E2C;
    margin-left: 10px;
`;


export default({IconSvg, placeholder, value, onChangeText, passaword})=>{
    return(
        <InputArea>
        <IconSvg width="24" height="24" fill="#A77E2C" />
        <Input
            placeholder={placeholder}
            placeholderTextColor="#A77E2C"
            value ={value}
            onChangeText={onChangeText}
            secureTextEntry={passaword}
        />
        </InputArea>

    );

}