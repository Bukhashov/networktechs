import React from "react";
import MDEditor from '@uiw/react-md-editor';
import axios from "axios";

export default function New(){
    const [mdValue, setValue] = React.useState("**Hello world!!!**");
    const [title, setTitle] = React.useState("");


    function save(params) {
        console.log(title);
        console.log(mdValue);
        axios.post('http://localhost:4000/api/v1/add/lecture', {
            title: title,
            lecture: mdValue,
        })    
    }

    const changeTitle = (event)=> {
        setTitle(event.target.value);
    }

    return(
        <div className="wrapper">
            <div className="flex p-2 items-center">
                <h3>Title: </h3>
                <input className="border mx-[2px] my-[2px]" value={title} type="text" onChange={changeTitle}></input>
            </div>
            <MDEditor value={mdValue} onChange={setValue} />
            <button onClick={save}>Saqtau</button>
        </div>        
    )
}