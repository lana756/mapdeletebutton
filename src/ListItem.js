import React from 'react'

function ListItem(props) {
    const counter = props.el
   const buttonPlusHandler = () => {
       props.counterPlus(props.index)
   }
   const counter1 = () => {
        props.counterMinus(props.index)
   }
    return(
        <div>
            <button onClick={counter1}> - </button>
            {counter}
            <button onClick={buttonPlusHandler}> + </button>
        </div>
    )
}
export default ListItem;