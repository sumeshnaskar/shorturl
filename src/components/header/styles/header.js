import styled from "styled-components"

export const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`

export const NavBar = styled.nav`
    :last-of-type{
        position: absolute;
        right: 2em;
    }

    @media(max-width:700px){
        display: none;
    }
`

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:100%;

    &:last-of-type{
        width:125%;
    }

    @media(max-width:700px){
        &:last-of-type{
            width:100%;
        }       
        &:last-child{
            order: -1;
        }
    }    
`

export const Group = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width:700px){
        flex-direction: column;
    }
`

export const NavGroup = styled.div`
    display: flex;
    justify-content: flex-between;
    align-items: flex-end;
`

export const Logo = styled.img` 
    margin-top: 1em;
    margin-bottom: -0.25em;
`
export const Link = styled.a`
    text-decoration: none;
    margin-right: 1em;
    color: hsl(0, 0%, 75%);
    justify-content: flex-start;
    font-size: 0.8rem;

    &:hover{
        color: black;
    }

    &:first-of-type{
        margin-left: 2em;
    }
`
export const Button = styled.button`
    background-color: hsl(180, 66%, 49%);
    border: 0;
    padding: 0.5em 1.5em;
    border-radius: 25px;
    color: white;
    cursor: pointer;
    margin: 0 auto;
    margin-left: 0;
    font-weight: 700;
    font-size: 0.8rem;

    &:hover,:focus{
        background-color: hsl(180, 66%, 75%);
    }

    &:nth-child(3){
        font-size: 1.5rem;

        @media(max-width:700px){
            margin: 0 auto;
            width: 90%;
            text-align: center;
        }     
    }
`

export const Hamburger = styled.div`
  display: none;

  @media(max-width:700px){
      display: block;
      cursor: pointer;
      position: absolute;
      right: 0;
      margin-right: 0.5em;
    }

`

export const Bar = styled.span`
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: hsl(0, 0%, 75%);

`

export const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  width: 95%;
  line-height: 1.2;
  margin-top: 1em;

  @media(max-width:700px){
      margin: 0 auto;
      margin-top: 1em;
      width: 90%;
      font-size: 2.5rem;
      text-align: center;
    }

`
export const Text = styled.p`
  margin: 0;
  width: 95%;
  margin-bottom: 1em;
  color: hsl(0, 0%, 75%);

  @media(max-width:700px){
    margin: 0 auto;
    width: 90%;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 1em;
  }
`

export const Image = styled.img`
  width: 100%;
}
`
