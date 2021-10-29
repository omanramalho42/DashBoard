import React, { useState } from 'react';
import { AiOutlineCheck as IconCheck} from 'react-icons/ai';
import {BsPalette} from 'react-icons/bs';
import useThemeMode from '../../hooks/useThemeMode';

import { 
    Container,
    Content,
    Title,
    ButtonContainer,
    Button,
    Text, 
    Toggle
} from './styles';

interface ButtonProps {
    white: 'light';
    dark: 'dark',
    info: 'info',
    warning: 'warning',
    success: 'success',
    danger: 'danger',
}

const ThemeMenu: React.FC = () => {

    const buttonColor: ButtonProps = {
        white: 'light',
        dark: 'dark',
        info: 'info',
        warning: 'warning',
        success: 'success',
        danger: 'danger',
    }

    const [openToggle, setOpenToggle] = useState(false);

    function handleOpenToggle() {
       setOpenToggle(!openToggle);
    }

    const handleCloseModal = () => {
        if(window.innerWidth < 960){
            setOpenToggle(false)
        } else {
            setOpenToggle(false);
        }
    }

    const {themeToggler} = useThemeMode();

    return(
        <>
            <Toggle onClick={handleOpenToggle}>
                <BsPalette size={36}/>
            </Toggle>

            <Container 
                isActive={openToggle}
                onMouseLeave={handleCloseModal}
            >
                <Title>Theme settings</Title>
                <Text>Choose mode</Text>
                <ButtonContainer>
                    <Button 
                        background={buttonColor.white}
                        onClick={themeToggler}
                    >
                        {window.localStorage.getItem('theme') !== 'light' ? (
                            <></>
                        ): (<IconCheck size={16}/>)}
                    </Button>
                    <Text>Light</Text>
                </ButtonContainer>
                <ButtonContainer>
                    <Button background={buttonColor.dark}>
                        {window.localStorage.getItem('theme') !== 'dark' ? (
                                <></>
                        ): (<IconCheck size={16} color="white"/>)}
                    </Button>
                    <Text>Dark</Text>
                </ButtonContainer>
                
                <Content>
                    <ButtonContainer>
                        <Button background={buttonColor.info}>

                        </Button>
                        <Text>Blue</Text>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button background={buttonColor.danger}></Button>
                        <Text>Red</Text>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button background={buttonColor.white}></Button>
                        <Text>Cyan</Text>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button background={buttonColor.success}></Button>
                        <Text>Green</Text>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button background={buttonColor.warning}></Button>
                        <Text>Orange</Text>
                    </ButtonContainer>
                </Content>
            </Container>
        </>
    );
}

export default ThemeMenu;