import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FormContext } from "./FormContext";
import axios, { Axios } from "axios";

const SearchForm = () => {
  const [description, setDescription] = useState<string>("");
  const { formContext, setFormContext } = useContext<any>(FormContext);

  const getImage = async (prompt: string) => {
    const data = await axios.get(
      `http://localhost:5000/getImage?prompt=${prompt}`
    );

    console.log(data.data);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(description);
    setFormContext(description);
    console.log(description);
    getImage(description);
  };

  useEffect(() => {}, [description]);

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
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
};

export default SearchForm;
