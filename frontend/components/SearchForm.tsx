import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FormContext } from "./FormContext";
import axios, { Axios } from "axios";
import LoadingScreen from "./LoadingScreen";
import Image from "./Image";

const SearchForm = () => {
  const [description, setDescription] = useState<string>("");
  const { formContext, setFormContext } = useContext<any>(FormContext);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);

  const getImage = async (prompt: string) => {
    const data = await axios.get(
      `http://localhost:5000/getImage?prompt=${prompt}`
    );
    setImageUrl(data.data["url"]);
    console.log(data.data);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormContext(description);
    setImageUrl("");
    setLoad(true);
    getImage(description);
  };

  useEffect(() => {
    if (imageUrl) {
      setLoad(false);
    }
  }, [description, imageUrl]);

  return (
    <>
      <h3>A.I Image Search</h3>
      <Form onSubmit={searchHandler}>
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            type="text"
            placeholder="Enter an image description"
            value={description}
            onChange={(description: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(description.currentTarget.value);
            }}
          />
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form.Group>
      </Form>
      {load && <LoadingScreen />}
      {imageUrl && <Image url={imageUrl} description={description} />}
    </>
  );
};

export default SearchForm;
