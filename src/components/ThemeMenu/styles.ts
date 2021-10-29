import styled from "styled-components";

interface ContainerProps {
    isActive: boolean;
}

export const Toggle = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${({theme}) => theme.colors.text};
    margin-right: 10px;

    &:hover {
        color: ${({theme}) => theme.colors.effect_secondary};
    }
`;

export const Container = styled.div<ContainerProps>`
    position: absolute;
    top: 80px;
    right: 150px;
    
    display: flex;
    flex-direction: column;

    padding: 15px;
    border-radius: 15px;

    background-color: ${({theme}) => theme.colors.primary};
    box-shadow: 0 0 12px 0 ${({theme}) => theme.colors.shadow};

    overflow: hidden;
    transform-origin: top-right;
    opacity: ${({ isActive }) => isActive ? 1 : 0};
    transition: opacity .4s;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 24px;
    color: ${({theme}) => theme.colors.text};
    font-weight: bold;
    font-family: 'Montserrat';
`;

interface ButtonProps {
    background: 'light' | 'dark' | 'info' | 'success' | 'warning' | 'danger';
}

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Button = styled.button<ButtonProps>`
    width: 44px;
    height: 44px;

    margin-right: 10px;
    
    background-color: ${({background,theme}) => 
        background === 'light' 
        ? '#FFFFFF' 
        : background === 'dark'
        ? '#000' 
        : background  === 'info'
        ? theme.colors.info
        : background === 'warning'
        ? theme.colors.warning
        : background === 'danger'
        ? theme.colors.danger
        : background === 'success'
        ? theme.colors.success
        : theme.colors.primary
    };

    border-radius: 50%;
    border: none;

    margin-bottom: 10px;
`;

export const Text = styled.h5`
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 16px;
    color: ${({theme}) => theme.colors.text};
    font-weight: 600;
    font-family: 'Montserrat';
`;
