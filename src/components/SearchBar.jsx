import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon'

const SearchBar=()=>{
    return <>
    <Form>    
      <InputGroup className="mt-3">
        <Form.Control
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        {/* <InputGroup.Text id="basic-addon2"> <span><Glyphicon glyph="search"/></span></InputGroup.Text> */}
        <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>

      </InputGroup>
      </Form>
    </>
  
}


export default SearchBar