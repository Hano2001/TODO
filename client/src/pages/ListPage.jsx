import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateList from "../components/CreateList";
import { StyledDiv, Container, DoneDiv, ItemDiv } from '../components/Styled';

export default function ListPage() {
    const [listData, setListData] = useState(null);
    

    async function getListData() {

        const { data } = await axios.get("http://localhost:5000/lists");
        await setListData(data.data.list);
    }

    function deleteList(id) {
        let answer= window.confirm("Are you sure?")
        if(answer){

        
        axios
            .delete(`http://localhost:5000/lists/${id}`)
            .then(() => {
                alert("List deleted!");

                getListData();
            });
        }
    }

    async function itemDone(itemId,listId,doneStatus){
       const payLoad = {
           itemId :itemId,
           doneStatus: doneStatus
       }
       await axios({
            url: `http://localhost:5000/lists/content/${listId}`,
            method: 'POST',
            data: payLoad,
        });
        getListData();

    }
    async function removeItem(itemId,listId){
        const payLoad = {
            itemId :itemId
        }
        await axios({
             url: `http://localhost:5000/lists/content/delete/${listId}`,
             method: 'POST',
             data: payLoad,
         });
         console.log("Removed Item")
         getListData();
 
     }

    async function addItem(e, id) {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(id)

        const newItem = e.target[0].value;
        const payLoad = {
            item: newItem,
        }
        await axios({
            url: `http://localhost:5000/lists/${id}`,
            method: 'POST',
            data: payLoad,
        });
        getListData();
    }

    function ListCard({ list }) {
        const [showDone, setShowDone] = useState(false);
        return (
            <div>

                <StyledDiv>
                    <p>Last edited: {list.edited}</p>
                    <form onSubmit={e => addItem(e, list._id)}>
                        <label htmlFor="item">Add Item: </label>
                        <input type="text" name="item" id="item" />
                        <button type="submit">Add to list</button>

                    </form>
                    <h2>{list.title}</h2>
                    
                    {list.content.map((item) => {
                        if(item.done === false){
                            
                        
                        return (
                            <ItemDiv>
                                <p key={item._id}>{item.title}</p>
                                <button onClick={() => itemDone(item._id,list._id, item.done)}>Done</button>
                            </ItemDiv>)
                        }
                    })}
                    
                    {showDone?
                    <DoneDiv>
                    <h3>Done Tasks</h3>
                    {list.content.map((item) => {
                        if(item.done === true){
                            
                        return (
                            <ItemDiv>
                                <p key={item._id}>{item.title}</p>
                                <button onClick={() => itemDone(item._id,list._id, item.done)}>Reactivate</button>
                                <button onClick={() => removeItem(item._id,list._id)}>Remove</button>
                            </ItemDiv>)
                        }
                    })}
                    </DoneDiv>
                    :null}
                    {/* <button type="button" onClick={()=> setShowDone(true)}>Show done tasks</button> */}
                    <button type="button" onClick={()=> setShowDone(!showDone)}>Done Tasks</button>
                    


                    <button type="button" onClick={() => deleteList(list._id)}>DELETE LIST</button>
                </StyledDiv>



            </div>
        )
    }


    useEffect(() => {
        getListData()

    }, []);


    return (
        <div>
            <CreateList />
            <Container>

                {listData ? listData.map((item, index) => <ListCard list={item} key={item._id} />) : (<h5>Laddar...</h5>)}

            </Container>
        </div>
    )
}
