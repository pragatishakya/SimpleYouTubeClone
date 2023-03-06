import Video from "./Video"

const VideoList=()=>{
    const videos=[1,2,3,4,5,6,7]
    return <div className="mt-5">
        {videos.map((vid,idx)=> <Video key={idx} />)}
    </div>
}



export default VideoList