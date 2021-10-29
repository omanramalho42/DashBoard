import React, { useState } from 'react';
import { 
    Container,  
    Button, 
    Content, 
    Notification, 
    ContentBadge, 
    ContentText,
    Icon
} from './styles';

import { ContentNotification } from '../../utils/ContentNotification';

import { 
    AiOutlineBell as IconBell, 
    AiOutlineUser as IconUser, 
    AiOutlineShoppingCart as IconCart ,
    AiOutlineInfoCircle as IconInfo
} from 'react-icons/ai';

import {BiHelpCircle , BiWallet as IconWallet, BiLogOut} from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

interface BadgeProps {
    key: string
    icon: string;
    content: string;
}

interface DropdownProps {
    icon: 'bell' | 'user',
    badge?: string,
    contentBadge: BadgeProps[],
    customToggle?(): boolean,
}

const Dropdown = (props: DropdownProps)  => {
    const [show, setShow] = useState(false);
    
    function handleShowDropDown(){
        setShow(!show);
    }

    function handleOnMouseLeave(){
        if(window.innerWidth < 960) {
            setShow(false);
        } else {
            setShow(false);
        }
    }

    return(
        <Container>
            <Button onClick={handleShowDropDown}>
                {
                    props.icon === 'bell' 
                    ? <Icon>
                        <IconBell 
                            size={36} 
                        />
                    </Icon> 
                    : props.icon === 'user' 
                    ? <Icon>
                        <IconUser 
                            size={36} 
                        />
                    </Icon> : ''
                }
                {
                    props.icon === 'bell' && props.badge ? 
                    <Notification>{props.badge}</Notification> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </Button>
            <Content 
                onMouseLeave={handleOnMouseLeave}
                icon={props.icon}
                active={show}
            >
                {show && props.contentBadge.map(({icon, content, key}) => (
                    icon === 'cart' ? 
                        <ContentBadge  key={key}>
                            <Icon><IconCart size={24}/></Icon>
                            <ContentText>
                                {content}
                            </ContentText>
                        </ContentBadge> 
                    : icon === 'live' ? 
                        <ContentBadge key={key}>
                            <Icon><BiHelpCircle size={24}/></Icon>
                            <ContentText>
                                {content}
                            </ContentText>
                        </ContentBadge>
                    : icon === 'info' ?
                        <ContentBadge key={key}>
                            <Icon><IconInfo size={24}/></Icon>
                            <ContentText>
                                {content}
                            </ContentText>
                        </ContentBadge>
                    : icon === 'user' ?
                        <ContentBadge key={key}>
                            <Icon><IconUser size={24}/></Icon>
                            <ContentText>
                                {content}
                            </ContentText>
                        </ContentBadge>
                    : icon === 'profile' ?
                    <ContentBadge key={key}>
                        <Icon><IconUser size={24}/></Icon>
                        <ContentText>
                            {content}
                        </ContentText>
                    </ContentBadge>
                    : icon === 'settings' ?
                    <ContentBadge key={key}>
                        <Icon><FiSettings size={24}/></Icon>
                        <ContentText>
                            {content}
                        </ContentText>
                    </ContentBadge>
                    : icon === 'mywallet' ?
                    <ContentBadge key={key}>
                        <Icon><IconWallet size={24}/></Icon>
                        <ContentText>
                            {content}
                        </ContentText>
                    </ContentBadge>
                    : icon === 'logout' ?
                    <ContentBadge key={key}>
                        <Icon><BiLogOut size={24}/></Icon>
                        <ContentText>
                            {content}
                        </ContentText>
                    </ContentBadge>
                    : ''
                ))}
            </Content>
        </Container>
    );
}

export default Dropdown;