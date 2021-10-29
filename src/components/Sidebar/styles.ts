import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 12px 5px rgba(0, 0, 0, 0.1);
`;

export const SideBarMenu = styled.ul`
    list-style: none;
`;

export const Menu = styled.nav`
    padding: 10px;
`;

interface Props {
    isActive: string;
}

export const Item = styled.li<Props>`
    width: 100%;
    padding: 15px;
    background-color: ${({theme, isActive}) => 
        isActive === 'active'
        ? theme.colors.effect 
        : theme.colors.primary
    };
    border-radius: 15px;
`;

export const MenuItem = styled.button`
    background-color: transparent;
    margin: 0 10px;
    width: 100%;
    border: none;
    display: flex;
    flex-direction: row;

    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    &:hover, &:focus {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
  }
`;

export const Title = styled.h4<Props>`
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;
    transition: font-weight 0.2s;
    color: ${({theme, isActive}) => 
        isActive === 'active'
        ? theme.colors.primary 
        : theme.colors.text
    };
`;

export const Icon = styled.i`
    color: ${({ theme })=> theme.colors.text};
`;

export const Titulo = styled.h1`
    font-size: 20px;
    text-align: center;
    color: ${({theme}) => theme.colors.text};
    padding: 20px;
`;
