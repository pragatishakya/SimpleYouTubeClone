import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import youtube from "./components/api/youtube"
import MainVideo from "./components/MainVideo"
import SearchBar from "./components/SearchBar"
import VideoList from "./components/VideoList"

const App= ()=>{

  const[ mainVideo, setMainVideo ]=useState('')
  const[ videos, setVideos ]=useState([])

  const handleSubmit= async (searchTerm)=>{
    const response= await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyDpSQ5pcks16T9OjJ_y27P3UfolQ31bP2I',
        q:searchTerm
      }
    })
    // console.log(response.data.items[0].id.videoId)
    setMainVideo(response.data.items[0])
    setVideos(response.data.items)
  }

  useEffect(()=>{
    handleSubmit('Node.js')
  },[])

  return <Container>
    {/* <h1>Hello</h1> */}
    <SearchBar onSubmit={handleSubmit}/>
    <Row>
      <Col sm={8}>
        <MainVideo videoRef={mainVideo}/>
      </Col>
      <Col sm={4}>
        <VideoList videosList={videos} setMainVideo={setMainVideo} /> 
      </Col>     
    </Row>
  </Container>
}

export default App