import styled from "styled-components"

export const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`

export const Group = styled.div`


    @media(min-width:700px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const NavGroup = styled.div`
    display: flex;  
    justify-content: space-between;
    align-items: flex-end; 

    @media(min-width:700px){
            
        
    }
`

export const NavBar = styled.nav`
    background-color: hsl(257, 27%, 26%);
    width: 90%;
    border-radius: 10px;
    position: absolute;
    top: 3em; 

    @media(min-width:700px){
        background-color: #fff;
        display: flex;
        position: static;
        justify-content: space-between;
    }
`
export const NavList = styled.ul`
    text-align: center;
    padding: 0;
    margin: 0.5em 0;
    

    @media(min-width:700px){
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin: 0;

        
    }

    
`
export const NavItem = styled.li`
    list-style-type: none;
    font-weight: 500;
    color: hsl(0, 0%, 75%);
    font-size: 0.8rem;
    padding: 0.25em;
    cursor: pointer;
    margin-right: 2em;

    &:hover,:focus{
        color: #fff;
    }

    @media(min-width:700px){
        display: flex; 
        padding: 0;

        &:hover,:focus{
            color: #000;
        }
    }
`

export const Break = styled.div`
    height: 0.5px;
    background-color: hsl(0, 0%, 75%);
    width: 80%;
    margin: 0 auto;

    @media(min-width:700px){
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
    margin-right: 2em;

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
    display: block;
    cursor: pointer;
    position: relative;
    right: 0;
    margin-right: 0.5em;

  @media(min-width:700px){
        
    }

`

export const Bar = styled.span`
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: hsl(0, 0%, 75%);

    @media(min-width:700px){
        visibility: hidden;
        cursor: none;
    }

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
