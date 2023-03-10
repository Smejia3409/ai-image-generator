import Head from "next/head";
import SearchForm from "../components/SearchForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormContext } from "../components/FormContext";
import { useState } from "react";

export default function Home() {
  const [formContext, setFormContext] = useState<any>("hello");
  return (
    <>
      <Head>
        <title>AI Image Generator</title>
        <meta name="description" content="Open AI Image generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FormContext.Provider value={{ formContext, setFormContext }}>
        <div className="container">
          <SearchForm />
        </div>
      </FormContext.Provider>
    </>
  );
}
