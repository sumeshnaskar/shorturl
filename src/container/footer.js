import React from 'react'
import { Footer } from '../components'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Inner>
                <Footer.Logo/>
            </Footer.Inner>
            <Footer.Inner>
                <Footer.Title>Features</Footer.Title>
                <Footer.Link>Link Shortening</Footer.Link>
                <Footer.Link>Branded Links</Footer.Link>
                <Footer.Link>Analytics</Footer.Link>
            </Footer.Inner>
            <Footer.Inner>
                <Footer.Title>Resources</Footer.Title>
                <Footer.Link>Blogs</Footer.Link>
                <Footer.Link>Developers</Footer.Link>
                <Footer.Link>Support</Footer.Link>
            </Footer.Inner>
            <Footer.Inner>
                <Footer.Title>Company</Footer.Title>
                <Footer.Link>About</Footer.Link>
                <Footer.Link>Our Team</Footer.Link>
                <Footer.Link>Careers</Footer.Link>
                <Footer.Link>Contact</Footer.Link>
            </Footer.Inner>
            <Footer.Inner>
                <Footer.Icon 
                    src = {process.env.PUBLIC_URL + "/images/logo-facebook.svg"} 
                    alt="facebook icon"
                />
                <Footer.Icon 
                    src = {process.env.PUBLIC_URL + "/images/logo-twitter.svg"} 
                    alt="facebook icon"
                />
                <Footer.Icon 
                    src = {process.env.PUBLIC_URL + "/images/logo-pinterest.svg"} 
                    alt="facebook icon"
                />
                <Footer.Icon 
                    src = {process.env.PUBLIC_URL + "/images/logo-instagram.svg"} 
                    alt="facebook icon"
                />
            </Footer.Inner>
        </Footer>
    )
}