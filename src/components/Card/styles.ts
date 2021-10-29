import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: calc(100% - 30px);
    width: 70vh;

    grid-column-start: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    
    margin-right: 30px;
    margin-left: 30px;
    
    box-shadow: 0 0 12px 0 rgba(0,0,0,0.3);
    border-radius: 15px;
`;