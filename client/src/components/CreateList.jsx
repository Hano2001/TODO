import React from 'react';
import axios from 'axios';
import { StyledDiv } from './Styled';

export default function CreateList() {
    async function sendForm(e) {
        e.preventDefault();
        const listTitle = e.target[0].value;
        
         
        const payload = {
          title: listTitle,
          
          };
        axios({
          url: `${process.env.REACT_APP_API_URL}/lists`,
          method: 'POST',
          withCredentials:true,
          data: payload,
        }).then(alert('List Created!'))
        window.location.reload();
    
        
    }
    return (
        <StyledDiv>
            <h3>Create new list</h3>
            <form onSubmit={sendForm}>
                <label htmlFor="title">Title: </label>
                <input  type="text" name="title" id="title"/>
                <button type="submit">Create</button>

            </form>
        </StyledDiv>
    )
}
