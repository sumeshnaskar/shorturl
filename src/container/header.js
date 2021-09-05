import React from 'react'
import { Header } from '../components'

export function HeaderContainer(){
    return (
        <>
            <Header>
                <Header.NavGroup>
                    <Header.Logo src = {process.env.PUBLIC_URL + "/images/logo.svg"} alt="Shorty logo"/>
                    <Header.Hamburger/>
                    <Header.NavBar>
                        <Header.NavList>
                            <Header.NavItem>Features</Header.NavItem>
                            <Header.NavItem>Pricing</Header.NavItem>
                            <Header.NavItem>Resources</Header.NavItem>
                        </Header.NavList>
                        <Header.Break/>
                        <Header.NavList>
                            <Header.NavItem>Login</Header.NavItem>
                            <Header.Button>Sign Up</Header.Button>
                        </Header.NavList>
                    </Header.NavBar>              
                </Header.NavGroup>
                
                <Header.Group>
                    <Header.Inner>
                        <Header.Image 
                            src = {process.env.PUBLIC_URL + "/images/illustration-working.svg"} 
                            alt="person working on desk"
                        />    
                    </Header.Inner>
                    <Header.Inner>                    
                        <Header.Title>More than just shorter links</Header.Title>
                        <Header.Text>
                            Build your brand’s recognition and get detailed insights 
                            on how your links are performing.
                        </Header.Text>
                        <Header.Button>Get Started</Header.Button>
                    </Header.Inner>
                </Header.Group>
            </Header>
        </>
        
    )
}