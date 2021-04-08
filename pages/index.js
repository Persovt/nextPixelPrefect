import Head from "next/head";
import {createRef,useEffect} from 'react'
import { Form } from "react-bootstrap";

const checkFild = (e) => {
 
  var blobFile = e.target.files[0]
  var formData = new FormData();
  formData.append("fileToUpload", blobFile);
  fetch('api/test', {
    method: 'POST',
    headers: {'Content-Type':'multipart/form-data'},
    body: formData
  })
}
export default function Home({ allPostsData }) {
  let ref = createRef();
  
  return (
    <>
      <Form>
        <Form.File
          // ref={ref}
          onChange={checkFild}
          // onChange={checkFild}
          id="custom-file"
          label="Custom file input"
          accept=".jpg, .jpeg, .png"
          custom
        />
      </Form>
    </>
  );
}
