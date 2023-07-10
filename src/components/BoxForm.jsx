import React, { useState } from 'react'

const BoxForm = (props) => {
    const {boxList} = props
    const [color, setColor] = useState("");

    

    const createBox = (e) => {

        e.preventDefault();

        const newBox = {
            color : color
        };

        boxList(newBox);
    }




    return (
        <form onSubmit={ createBox } >
            <label>Color </label>
            <input type="text" onChange={ (e) => setColor(e.target.value) }/>
            <input type="submit" value="Add" />
        </form>
    );
};

export default BoxForm