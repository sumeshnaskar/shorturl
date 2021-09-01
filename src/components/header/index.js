import React from 'react'

import { Container, NavGroup, Group, Inner, Image, NavBar, Logo, Link, Button, Hamburger, Bar, Title, Text } from './styles/header'


// Header Component 
export default function Header({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }){
    return <Group {...restProps}>{children}</Group>
}

Header.NavGroup = function HeaderNavGroup({ children, ...restProps }){
    return <NavGroup {...restProps}>{children}</NavGroup>
}
// NavBar 
Header.NavBar = function HeaderNavBar({ children, ...restProps }){
    return <NavBar {...restProps}>{children}</NavBar>
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
    return (
        <Hamburger {...restProps}>
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