import React, { ReactNode } from "react";
import { bodyProps } from "../../pages/Dashboard";
import {
    Container, 
    Title, 
    Table, 
    TableHead, 
    TableBody, 
    Column, 
    Row
} from './styles';

interface CustomerProps {
    headData: string[];
    renderHead: (item: string, index: number) => void;
    bodyData: bodyProps[];
    renderBody: (item: bodyProps, index: number) => void;
}

const CardCustomer = ({headData, renderHead, bodyData, renderBody}: CustomerProps) => {
    return(
        <Container>
            <Title>Top Customers</Title>
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

export default CardCustomer;