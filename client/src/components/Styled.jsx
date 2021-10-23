
import styled from 'styled-components';

const Container = styled.div`
display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;


`
const StyledDiv = styled.div`
  margin: 20px;
  background: yellow;
  border: solid black;
  div{
    font-family: comic sans ms;
    font-weight: bold;
    color: yellow;
    background: coral;
    border: solid black;
    padding: 15px;
    margin: 10px;
  }
  
  
  `;
//   function deleteList(id) {
//     axios
//     .delete(`http://localhost:5000/lists/${id}`)
//     .then(() => {
//       alert("List deleted!");
    
//       window.location.reload();
    
      
//     });
// }


// export default function ListCard({list}) {

   
//     return (
//         <StyledDiv>
//             <h2>{list.title}</h2>
//             <p>{list.content}</p>
//             <button type="button" onClick={() => deleteList(list._id)}>DELETE</button>
            
//         </StyledDiv>
//     )
// }
export {StyledDiv, Container};