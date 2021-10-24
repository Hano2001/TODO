
import styled from 'styled-components';
const StyledNav = styled.nav`
background: red;
color: yellow;
height: 100px;
border: solid 5px yellow;
div{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 1em;
  height: 50px;
}

button{
  cursor: pointer;
  color: red;
  font-size: 1.3em;
  border: none;
  background-color: yellow;
  height: 100%;
  width: 50%;
  transition: background-color 1s, transform 1s, color 0.1s;
  border-radius: 8px;

  &:hover {
    background-color: red;
    color: yellow;
    border: solid 5px yellow;
    transform: scale(1.1);
}

`
const Container = styled.div`
display: grid;
background: orange;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  border-radius: 5px;


`
const StyledDiv = styled.div`
  margin: 20px;
  background: yellow;
  border: solid black;
  border-radius: 10px;
  div{
    font-family: comic sans ms;
    font-weight: bold;
    color: yellow;
    border-radius: 5px;
    background: coral;
    border: solid black;
    padding: 15px;
    margin: 10px;
  }
  
  
  `;

export {StyledDiv, Container, StyledNav};