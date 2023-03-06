import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Search } from "react-bootstrap-icons";


const SearchBar=()=>{
    return <>
    <Form>    
      <InputGroup className="mt-3 ">
        <Form.Control
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        {/* <InputGroup.Text id="basic-addon2"> <Glyphicon glyph="remove" /></InputGroup.Text> */}
        <InputGroup.Text id="basic-addon2"><Search size="25"  /></InputGroup.Text>

      </InputGroup>
      </Form>
    </>
  
}


export default SearchBar