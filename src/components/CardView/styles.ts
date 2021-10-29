import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    background-color: ${({theme})=>theme.colors.primary};

    grid-column-start: 2;
    grid-column-end: 4;
    
    padding: 30px;
    box-shadow: 0 0 12px 0 ${({theme})=>theme.colors.shadow};
    
    border-radius: 15px;
    margin-right: 30px;

    max-height: 350px;
    overflow-y: auto;
`;

export const Title = styled.h4`
    text-align: start;
    font-size: 16px;
    color: ${({theme}) => theme.colors.text};
    font-weight: bold;
`;

export const Table = styled.table`
    width: 100%;
    min-width: 400px;
    border-spacing: 0;
`;

export const TableHead = styled.thead`
    background-color: ${({theme})=>theme.colors.primary};
`;

export const TableBody = styled.tbody`
`;

export const Column = styled.tr`
    color: ${({ theme })=> theme.colors.text};
    display: flex;
`;

export const Row = styled.td`
    background-color: ${({theme}) => theme.colors.primary};
`;
