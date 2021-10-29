import React from "react";
import {
    Container, 
    Title, 
    Table, 
    TableHead, 
    TableBody, 
    Column, 
    Row
} from './styles';

import { ViewBodyProps } from '../../pages/Dashboard';

interface CardViewProps {
    headData: string[];
    bodyData: ViewBodyProps[];
    renderHead: (item: string, index: number) => void;
    renderBody: (item: ViewBodyProps, index: number) => void;
}

const CardView: React.FC<CardViewProps> = ({headData, bodyData, renderHead, renderBody}) => {
    return(
        <Container>
            <Title>Lates Orders</Title>
            <Table>
                <TableHead>
                    <Column>
                    {
                        headData.map((item, index) => (
                            renderHead(item, index)
                        ))
                    }
                    </Column>
                </TableHead>
                <TableBody>
                    {
                        bodyData.map((item, index) => (
                            renderBody(item, index)
                        ))
                    }
                </TableBody>
            </Table>
        </Container>
    );
}

export default CardView;