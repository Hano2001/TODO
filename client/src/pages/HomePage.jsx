import React, { useContext, useState } from "react";
import { ContextInfo } from "../contexts/ContextInfo";


export default  function HomePage() {
    const {setListData} = useContext(ContextInfo);

    fetch("http://localhost:3000/todo").then((res) =>
    res.json().then((data) => setListData(data.results)));
  
  
    return (
        <div>
            
        </div>
    )
}

