import React, { useContext } from "react";

import Switch from 'react-switch';

import Dropdown from "../Dropdown";

import { 
    Container,
    Input,
    InputSearch,
    HeaderIcons,
    HeaderMenu,
    SwitchTheme,
    Icon    
} from './styles';

import { ThemeContext } from "styled-components";

import { shade } from 'polished'
import { BiSearchAlt } from 'react-icons/bi';
import { ContentNotification } from "../../utils/ContentNotification";
import { DataProfile } from "../../utils/DataProfile";

interface ToggleThemeProps {
    ToggleTheme: () => void;
}

const HeaderTop: React.FC<ToggleThemeProps> = ( {ToggleTheme} ) => {
    const allBadge = ContentNotification.length;
    const dataBadge = ContentNotification;
    const dataProfile = DataProfile;

    const { colors, title } = useContext(ThemeContext);

    return(
        <Container>
            <InputSearch>
                <Input 
                    placeholder="Search Here..."
                />
                <Icon>
                    <BiSearchAlt 
                        size={24}
                        style={{ marginRight: 5 }}
                    />
                </Icon>
            </InputSearch>
            <SwitchTheme>
                <Switch
                    onChange={ToggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor={shade(0.15, colors.primary)}
                    onColor={colors.secondary}
                />
            </SwitchTheme>
            <HeaderIcons>
                <HeaderMenu>
                    {/* <ThemeMenu /> */}
                    <Dropdown 
                        icon="user"
                        contentBadge={dataProfile}
                    />
                    <Dropdown 
                        icon="bell"
                        badge={String(allBadge)}
                        contentBadge={dataBadge}
                    />
                </HeaderMenu>
            </HeaderIcons>
        </Container>
    );
}

export default HeaderTop;