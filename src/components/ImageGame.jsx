import { useRef } from "react";

const ImageGame = () => {
  let imgRef = useRef(null);

  const change = () => {
    imgRef.current.src = "https://i.ibb.co/Sr8B731/Pathaan-film-poster.jpg";
    imgRef.current.removeAttribute("height")
    imgRef.current.setAttribute("height", "300px");
    imgRef.current.removeAttribute("width")
    imgRef.current.setAttribute("width", "250px");
  };
  return (
    <div style={{padding:"50px"}}>
      <h2 style={{fontFamily:"Roboto" , fontWeight:"700"}} >Click The Button To Play The Game</h2>
      <img
        height={"200px"}
        width={"200px"}
        ref={imgRef}
        src="https://i.ibb.co/bFBht3Y/ab67616d0000b2738160895f32a670e8276175e7.jpg"
      />
      <br />
      <button
        style={{
          backgroundColor: "rgb(9, 161, 166)",
          border: "none",
          padding: "4px 13px",
          fontSize: "16px",
          borderRadius:"3px",
          color:"white"
        }}
        onClick={change}
      >
        Click Me
      </button>
    </div>
  );
};

export default ImageGame;
