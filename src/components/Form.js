import {useState} from 'react'

const Form = (props) => {
    // passing in from parent
    const {collection,setCollection}= props
    // setting state of box on current page
    const [box,setBox]= useState('')
    

    // const handleChange=(e) => {
    //     setBox(e.target.value)
    // }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setCollection([...collection,box])
        console.log(box)
        console.log(collection)
        setBox('')
    }
    const formLook={
        border:'3px solid green',
        marginTop:'50px',
        // marginLeft:'100px',
        width:'100vw',
        height:'40px',
        display: 'flex',
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'black',
    }
    const newColor={
        width:'25%',
        border:'3px solid orange',
        marginRight:'10px'
        
    }
    const createBox={
        width:'100px',
        backgroundColor:'red',
        border:'3px solid brown',
        borderRadius:'5px',
        boxShadow:'4px 3px orange'
    }
  return (
    <div style={formLook}>
        <form  onSubmit={handleSubmit}>
            <label htmlFor="boxcolor"></label>
                <input style={newColor} onChange={(e) => setBox(e.target.value)} type='text' id='boxcolor' value={box}></input>
            <button style={createBox}type='submit'>Create Box</button>
        </form>
        
    </div>
  )
}

export default Form;