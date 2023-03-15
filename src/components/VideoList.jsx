import Video from "./Video"
import Card from 'react-bootstrap/Card';

const VideoList=({videosList,setMainVideo})=>{

    if(videosList.length ===0) return <h1>Loading...</h1>
    else{return <div className="mt-3">
        <Card className="mt-3">
            {videosList.map((vid,idx)=> <Video videoDetail={vid} key={idx} setMainVideo={setMainVideo}/>)}
        </Card>
    </div>}
    
}


export default VideoList