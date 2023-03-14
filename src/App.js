// import { useState } from "react"

import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import youtube from "./components/api/youtube"
import MainVideo from "./components/MainVideo"
import SearchBar from "./components/SearchBar"
import VideoList from "./components/VideoList"

const App= ()=>{

  const[  mainVideo, setMainVideo ]=useState('')

  const handleSubmit= async (searchTerm)=>{
    const response= await youtube.get('Search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyCpgOXdFvSk7PFamvd0394TTuQ36W0AoGM',
        q:searchTerm
      }
    })
    console.log(response.data)
    setMainVideo(response.data.item[0])

  }

  return <Container>
    {/* <h1>Hello</h1> */}
    <SearchBar onSubmit={handleSubmit}/>
    <Row>
      <Col sm={8}>
        <MainVideo videoRef={mainVideo}/>
      </Col>
      <Col sm={4}>
        <VideoList/> 
      </Col>     
    </Row>
  </Container>
}

export default App