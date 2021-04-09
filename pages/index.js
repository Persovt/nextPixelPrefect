import Head from "next/head";
import { createRef, useEffect } from "react";
import { Form } from "react-bootstrap";

function ImageUrl({ url, signature }) {
  this.url = url;
  this.name = signature;
}
const uploadObjOnServer = async (e) => {
  console.log(await uploadImages(e))
  await fetch("api/test", {
    method: "POST",
    body: JSON.stringify(await uploadImages(e)),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
const uploadImages = async (e) => {
  const arr = [];
  const images = e.target.files;
  for (const image of images)
    arr.push(new ImageObj(await uploadImageOnServer(image)));

  return arr;
};

const uploadImageOnServer = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "BillingRestro");
  return await fetch("	https://api.cloudinary.com/v1_1/dpcp8wmqa/image/upload", {
    method: "POST",
    body: formData,
  }).then((res) => res.json());
};
export default function Home({ allPostsData }) {
  return (
    <>
      <Form>
        <Form.File
          multiple
          onChange={uploadObjOnServer}
          id="custom-file"
          label="Custom file input"
          accept=".jpg, .jpeg, .png"
          custom
        />
      </Form>
    </>
  );
}
