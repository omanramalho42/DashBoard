import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-column-start: 1;
    
    padding: 30px;
    margin-left: 30px;

    background-color: ${({theme})=>theme.colors.primary};
    
    box-shadow: 0 0 12px 0 ${({theme}) => theme.colors.shadow};
    border-radius: 15px;
    
    max-height: 350px;
    overflow-y: auto;
`;

export const Title = styled.h4`
    text-align: start;
    font-size: 16px;
    margin-left: 10px;
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
//tr
export const Column = styled.tr`
    display: flex;
`;

export const Row = styled.td`
    background-color: ${({theme}) => theme.colors.primary};
`;
