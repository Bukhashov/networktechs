import React from "react";
import MDEditor from '@uiw/react-md-editor';
import axios from "axios";

export default function New(){
    const [value, setValue] = React.useState("**Hello world!!!**");

    function save(params) {
        axios.post('http://localhost:4000/api/v1/add/lecture', {
            title: "title",
            lecture: value,
        })    
    }

    return(
        <div className="wrapper">
            <MDEditor value={value} onChange={setValue} />
            {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
            <button onClick={save}>Saqtau</button>
        </div>        
    )
}