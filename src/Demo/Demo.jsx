import { useState } from "react";
import Auth from "./Auth/Auth";

const Demo = () => {
  const [modal, setModal] = useState(true);

  return (
    <>
      <Auth modal={modal} setModal={setModal} />
    </>
  );
};

export default Demo;
