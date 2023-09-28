import './App.css'
import Form from "./components/Form";

function App() {
  
  return (
    <>
      <h1>Picture List</h1>
      <Form />
    </>
  )
}

export default App

// function ImageForm({value, onUrlChange}) {
//     return (
//       <>
//         <form>
//           <input type="url" value={value} onChange={onUrlChange}></input>
//           <input type="url"></input>
//           <input type="url"></input>
//         </form>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </>
//     );
      
// }

// function ImageList() {
//     return (
//       <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//     );
// }

// function ImageBoard() {
//   const [pics, setPics] = useState(Array(3).fill(""));

//     return (
//         <div>
//             <ImageForm className="form" />
//             <ImageList />
//         </div>
//     );
// }

// export default ImageBoard
