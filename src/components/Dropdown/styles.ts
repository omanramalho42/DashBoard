import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const Button = styled.button`
    display: flex;
    color: ${({theme}) => theme.colors.text};
    
    align-items: center;
    margin: 7px;

    border: none;
    background-color: transparent;
    
    transition: color 0.2s;

    &:hover {
        color: ${({theme})=>theme.colors.effect};
    }
`;

interface ContentProps {
    icon: 'bell' | 'user';
    active: boolean;
}

export const Content = styled.div<ContentProps>`
    max-width: 400px;
    position: absolute;
    top: 75px;
    right: ${({ icon }) => icon === 'bell' ? 80 : 120}px;

    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 15px;

    box-shadow: 0 0 8px 0 rgba(0,0,0,0.4);

    overflow: hidden;
    transform-origin: top-right;
    opacity: ${({ active }) => active ? 1 : 0};
    transition: opacity .4s;
`;

export const Notification = styled.div`
    display: flex;

    width: 20px;
    height: 20px;
    
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;

    color: ${({theme}) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.effect};
    border-radius: 50%;
`;

export const Icon = styled.i`
    color: ${({theme})=>theme.colors.text};

    display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
    
    &:hover, &:focus, &:active {
        color: ${({theme})=> theme.colors.effect};

        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }
`;

export const ContentBadge = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
    transition: background-color 0.2s;
    &:hover {
        color: ${({theme}) => theme.colors.effect};
        cursor: pointer;
        
    }
`;

export const ContentText = styled.h4`
    color: ${({theme}) => theme.colors.text};
    margin-left: 15px;
    font-size: 16px;
    font-family: 'Montserrat';
    font-weight: 400;
`;