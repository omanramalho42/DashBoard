import React, { useEffect } from "react";

import { ThemeProvider } from "styled-components";

import light from '../../styles/theme/light';
import dark from '../../styles/theme/dark';

import { 
    Container, 
    DashContainer,
    CardContainer, 
    ContainerSecond,
    Content, 
    Title,
    Row,
    TitleRow,
    TextInfo
} from './styles';

import Sidebar  from '../../components/Sidebar';
import HeaderTop from '../../components/HeaderTop';
import StatusCard from '../../components/StatusCard';
import Card from '../../components/Card';
import { CardItems } from "../../utils/CardItems";
import CardCustomer from "../../components/CardCustomer";
import CardView from "../../components/CardView";
import ThemeContext from "../../context/ThemeContext";
import useThemeMode from "../../hooks/useThemeMode";

interface ContainerProps {
    key: string;
    icon: string;
    title: string;
    amount: string;
}

export interface bodyProps {
    username: string;
    order: string;
    price: string;
}

interface CustomerProps {
    key: string;
    head: string[];
    body: {
        username: string;
        order: string;
        price: string;
    }[];
}

export interface ViewBodyProps {
    id: string,
    user: string,
    price: string,
    date: string,
    status: string,
}

interface CardViewProps {
    header: string[];
    body: ViewBodyProps[];
}

const TopCustomers: CustomerProps = {
    key: 'index',
    head: [
        'user',
        'total orders',
        'total speding'
    ],
    body: [
        {
            "username": 'Oman Ramalho',
            "order": "490",
            "price": "$12,251"
        },
        {
            "username": 'John Doe',
            "order": "250",
            "price": "$10,841"
        },
        {
            "username": 'Nathan Ramalho',
            "order": "320",
            "price": "$14,251"
        },
        {
            "username": 'Ademir Carlos',
            "order": "222",
            "price": "$7,251"
        },
        {
            "username": "Antony Becker",
            "order": "499",
            "price": "$16,251"
        },
        {
            "username": 'Joao Dalto',
            "order": "290",
            "price": "$18,251"
        },
    ]
}

const LatestOrders: CardViewProps = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#0D1711",
            user: "Oman Ramalho",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#0D1712",
            user: "Nathan Ramlho",
            date: "17 Apr 2020",
            price: "$530",
            status: "shipping"
        },
        {
            id: "#0D1713",
            user: "Ademir Carlos",
            date: "12 Mar 2020",
            price: "$950",
            status: "refund"
        },
        {
            id: "#0D1714",
            user: "Vicente Carlos",
            date: "27 Feb 2021",
            price: "$465",
            status: "pending"
        },
        {
            id: "#0D1715",
            user: "Ligia Silva",
            date: "24 Dez 2021",
            price: "$1300",
            status: "paid"
        },
    ]
}

const renderOrderHead = ((item: string, index: number) => (
    <TitleRow key={index}>{item}</TitleRow>
))

const renderOrderBody = ((item: ViewBodyProps, index: number) => (
    <Row key={index}>
        <TextInfo>{item.id}</TextInfo>
        <TextInfo>{item.user}</TextInfo>
        <TextInfo>{item.price}</TextInfo>
        <TextInfo>{item.date}</TextInfo>
        <TextInfo status={item.status}>{item.status}</TextInfo>
    </Row>
))

function renderCustomHead(item: string, index: number) {
    return <TitleRow key={index}><TextInfo style={{ fontWeight: 'bold' }}>{item}</TextInfo></TitleRow>
}

const renderCustomBody = (item: bodyProps, index: number) => (
    <Row key={index}>
        <TextInfo>{item.username}</TextInfo>
        <TextInfo>{item.order}</TextInfo>
        <TextInfo>{item.price}</TextInfo>
    </Row>
)

const Dashboard: React.FC = () => {
    const cardProps: ContainerProps[] = CardItems;

    const { theme, themeToggler } = useThemeMode();
    const themeMode = theme === 'light' ? light : dark;

    useEffect(() => {
        console.log("themas: "+ theme);
    },[theme])
    
    return(
        <ThemeContext>
            <ThemeProvider theme={themeMode}>
            <DashContainer>
                <Sidebar />
                <Content>
                    <HeaderTop 
                        ToggleTheme={themeToggler}
                    />
                    <Title>Dashboard</Title>
                    <Container>
                        {cardProps.map((item, index) => (
                            <CardContainer key={index}>
                                <StatusCard 
                                    title={item.title}
                                    icon={item.icon}
                                    amount={item.amount}
                                />
                            </CardContainer>    
                        ) 
                        )}
                        <Card />
                    </Container>
                    <ContainerSecond>
                        <CardCustomer 
                            headData={TopCustomers.head}
                            renderHead={(item, index) => renderCustomHead(item, index)}
                            bodyData={TopCustomers.body}
                            renderBody={(item, index) => renderCustomBody(item, index)}
                        />
                        <CardView 
                            headData={LatestOrders.header}
                            renderHead={renderOrderHead}
                            bodyData={LatestOrders.body}
                            renderBody={renderOrderBody}
                        />
                    </ContainerSecond>
                </Content>
            </DashContainer>
        </ThemeProvider>
    </ThemeContext>
    );
}

export default Dashboard;