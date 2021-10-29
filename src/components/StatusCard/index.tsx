import React, { useState } from 'react';
import {Container, CardInfo, Title, TitleAmount, Icon} from './styles';
import { 
    MdOutlineSell as IconAllSell, 
    MdOutlineVisibility as IconAllVisits, 
    MdOutlineToday as IconDayVisits,
     MdFavoriteBorder as OrderIcon 
} from 'react-icons/md';

interface ContainerProps {
    icon: string;
    title: string;
    amount: string;
}

const StatusCard:React.FC<ContainerProps> = props => {
    const [active, setActive] = useState(false);

    function handleMouseEnter() {
        setActive(!active);
    }

    return(
        <Container 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseEnter}
            isActive={active}
        >
            <Icon 
                isActive={active}
            >
            {
                props.icon === 'allsell' ? <IconAllSell/>
                : props.icon === 'allvisits' ? <IconAllVisits/>
                : props.icon === 'dayvisits' ? <IconDayVisits/>
                : props.icon === 'orders' ? <OrderIcon/>
                : ''
            }
            </Icon>
            <CardInfo>
                <Title>{props.title}</Title>
                <TitleAmount>{props.amount}</TitleAmount>
            </CardInfo>
        </Container>
    );
}

export default StatusCard;