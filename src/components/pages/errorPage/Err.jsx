import React, { useEffect } from "react";

const Err = () => {

  useEffect(() => {
    setTimeout(() => {
      window.location.href=("/")
    }, [1000]);
  }, [])
  
  return (
    <>
      <img
        src="ErrorPhoto.jpg"
        className="img-fluid"
        alt="Erro_Page_Image"
      />
    </>
  );
};

export default Err;
