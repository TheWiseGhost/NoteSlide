import React, { useState } from "react";
import ViewNote from "./ViewNote";
import ViewAd from "./ViewAd";
import { useParams } from "react-router-dom";

const Viewer = () => {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  return (
    <>{show ? <ViewNote id={id} /> : <ViewAd setShow={setShow} id={id} />}</>
  );
};

export default Viewer;
