// import { useState } from "react"

import { Col, Container, Row } from "react-bootstrap"
import MainVideo from "./components/MainVideo"
import SearchBar from "./components/SearchBar"
import Video from "./components/Video"
import VideoList from "./components/VideoList"

const App= ()=>{

  // const [search,setSearch]= useState('Coding')

  // const onSubmitHandler=(e)=>{
  //   e.preventDefault()
  // }

  return <Container>
    <SearchBar/>
    <Row>
      <Col sm={8}>
        <MainVideo/>
      </Col>
      <Col sm={4}>
        <VideoList/> 
      </Col>     
    </Row>
  </Container>
}

export default App