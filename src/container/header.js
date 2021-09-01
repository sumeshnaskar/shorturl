import React from 'react'
import { Header } from '../components'

export function HeaderContainer(){
    return (
        <>
            <Header>
                <Header.NavGroup>
                    <Header.Logo src = {process.env.PUBLIC_URL + "/images/logo.svg"} alt="Shorty logo"/>
                    <Header.NavBar> 
                        <Header.Link href="#">Features</Header.Link>
                        <Header.Link href="#">Pricing</Header.Link>
                        <Header.Link href="#">Resources</Header.Link>
                    </Header.NavBar>
                    <Header.NavBar>
                        <Header.Link href="#">Login</Header.Link>
                        <Header.Button>Sign Up</Header.Button>                                
                    </Header.NavBar>         
                    <Header.Hamburger />          
                </Header.NavGroup>
                <Header.Group>
                    <Header.Inner>                    
                        <Header.Title>More than just shorter links</Header.Title>
                        <Header.Text>
                            Build your brand’s recognition and get detailed insights 
                            on how your links are performing.
                        </Header.Text>
                        <Header.Button>Get Started</Header.Button>
                    </Header.Inner>
                    <Header.Inner>
                        <Header.Image 
                            src = {process.env.PUBLIC_URL + "/images/illustration-working.svg"} 
                            alt="person working on desk "
                        />    
                    </Header.Inner>
                </Header.Group>
            </Header>
        </>
        
    )
}