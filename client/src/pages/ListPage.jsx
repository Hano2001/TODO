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
        console.log(data.data.list);
        
        
        
    }

    function deleteList(id) {
        axios
        .delete(`http://localhost:5000/lists/${id}`)
        .then(() => {
          alert("List deleted!");
        
          getListData();
        
          
        });
    }

    function ListCard({list}) {

   
        return (
            
            <StyledDiv>
                
                <h2>{list.title}</h2>
                <p>{list.content}</p>
                <button type="button" onClick={() => deleteList(list._id)}>DELETE</button>
                
            </StyledDiv>
            
        )
    }
  

    useEffect(()=>{
        getListData()
        
    },[]);

     
    return (
        <Container>
           
            {listData ? listData.map((item, index)=><ListCard list = {item} key = {item._id}/>) : (<h5>Laddar...</h5>)}
            <Link to="/createlist">Skapa ny lista</Link>
            </Container>
    )
}
