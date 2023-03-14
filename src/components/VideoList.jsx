import Video from "./Video"
import Card from 'react-bootstrap/Card';

const VideoList=()=>{
    const videos=[1,2,3,4,5]

    return <div className="mt-3">
        <Card className="mt-3">
        <Card.Body>
            {videos.map((vid,idx)=> <Video key={idx} />)}
        </Card.Body>
        </Card>
        
    </div>
}


export default VideoList