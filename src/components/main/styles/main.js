import styled from "styled-components"

export const Container = styled.section`
    background-color: hsl(257, 5%, 95%);
    width: 100%;
    padding: 5em 1em;
    margin: 0 auto;
`
export const Wrapper = styled.div`
    padding: 1em 0;
    user-select: none;

    @media(min-width: 700px){
        display: flex;
        justify-content: center;
        align-items: center;
        padding:0;
    }
`
export const Card = styled.div`
    background-color: #fff;
    border-radius: 5px;
    max-width: 250px;
    min-width: 200px;
    margin: 0 auto;
    margin-top: 2em;

    @media(min-width: 700px){
        margin: 0;
        max-width: 300px;

        &:nth-of-type(3){
            margin-top: 80px;
        }

        &:nth-of-type(5){
            margin-top: 160px;
        }

    }
`
export const Title = styled.h6`
    text-align: center;
    font-size: 1rem;
    margin: 0;
    user-select: none;
`
export const Text = styled.p`
    text-align: center;
    margin: 0 auto;
    font-size: 0.8rem;
    color: hsl(0, 0%, 75%);
    padding: 2em;
    padding-top: 1.5em;
    max-width: 500px;
    text-align: center;
    user-select: none;
`

export const ImageWrapper = styled.div`
    padding: .8em;
    width: 80px;
    height: 80px;
    background-color: hsl(257, 27%, 26%);
    margin: 0 auto;
    border-radius: 60px;
    position: relative;
    top: -40px;

`

export const Image = styled.img`
    background-color: hsl(257, 27%, 26%);
    width: 50px;
    height: 50px;
    margin: 0 auto;
`

export const Connection = styled.div`    
    width: 5px;
    height: 50px;
    background-color: hsl(180, 66%, 49%);
    margin: 0 auto;

    @media(min-width: 700px){
        height: 5px;
        width: 50px;
        margin: 0;
        
    }
`