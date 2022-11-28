import React from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Container,    
    Scroller,
    HeaderArea,
    HeaderTitle,
} from './styles';

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();

    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }

    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle >Seu Perfil</HeaderTitle>
                    
                </HeaderArea>
                <Button title="Sair" onPress={handleLogoutClick} />
            </Scroller>
        </Container>
    );
}