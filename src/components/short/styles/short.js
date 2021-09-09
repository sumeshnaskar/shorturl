import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    margin: 0 auto;
    background-color: hsl(257, 22%, 95%);
`
export const Card = styled.div`
    max-width: 80%;
    margin: 0 auto;
    border-radius: 10px;
    height: 120px;    
`
export const Form = styled.form`
    background: url(${process.env.PUBLIC_URL + '/images/bg-shorten-mobile.svg'}) no-repeat;
    background-size: 100% 80%;
    background-color: hsl(257, 27%, 26%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1em;
    border-radius: 10px;  
    position: relative;
    top: -60px;

    @media(min-width: 700px){
        background: url(${process.env.PUBLIC_URL + '/images/bg-shorten-desktop.svg'}) no-repeat;
        background-color: hsl(257, 27%, 26%);
        background-size: 100% 100%;
        flex-direction: row;
        padding: 2em;
        padding-bottom: 1.4em;
    }
`

export const Group = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const Input = styled.input`
    margin: 0 auto;
    border: none;
    padding: .65em;
    border-radius: 5px;
    outline: none;
    width: 100%;
    border: ${ ({ error }) => error.length > 1 ? '2px solid hsl(0, 87%, 67%)' : 'none'};

    ::placeholder{
        color: ${ ({ error }) => error.length > 1 && 'hsl(0, 87%, 67%)'};
        opacity: 0.5;    
    }

    @media(min-width: 700px){
        width: 95%;
        height: 40px;
    }
`
export const Button = styled.button`
    margin: 0 auto; 
    border: none;
    border-radius: 5px;
    background-color: hsl(180, 66%, 49%);
    padding: .65em;
    width: 90%;
    font-weight: 700;
    color: #fff;
    cursor: pointer;

    &:hover,focus{
        background-color: hsl(180, 66%, 75%);
    }

    @media(min-width: 700px){
        width: 25%;
        height: 40px;
    }
`
export const Error = styled.p`
    font-size: .6rem;
    margin: 0;
    text-align: left;
    width: 70%;
    color: hsl(0, 87%, 67%);
    margin-bottom: 1em;
    height: 15px;
    font-style: italic;

    @media(min-width: 700px){
        margin: 0;
    }
`