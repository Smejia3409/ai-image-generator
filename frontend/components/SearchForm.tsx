import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchForm = () => {
  const [description, setDescription] = useState<string>("");

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(description);
  };

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
