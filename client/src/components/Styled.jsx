
import styled from 'styled-components';
const ItemDiv = styled.div`
  font-family: Lucidatypewriter;
    font-weight: bold;
    color: black;
    width: auto;
    margin-bottom:10px;
    background:#33ccff;
    border: 1px solid black;
    border-width:1px 0 1px 1px;
    padding: 15px;

`
const DoneDiv = styled.div`
font-family: Lucidatypewriter;
    font-weight: cursive;
    text-decoration: line-through;
    color: black;
    width: auto;
    margin-bottom:10px;
    background:red;
    border: 1px solid black;
    border-width:1px 0 1px 1px;
    padding: 15px;
`


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  border-radius: 5px;


`

const StyledDiv = styled.div`
  margin: 20px;
  background: lightblue;

  
  
 
  
  
  `;

export {StyledDiv, Container  ,DoneDiv, ItemDiv};