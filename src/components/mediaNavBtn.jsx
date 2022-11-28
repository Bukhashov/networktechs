import { useState } from 'react'

export default function MediaNavBtn({getSrc, title, src}){
    const [MediaSrc, setMediaSrc] = useState(src);
    
    // console.log(src)
    const BtnOnClick = async () => {
        getSrc(MediaSrc);
    }

    return(
        <div className="w-full border-b-2 border-black px-2 py-2 cursor-pointer" onClick={BtnOnClick}>
            <div>{title}</div>
        </div>
    )
}