import { useState } from 'react';
import {Button, Form, InputGroup, Stack} from 'react-bootstrap';
import { Search } from "react-bootstrap-icons";


const SearchBar=({onSubmit})=>{

  const [ search , setSearch ] = useState('')



    return <><InputGroup className="mt-3">
      {/* return <h1>TEST</h1> */}
        <Form onSubmit={(e)=> {
          e.preventDefault() 
          onSubmit(search)
        }}>    
          <Stack direction="horizontal" gap={3}>
          <Form.Control
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={e=> setSearch(e.target.value)}
            value={search}
          />
          <Button type="submit" variant='primary' id="basic-addon2"><Search size="25" /></Button>
          </Stack>
        </Form>
      </InputGroup>
      </>
     
}

export default SearchBar 