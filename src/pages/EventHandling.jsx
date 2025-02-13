import React from 'react'

const EventHandling = () => {

    const handleButtonClick = (e)=>{
        // console.log(e);
        // console.log(e.target)
        // console.log(e.type)
       alert("Hey I am onclick");
    }

  return (
    <>
       <button onClick={handleButtonClick}> Click Me</button>
       <br />
       <button onClick={()=> handleButtonClick()}> Click Me 2</button>
    </>
  )
}

export default EventHandling 
