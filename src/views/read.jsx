import {useLoaderData} from "react-router-dom";
import MDEditor from '@uiw/react-md-editor';
export default function Read() {
    const Resdata = useLoaderData();
    const data = Resdata.data;
    
    return(
        <div className="grid">
            <div className="">
                <h1>{data.title}</h1>
            </div>
            <MDEditor.Markdown className="bg-black" source={data.md} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
    )
}