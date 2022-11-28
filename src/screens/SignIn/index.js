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

import SignInput from '../../components/SignInput';
import Api from '../../Api';


export default()=>{
    const {dispatch: userDispatch}=useContext(UserContext);

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passawordField, setPassawordField,] = useState('');

    const handleSignClick = async ()=>{
        if(emailField != ''  &&  passawordField != ''){

            let json = await Api.signIn(emailField, passawordField);
            if(json.token){
                await AsyncStorage.setItem('token', json.token);
                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });



            }else{
            alert("E-mail ou senha invalidos");
            }

        }else{
            alert("E-mail ou senha invalidos");
        }
    }


    const handleMenssageButtonClick = ()=>{
        navigation.reset({
            routes: [{name:'SignUp'}]
        });

    }


    return(
        <Container>
            <BarberLogo width= "100%" height= "160"/>

            <InputArea>
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
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>        
            </InputArea>

            <SignMessageButton onPress={handleMenssageButtonClick}>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
            
        </Container>
    );
    };