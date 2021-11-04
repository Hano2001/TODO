
import styled from 'styled-components';
const ItemDiv = styled.div`
  font-family: Lucida Handwriting;
  color:blue;
    height: 20px;
    font-size: 15px;
    width: auto;
    
    margin-bottom:10px;
    background:#ffeb99;
    
    border: 1px solid black;
    border-width:1px 0 1px 1px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    
    
    p{
      margin: 0;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
     transform: translateY(-50%);
    }

`
const DoneDiv = styled.div`
    
  p{
    color: grey;
    
    
    font-style: oblique;
  }
  
    
    
    background:#e6b800;
    
    display: grid;
    grid-template-columns: repeat(3, 1fr)
    
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