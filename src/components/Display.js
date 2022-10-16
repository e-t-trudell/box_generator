import React from 'react'

const Display = (props) => {
    // passing in from parent
    const {collection,setCollection}= props

    const handleDelete=(index)=>{
        const newCollection = collection.filter((item,idx)=>(idx !== index))
        setCollection(newCollection)
    }
    const displayLook={
        width:'100%',
        margin:'10px',
        gap: '10px',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap'
    }
    
  return (
    <div style={displayLook}>
        <h4>Collection:</h4>
        {
        collection.map((item,idx)=>(
            <div key={idx}>
            <div style= {{backgroundColor:item,height:100,
        width:100}}>{item}</div>
            <button onClick={()=>(handleDelete(idx))} >Delete</button>
            </div>
        ))
        }
    </div>
    )
}

export default Display;
// to show disabled deleted on condition
// disabled = {!item.complete}