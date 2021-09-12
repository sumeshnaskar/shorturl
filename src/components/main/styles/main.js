import styled from "styled-components"

export const Container = styled.section`
    background-color: hsl(257, 22%, 95%);
    width: 100%;
    padding: 2em 1em 5em;
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
        padding-left: 2em;

        > ${Title}{
            text-align: left;
            
        }

        > ${Text}{
            text-align: left;
            padding-left: 0;
            
        }

        > ${ImageWrapper}{
            margin: 0;
        }

        &:nth-of-type(3){
            margin-top: 80px;
        }

        &:nth-of-type(5){
            margin-top: 160px;
        }

    }
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

export const BackgroundBanner = styled.div`
    background: url(${process.env.PUBLIC_URL + '/images/bg-boost-mobile.svg'}) no-repeat ;
    background-size: 100% 100%;
    background-color: hsl(257, 27%, 26%);
    display: flex;
    flex-direction: column; 

    >${Title}{
        color: #fff;
        margin-top: 3em;
        margin-bottom: 0.5em;
    }

    @media(min-width: 700px){
        background: url(${process.env.PUBLIC_URL + '/images/bg-boost-desktop.svg'}) no-repeat;
        background-size: 100% 100%;
        background-color: hsl(257, 27%, 26%);  

        >${Title}{
            font-size: 1.3125rem;
        }
    }

`

export const Button = styled.button`
    margin: 0 auto;
    margin-bottom: 3.5em;
    background-color: hsl(180, 66%, 49%);
    border: 0;
    padding: 0.5em 1.5em;
    border-radius: 25px;
    color: white;
    cursor: pointer;
    font-weight: 700;
    font-size: .8rem;
    user-select: none;

    &:hover,:focus{
        background-color: hsl(180, 66%, 75%);
    }

    @media(min-width: 700px){
        font-size: 1.125rem;
`