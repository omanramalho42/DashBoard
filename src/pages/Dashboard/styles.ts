import styled from 'styled-components';

export const DashContainer = styled.div`
    display: flex;
    flex-direction: row;

    background-color: ${({theme}) => theme.colors.background};
`;

export const Container = styled.div`
    display: grid;
    max-height: 400px;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 1vh;
    grid-row-gap: 1vh;

    margin-top: 30px;
`;

export const CardContainer = styled.div`
    display: grid;
    flex-direction: column;
    margin-left: 30px;
`;

export const ContainerSecond = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 4vh;
    grid-row-gap: 1vh;
`;

export const TitleCard = styled.h5`
    font-size: 16px;
    font-family: 'Montserrat';
    font-weight: 500;
`;

export const Content = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-family: 'Montserrat';

    padding: 24px;
    margin-left: 15px;
    
    color: ${({theme}) => theme.colors.text};
`;

export const TitleRow = styled.th`
    width: 100%;
    
    text-transform: capitalize;
    justify-content: center;

    background-color: ${({theme}) => theme.colors.primary};
    
    padding: 10px 15px;
    border-radius: 15px;
`;

export const Row = styled.tr`
    display: flex;
    width: 100%;
    padding: 20px;

    justify-content: space-between;

    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 15px;
    
    text-transform: capitalize;
    padding: 10px 15px;

    &:hover {
        background-color: ${({theme}) => theme.colors.effect};
    }
`;

interface TextInfoProps {
    status?: string;
}

export const TextInfo = styled.td<TextInfoProps>`
    padding: 10px 15px;
    font-size: 16px;
    font-family: 'Montserrat';
    font-weight: 400;
    text-align: start;
    border-radius: 15px;
    color: ${({ theme, status }) => status ? theme.colors.primary : theme.colors.text};
    background-color:
        ${({theme, status}) => ( 
            status === "shipping" 
            ? theme.colors.info 
            : status === "pending" 
            ? theme.colors.warning
            : status === "paid" 
            ? theme.colors.success 
            : status === "refund" 
            ? theme.colors.danger
            : ""
        )};
`;