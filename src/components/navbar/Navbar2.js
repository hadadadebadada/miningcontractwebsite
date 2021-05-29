import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button, LangButton } from '../../globalStyles';
import { Context } from '../Wrapper'

import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavBtnLink
} from './Navbar2.elements';

function Navbar2() {

    const context = useContext(Context)


    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={closeMobileMenu}>
                            <NavIcon />
              HANSEACTIC MINING
            </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/' onClick={closeMobileMenu}>
                                    Home
                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services' onClick={closeMobileMenu}>
                                    Services
                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products' onClick={closeMobileMenu}>
                                    Products
                </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/sign-up'>
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/sign-up'>
                                        <Button onClick={closeMobileMenu} fontBig primary>
                                            SIGN UP
                    </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        
                          
                            <LangButton value={context.locale="de-DE"} onClick={context.selectLang}>🇩🇪</LangButton>
                            <LangButton value={context.locale="en-US"} onClick={context.selectLang}>🇺🇸</LangButton>
                            <LangButton value={context.locale="es-MX"} onClick={context.selectLang}>🇪🇸</LangButton>
                            
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>

        
    );
}

export default Navbar2;

  