import axios from "axios";
import React, {useEffect,useState} from "react";
import { Link } from 'react-router-dom';
import CreateList from "../components/CreateList";
import {StyledDiv,Container} from '../components/Styled';


export default function ListPage() {
    const [listData, setListData] = useState(null);
    
    

    async function getListData(){
      
        const {data} = await axios.get("http://localhost:5000/lists");
        await setListData(data.data.list);
        
        
        
        
    }

    function deleteList(id) {
        axios
        .delete(`http://localhost:5000/lists/${id}`)
        .then(() => {
          alert("List deleted!");
        
          getListData();
        
          
        });
    }

   function addItem(e, id) {
        e.preventDefault();
       console.log(e.target[0].value);
       console.log(id)
       
       const newItem = e.target[0].value;
       const payload = {
           item : newItem,
       }
       axios({
        url: `http://localhost:5000/lists/${id}`,
        method: 'POST',
        data: payload,
      });
      getListData();
    }

    function ListCard({list}) {
        
            return (
            <div>
              
            <StyledDiv>
            <p>Last edited: {list.edited}</p>
            <form onSubmit={e=>addItem(e, list._id)}>
                <label  htmlFor="item">Add Item: </label>
                <input  type="text" name="item" id="item"/>
                <button type="submit">Add to list</button>

            </form>
                <h2>{list.title}</h2>
                {list.content.map((item)=>{
                   return (
                   <div>
                   <p key= {item.Title}>{item.Title}</p> 
                   <button>DONE</button>
                   </div>)
                })}
                
                
               <button type="button" onClick={() => deleteList(list._id)}>DELETE LIST</button> 
            </StyledDiv>
            
         
            
            </div>
        )
    }
  

    useEffect(()=>{
        getListData()
        
    },[]);

     
    return (
        <div>
            <CreateList/>
        <Container>
           
            {listData ? listData.map((item, index)=><ListCard list = {item} key = {item._id}/>) : (<h5>Laddar...</h5>)}
            
            </Container>
            </div>
    )
}
