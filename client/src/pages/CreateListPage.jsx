import React,{useState} from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';

export default function CreateListPage() {
    

    async function sendForm(e) {
        e.preventDefault();
        const listTitle = e.target[0].value;
        
         
        const payload = {
          title: listTitle,
          
          };
        axios({
          url: 'http://localhost:5000/lists',
          method: 'POST',
          data: payload,
        });
    
        
    }
    return (
        <div>
            <h1>SKAPA LISTA</h1>
            <form onSubmit={sendForm}>
                <label htmlFor="title">Titel: </label>
                <input  type="text" name="title" id="title"/>
                <button type="submit">SKAPA</button>

            </form>
        </div>
    )
}
