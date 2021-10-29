import React, { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

import { MenuSidebar } from "../../utils/MenuSidebar";

import { 
    Container,
    SideBarMenu,
    Menu,
    Item,
    MenuItem,
    Title,
    Titulo,
    Icon
} from './styles';

import {AiOutlineCustomerService, AiOutlineDashboard} from 'react-icons/ai';
import {MdProductionQuantityLimits, MdOutlineInventory, MdOutlinePriceChange} from 'react-icons/md';
import {FaRegListAlt} from 'react-icons/fa';
import { SiGoogleanalytics } from 'react-icons/si';
import {BiCategoryAlt} from 'react-icons/bi';
import {FiSettings} from 'react-icons/fi';

const Sidebar: React.FC = () => {
    const menuItens = MenuSidebar;
    
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    useEffect(() => {
        console.log("pathname:" + splitLocation[1]);
    },[location])

    return(
        <Container>
            <Titulo>Menu</Titulo>
            {menuItens.map(item => (
                <Menu key={item.key}>
                    <SideBarMenu>
                        <Item isActive={splitLocation[1] === item.link ? "active" : ""}>
                            <Link to={item.link} style={{textDecoration: 'none'}}>
                                <MenuItem>
                                    {
                                        item.icon === 'dash' ? (<Icon><AiOutlineDashboard size={24}/></Icon>) 
                                        : item.icon === 'customers' ? (<Icon><AiOutlineCustomerService size={24}/></Icon>)
                                        : item.icon === 'products' ? (<Icon><MdProductionQuantityLimits size={24}/></Icon>)
                                        : item.icon === 'order' ? (<Icon><FaRegListAlt size={24}/></Icon>)
                                        : item.icon === 'analytic' ? (<Icon><SiGoogleanalytics size={24}/></Icon>)
                                        : item.icon === 'categorie' ? (<Icon><BiCategoryAlt size={24}/></Icon>)
                                        : item.icon === 'discount' ? (<Icon><MdOutlinePriceChange size={24}/></Icon>)
                                        : item.icon === 'inventory' ? (<Icon><MdOutlineInventory size={24}/></Icon>)
                                        : item.icon === 'settings' ? (<Icon><FiSettings size={24}/></Icon>) 
                                        : <></>
                                    }
                                    <Title isActive={splitLocation[1] === item.link ? "active" : ""}>{item.title}</Title>
                                </MenuItem>
                            </Link>
                        </Item>
                    </SideBarMenu>
                </Menu>
            ))}
        </Container>
    );
}

export default Sidebar;