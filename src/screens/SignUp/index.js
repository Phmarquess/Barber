import React, {useState, useContext}from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../contexts/UserContext';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonTextBold,

 } from './styles';
import { useNavigation } from '@react-navigation/native';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';

import SignInput from '../../components/SignInput';
import Api from '../../Api';


export default()=>{
    const {dispatch: userDispatch}=useContext(UserContext);

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passawordField, setPassawordField,] = useState('');

    const handleSignClick= async ()=>{
        if (nameField!= '' && emailField != '' && passawordField !=''){
            let res = await Api.signUp(nameField, emailField, passawordField);
            
            if(res.token){
                await AsyncStorage.setItem('token', res.token);
                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });

            }else{
                alert("Erro: "+res.error)
            }
        }else{
            alert("Preemcha os campos");
        }
    }


    const handleMenssageButtonClick = ()=>{
        navigation.reset({
            routes: [{name:'SignIn'}]
        });

    }


    return(
        <Container>
            <BarberLogo width= "100%" height= "160"/>

            <InputArea>
                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Digite seu Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />
                 <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passawordField}
                    onChangeText={t=>setPassawordField(t)}
                    passaword={true}
                 />


                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>        
            </InputArea>

            <SignMessageButton onPress={handleMenssageButtonClick}>
                <SignMessageButtonTextBold>Fazer login </SignMessageButtonTextBold>
            </SignMessageButton>
            
        </Container>
    );
    };