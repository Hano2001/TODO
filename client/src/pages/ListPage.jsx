import axios from "axios";
import React, {useEffect,useState} from "react";
import ListCard from "../components/ListCard";


export default function ListPage() {
    const [listData, setListData] = useState(null);
    
    

    async function getListData(){
      
        const {data} = await axios.get("http://localhost:5000/lists");
        await setListData(data.data.list);
        console.log(data.data.list);
        
        
        
    }

  

    useEffect(()=>{
        getListData()
        
    },[]);

     
    return (
        <div>
           
            {listData ? listData.map((item, index)=><ListCard list = {item} key = {item._id}/>) : (<h5>Laddar...</h5>)}
            
        </div>
    )
}
