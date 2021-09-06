import React from 'react'
import { Main } from '../components'

export function MainContainer(){
    return (
        <Main>
            <Main.Title>Advanced Statistics</Main.Title>
            <Main.Text>
                Track how your links are performing across the web with our 
                advanced statistics dashboard.
            </Main.Text>
            <Main.Wrapper>
                <Main.Card>
                    <Main.Image 
                        src={process.env.PUBLIC_URL + "/images/icon-brand-recognition.svg"} 
                        alt="Brand recognition image"
                    />
                    <Main.Title>Brand Recognition</Main.Title>
                    <Main.Text>
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </Main.Text>
                </Main.Card>
                <Main.Connection/>
                <Main.Card>
                    <Main.Image 
                        src={process.env.PUBLIC_URL + "/images/icon-detailed-records.svg"} 
                        alt="Detailed record image"
                    />
                    <Main.Title>Detailed Records</Main.Title>
                    <Main.Text>
                        Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions.
                    </Main.Text>
                </Main.Card>
                <Main.Connection/>
                <Main.Card>
                    <Main.Image 
                        src={process.env.PUBLIC_URL + "/images/icon-fully-customizable.svg"} 
                        alt="Fully customizable image"
                    />
                    <Main.Title>Fully Customizable</Main.Title>
                    <Main.Text>
                        Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement.
                    </Main.Text>
                </Main.Card>
            </Main.Wrapper>
        </Main>
    )
}