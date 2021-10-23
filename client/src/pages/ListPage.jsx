import axios from "axios";
import React, {useEffect,useState} from "react";
//import ListCard from "../components/ListCard";
import { Link } from 'react-router-dom';
import {StyledDiv,Container} from '../components/Styled';


export default function ListPage() {
    const [listData, setListData] = useState(null);
    
    

    async function getListData(){
      
        const {data} = await axios.get("http://localhost:5000/lists");
        await setListData(data.data.list);
        console.log(data.data.list[0].content);
        
        
        
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
                
                
                
            </StyledDiv>
            
         
            <button type="button" onClick={() => deleteList(list._id)}>DELETE LIST</button>
            </div>
        )
    }
  

    useEffect(()=>{
        getListData()
        
    },[]);

     
    return (
        <Container>
           
            {listData ? listData.map((item, index)=><ListCard list = {item} key = {item._id}/>) : (<h5>Laddar...</h5>)}
            
            </Container>
    )
}
