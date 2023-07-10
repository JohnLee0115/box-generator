import React, { useState } from 'react'



const Box = (props) => {
    

    const boxStyle = {
        width: 200,
        height: 200,
        backgroundColor: props.color
    }
    


    return (
        <div style={boxStyle}></div>
    )
}

export default Box