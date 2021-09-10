import React from 'react'

import { Container, Card, Group, Form, Error, Input, Button, Text, Wrapper, Break, Inner } from './styles/short'

export default function Short({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Short.Card = function ShortCard({ children, ...restProps}){
    return <Card {...restProps}>{children}</Card>
}

Short.Group = function ShortGroup({ children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Short.Inner = function ShortInner({ children, ...restProps}){
    return <Inner {...restProps}>{children}</Inner>
}


Short.Form = function ShortForm({ children, ...restProps}){
    return <Form {...restProps}>{children}</Form>
}

Short.Error = function ShortError({ children, ...restProps}){
    return <Error {...restProps}>{children}</Error>
}

Short.Input = function ShortInput({...restProps}){
    return <Input {...restProps}/>
}

Short.Button = function ShortButton({ children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}

Short.Text = function ShortText({ children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Short.Wrapper = function ShortWrapper({ children, ...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Short.Break = function ShortBreak({...restProps}){
    return <Break {...restProps}/>
}