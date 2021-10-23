import React,{useState} from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';

export default function CreateListPage() {
    const [created, setCreated] = useState(false);

    // function onChange(e){
    //     console.log(`${e.target.name}: ` +e.target.value)
    //     setListInfo({ ...listInfo, [e.target.name]: e.target.value });
    // }
    async function sendForm(e) {
        e.preventDefault();
        const listTitle = e.target[0].value;
        const listContent = e.target[1].value;
        console.log(listContent);   
        const payload = {
          title: listTitle,
          content: listContent,
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
                <label htmlFor="content">Beskrivning: </label>
                <input  type="text" name="content" id="content"/>
                <button type="submit">SKAPA</button>

            </form>
        </div>
    )
}
