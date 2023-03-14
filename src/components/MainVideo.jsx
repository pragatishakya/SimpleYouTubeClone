import Card from 'react-bootstrap/Card';

const MainVideo=({videoRef})=>{
  console.log(videoRef.videoId)
  const videoSrc= `https://www.youtube.com/embed/${videoRef.videoId}`
    return <>
    <Card className="mt-3 p-0">
      <Card.Body>
      {/* <Card.Img variant="top" src="https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=921&q=80" /> */}
      <iframe height="100%" width="100%" title="VideoTitle" src={videoSrc}/>

        <Card.Title>{videoRef.snippet.channelTitle}</Card.Title>
        <Card.Text>
          {videoRef.snippet.description}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
}

export default MainVideo