import styled from "styled-components"

export const Container = styled.footer`
    background-color: hsl(260, 8%, 14%);
    width: 100%; 
    user-select: none;

    @media(min-width: 700px){
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        padding: 3em;
    }
`
export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:last-child{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 1.5em 1em;

        @media(min-width: 700px){
            padding: 1em;
        }
    }

    @media(min-width: 700px){
        align-items: flex-start;
    }
    
`

export const Logo = styled.img`
    filter: brightness(0) invert(1);
    margin-top: 2em;
    height: 1.5em;

    @media(min-width: 700px){
        margin: 1em;
    }

`

export const Title = styled.p`
    color: #fff; 
    font-size: 0.8rem;
    margin-top: 2em;

    @media(min-width: 700px){
        margin-top: 1.5em;
    }
`
export const Link = styled.a`   
    color: hsl(0, 0%, 75%);
    cursor: pointer;  
    font-size: 0.7rem;
    text-decoration: none;

    &:hover,focus{
        color: #fff;
    }
`
export const Icon = styled.img`
    filter: brightness(0) invert(1);
    width: 25px;
    height: 25px;
    padding: 0.25em;
    cursor: pointer;
`