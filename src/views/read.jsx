import { Link, useLoaderData } from "react-router-dom";
import MDEditor from '@uiw/react-md-editor';

export default function Read() {
    const Resdata = useLoaderData();
    const data = Resdata.data;
    
    return(
        <div className="grid my-4">
            <div className="text-4xl py-[15px] text-center">
                <h1>{data.title}</h1>
            </div>
            <div className="px-10">
                <MDEditor.Markdown className="bg-black" source={data.md} style={{ whiteSpace: 'pre-wrap' }} />
            </div>
            <div className="flex px-10 py-5">
                <div className="border p-2"><Link to={`/test/${data.title}`}>Testty otu</Link></div>
            </div>
        </div>
    )
}