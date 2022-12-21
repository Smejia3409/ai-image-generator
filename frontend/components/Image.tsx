import React from "react";

const Image = (props: { url: string; description: string }) => {
  return (
    <>
      <h4 className="text-center">{props.description}</h4> <br />
      <div className="d-flex justify-content-center">
        <img src={props.url} height="400" width="500" />
      </div>
    </>
  );
};

export default Image;
