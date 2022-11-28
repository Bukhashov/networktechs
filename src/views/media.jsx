import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MediaNavBtn from '../components/mediaNavBtn';
import Navbar from '../components/Navbar';
import VideoPlayer from '../components/videoPlayer';

export default function Media(){
    const data = useLoaderData();
    const titles = data.data.data;
    const [mediaSrc, setMediaSrc] = useState(titles[0].src);

    const updateMediaSrc = async (src)=> {
        setMediaSrc(src);

    }
    
    return(
        <div className="h-[100vh]">
            <div className="wrapper">
                <Navbar/>
            </div>
            <div className="flex">
                <div className="grid h-[100vh] max-w-[250px] border-black border-r-2">
                    <div className="">
                        {
                            titles.map((el) => 
                                <MediaNavBtn getSrc={updateMediaSrc} key={el.id} title={el.title} src={el.src}/>
                            )
                        }
                    </div>
                    
                </div>
                <div className="w-full h-full flex justify-center items-certer">
                    <div className="grid w-[750px] h-[650px]">
                        <VideoPlayer src={mediaSrc} />
                        {mediaSrc}
                    </div>
                </div>
            </div>
        </div>
    )
}