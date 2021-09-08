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

    
`
export const Form = styled.form`
    background: url(${process.env.PUBLIC_URL + '/images/bg-shorten-mobile.svg'}) no-repeat ;
    background-size: 100% 80%;
    
    background-color: hsl(257, 27%, 26%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1em;
    border-radius: 10px;
    height: 120px;
    position: relative;
    top: -60px;

`
export const Input = styled.input`
    margin: 0 auto;
    border: none;
    padding: .55em;
    border-radius: 5px;
    outline: none;
    width: 70%;

    ::placeholder{
        color: hsl(0, 87%, 67%);
        opacity: 0.5;
    }

`
export const Button = styled.button`
    margin: 0 auto; 
    border: none;
    border-radius: 5px;
    background-color: hsl(180, 66%, 49%);
    padding: .55em;
    width: 70%;
    font-weight: 700;
    color: #fff;

`
export const Error = styled.p`
    font-size: .6rem;
    margin: 0 auto;
    text-align: left;
    width: 70%;
    color: hsl(0, 87%, 67%);
    margin-bottom: 0.5em;

`