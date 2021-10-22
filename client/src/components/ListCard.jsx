import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';


const StyledDiv = styled.div`
  border: solid black;
  
  button{
      background: red;
      
  }
  `;
  function deleteList(id) {
    axios
    .delete(`http://localhost:5000/lists/${id}`)
    .then(() => {
      alert("List deleted!");
    
      window.location.reload();
    
      
    });
}


export default function ListCard({list}) {

   
    return (
        <StyledDiv>
            <h2>{list.title}</h2>
            <p>{list.content}</p>
            <button type="button" onClick={() => deleteList(list._id)}>DELETE</button>
            
        </StyledDiv>
    )
}
