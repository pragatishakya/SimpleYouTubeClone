import {Container, Row ,Col } from 'react-bootstrap'

const Video=({videoDetail, setMainVideo})=>{

  const minivideoSrc= `https://www.youtube.com/embed/${videoDetail.id.videoId}`
  // console.log(setMainVideo)
    return <>
    <Container onClick={()=>{
      setMainVideo(videoDetail)
    }}>
      <Row className='mt-1'>
        <Col sm={4}>
          <iframe height="100%" width="100%" title="sideVideo" src={videoDetail.snippet.thumbnails.default.url}/>
        </Col>
        <Col sm={8}>
          <p>{videoDetail.snippet.title}</p>
          <p><small>{videoDetail.snippet.channelTitle}</small></p>
        </Col>
      </Row>
    </Container>
  </>
}

export default Video