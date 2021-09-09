import React from 'react'

import { Container, Card, Group, Form, Error, Input, Button } from './styles/short'

export default function Short({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Short.Card = function ShortCard({ children, ...restProps}){
    return <Card {...restProps}>{children}</Card>
}

Short.Group = function ShortGroup({ children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
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