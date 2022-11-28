import ReactPlayer from 'react-player'
export default function VideoPlayer(props){
    return(
        <ReactPlayer 
            className="top-0 left-0" 
            url={props.src} 
            width='100%' 
            height='100%'
            controls={true}
        />
    )
}