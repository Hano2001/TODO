import { deleteData } from "../utilities/delete";
import { useFetch } from "../utilities/useFetch";


export default function ListPage() {
    const url = "http://localhost:3000/todo";
    const listData= useFetch(url);
    console.log(listData)

    

     
    return (
        <div>
            {listData.map((item, index)=>{
                return <div key={item._id}>
                    
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        
                    </div>
            })}
        </div>
    )
}
