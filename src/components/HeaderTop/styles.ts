import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    padding: 20px;

    justify-content: space-between;
    display: flex;
    
    background-color: transparent;
    z-index: 1000000;
`;

export const InputSearch = styled.div`
    display: flex;
    width: 300px;
    
    align-items: center;
    justify-content: space-between;

    border: 1px solid ${({theme}) => theme.colors.secondary};
    border-radius: 15px;
    
    padding: 5px;
    box-shadow: 0 0 10px 0 ${({theme}) => theme.colors.shadow};

    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.effect};
    }
`;

export const Icon = styled.i`
    color: ${({theme}) => theme.colors.text};
`;

export const Input = styled.input`
    width: 100%;
    padding: 15px;

    border: none;
    background-color: transparent;
    
    transition: border 0.2s;

    &:hover {
        border: none;
    }
    &:focus {
        outline: none;
    }
`;

export const HeaderIcons = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderMenu = styled.nav`
    width: 100%;
    display: flex;
    margin: 10px;
`;

export const SwitchTheme = styled.div`

`;