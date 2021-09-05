import React from 'react'

import { Container, Inner, Title, Link, Icon, Logo } from './styles/footer'

export default function Footer({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Footer.Inner = function FooterInner({ children, ...restProps }){
    return <Inner {...restProps}>{children}</Inner>
}

Footer.Title = function FooterTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}

Footer.Link = function FooterLink({ children, ...restProps }){
    return <Link href="#" {...restProps}>{children}</Link>
}

Footer.Icon = function FooterIcon({ ...restProps }){
    return <Icon {...restProps}/>
}

Footer.Logo = function FooterLogo({ ...restProps }){
    return (
        <Logo 
            src = {process.env.PUBLIC_URL + "/images/logo.svg"} 
            alt="Shorty logo"
            {...restProps}
        />
    )
}
