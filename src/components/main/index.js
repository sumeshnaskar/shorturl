import React from "react"
import { Container, Wrapper, Card, Title, Text, Image, ImageWrapper, Connection, BackgroundBanner, Button } from './styles/main'

export default function Main({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Main.Wrapper = function MainWrapper({ children, ...restProps }){
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Main.Card = function MainCard({ children, ...restProps }){
    return <Card {...restProps}>{children}</Card>
}

Main.Title = function MainTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}

Main.Text = function MainText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}

Main.Image = function MainImage({ ...restProps }){
    return (
        <ImageWrapper>
            <Image {...restProps}/>
        </ImageWrapper>
    )
}

Main.Connection = function MainConnection(){
    return <Connection/>
}

Main.Button = function MainButton({ children, ...restProps }){
    return <Button {...restProps}>{children}</Button>
}

Main.BackgroundBanner = function MainBackgroundBanner({ children, ...restProps }){
    return <BackgroundBanner {...restProps}>{children}</BackgroundBanner>
}