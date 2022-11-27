import { useLoaderData } from "react-router-dom";
import { useState } from 'react'

export default function NewTest(){
    const data = useLoaderData();
    const dataTitle = data.data.titles;
    const [title, setTitle] = useState(dataTitle[0].title);
    const [testNumber, setTestNumber] = useState(10);


    const titleOnChange = async (event) => {
        setTitle(event.target.value);
    }
    const testNumberOnChage = async (event) => {
        setTestNumber(event.target.value);
    }

    // const genTest = testn => {
    //     let tests = [];
    //     for(let i = 0; i < testn; i++){
            
    //     }
    //     // return i;
    // }

    return(
        <div className="grid">
            <div className="flex">
                <div className="p-3">
                    <select className="border bg-white" id="title" onChange={titleOnChange} value={title} >
                        {
                            dataTitle.map((titles)=> 
                                <option key={titles.id} value={titles.title}>{titles.title}</option>
                            )
                        }
                    </select>
                </div>
                <div className="flex p-3 items-center">
                    <div>Testter sani: </div>
                    <input className="w-[50px] border mx-1" type="number" value={testNumber} onChange={testNumberOnChage}/>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}