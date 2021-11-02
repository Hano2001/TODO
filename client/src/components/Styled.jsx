
import styled from 'styled-components';
const StyledNav = styled.nav`
background: white;
font-family: Lucidatypewriter;
color: black;
height: 100px;
border: solid 5px black;
div{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 1em;
  height: 50px;
}

button{
  cursor: pointer;
  color: white;
  font-size: 1.3em;
  border: none;
  background-color: black;
  height: 100%;
  width: 50%;
  transition: background-color 1s, transform 1s, color 0.1s;
  border-radius: 8px;

  &:hover {
    background-color: white;
    color: black;
    border: solid 5px black;
    transform: scale(1.1);
}

`
const Container = styled.div`
display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  border-radius: 5px;


`
const DoneDiv = styled.div`
  color: red;


`
const StyledDiv = styled.div`
  margin: 20px;
  background: lightblue;
  
  
  div{
    font-family: Lucidatypewriter;
    font-weight: bold;
    color: black;
    width: auto;
    margin-bottom:10px;
    background:#33ccff;
    border: 1px solid black;
    border-width:1px 0 1px 1px;
    padding: 15px;
    
  }
  
  
  `;

export {StyledDiv, Container, StyledNav,DoneDiv};