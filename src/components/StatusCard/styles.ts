import styled from "styled-components";

interface ContainerProps {
    isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;

    padding: 30px;
    margin-bottom: 30px;
    
    align-items: center;
    
    background-color: ${({theme}) => theme.colors.primary};
    box-shadow: 0 0 12px 0 ${({theme}) => theme.colors.shadow};
    border-radius: 15px;

    position: relative;
    overflow: hidden;
    z-index: 1;
    
    transition: color .5s ease 0;
    
    color: ${({isActive, theme}) => 
        isActive 
        ? theme.colors.primary 
        : theme.colors.text
    };

    &::before {
        content: "";
        width: 100%;
        padding-top: 100%;
        border-radius: 50%;
        background-image: linear-gradient(
            to top right,
            ${({theme}) => theme.colors.effect},
            ${({theme}) => theme.colors.effect_secondary}
        );
        position: absolute;
        left: -50%;
        top: 0;
        transform: scale(${({ isActive }) => isActive ? 3 : 0});
        transition: transform .8s ease 0s;
    }
`;

export const CardInfo = styled.div`
    flex-grow: 1;
    text-align: center;
    z-index: 1;
    text-transform: capitalize;
`;

export const Title = styled.h5`
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Montserrat';
`;

export const TitleAmount = styled.h4`
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Montserrat';
    margin-bottom: 10px;
`;

export const Icon = styled.i<ContainerProps>`
    display: flex;
    margin-right: 10px;
    
    width: 30%;
    height: 100%;
    
    align-items: center;
    justify-content: center;
    
    font-size: 3rem;
    color: ${({isActive, theme}) => 
        isActive 
        ? theme.colors.primary 
        : theme.colors.text
    };

    z-index: 1;
`;