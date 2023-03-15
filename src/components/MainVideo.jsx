import Card from 'react-bootstrap/Card';

const MainVideo=({videoRef})=>{
  
  if(!videoRef) return <h1>Loading...</h1>

  const videoSrc= `https://www.youtube.com/embed/${videoRef.id.videoId}`
    return <>
    <Card className="mt-3 p-0">
      <Card.Body>
      <iframe height="100%" width="100%" title="VideoTitle" src={videoSrc}/>
        <h3>{videoRef.snippet.channelTitle}</h3>
        <Card.Title>{videoRef.snippet.title}</Card.Title>
        <Card.Text>{videoRef.snippet.description}</Card.Text>
      </Card.Body>
    </Card>
  </>
}

export default MainVideo