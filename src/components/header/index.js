import React, {useState, createContext, useContext} from 'react'

import { Container, NavGroup, Group, Inner, Image, NavBar, NavList, NavItem, Break, Logo, Link, Button, Hamburger, Bar, Title, Text } from './styles/header'

const HeaderContext = createContext()

// Header Component 
export default function Header({ children, ...restProps }){
    const [display, setDisplay] = useState(true)
    return (
        <HeaderContext.Provider value={{ display, setDisplay }}>
            <Container {...restProps}>{children}</Container>
        </HeaderContext.Provider>
    )
}

Header.Group = function HeaderGroup({ children, ...restProps }){
    return <Group {...restProps}>{children}</Group>
}

Header.NavGroup = function HeaderNavGroup({ children, ...restProps }){
    return <NavGroup {...restProps}>{children}</NavGroup>
}
// NavBar 
Header.NavBar = function HeaderNavBar({ children, ...restProps }){
    const { display } = useContext(HeaderContext)
    return display && <NavBar {...restProps} >{children}</NavBar>
}

Header.NavList = function HeaderNavList({ children, ...restProps }){
    return <NavList {...restProps}>{children}</NavList>
}

Header.NavItem = function HeaderNavItem({ children, ...restProps }){
    return <NavItem {...restProps}>{children}</NavItem>
}

Header.Break = function HeaderBreak({ children, ...restProps }){
    return <Break {...restProps}>{children}</Break>
}

Header.Inner = function HeaderInner({ children, ...restProps }){
    return <Inner {...restProps}>{children}</Inner>
}

Header.Logo = function HeaderLogo({ ...restProps }){
    return <Logo {...restProps}/>
}

Header.Image = function HeaderImage({ ...restProps }){
    return <Image {...restProps}/>
}

Header.Link = function HeaderLink({ children, ...restProps }){
    return <Link {...restProps}>{children}</Link>
}

Header.Button = function HeaderButton({ children, ...restProps }){
    return <Button {...restProps}>{children}</Button>
}

Header.Hamburger = function HeaderHamburger({ ...restProps }){
    const { display, setDisplay } = useContext(HeaderContext)
    return (
        <Hamburger {...restProps} onClick={() => setDisplay(!display)}>
            <Bar/>
            <Bar/>
            <Bar/>
        </Hamburger>
    )
}

Header.Title = function HeaderTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}

Header.Text = function HeaderText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}