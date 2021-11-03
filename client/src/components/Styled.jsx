
import styled from 'styled-components';
const ItemDiv = styled.div`
  font-family: Lucida Handwriting;
  color:blue;
  
    font-size: 20px;
    width: auto;
    margin-bottom:10px;
    background:#ffeb99;
    text-decoration: underline;
    text-decoration-color: red; 
    border: 1px solid black;
    border-width:1px 0 1px 1px;
    padding: 15px;

`
const DoneDiv = styled.div`
  p{
    color: grey;
  
    font-style: oblique;
  }
  
    
    
    background:lightGreen;
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
  background: #ffe066;

  
  
 
  
  
  `;

export {StyledDiv, Container  ,DoneDiv, ItemDiv};