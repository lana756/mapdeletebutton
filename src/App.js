import React, {useState} from 'react'
import ListItem from "./ListItem";

function App() {
 const [list, setList] = useState([1, 2, 3])
    const counterPlus = (index) => {
     const  newArr = list.map((el, i) => {
         if(index === i) {
             return el + 1
         }
         return el
     })
        setList(newArr)
    }
    const counterMinus = (index) => {
     const newArr1 = list.map((el, i) => {
         if(index === i) {
             return el-1
         }
         return el
     })
        setList(newArr1)
    }

  return(
      <div>
          {list.map((el, index) => <ListItem el = {el}
                                    index = {index}
                                    key = {Math.random()}
                                    counterPlus = {counterPlus}
                                     counterMinus ={counterMinus}/>)}
      </div>
  )
}
export default App;