import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { data } from "../slider-data";
import { useState } from "react";

const Banner = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = dir => {
        if (dir === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

  return (
    <div className="slider w-100 vh-100 position-relative d-flex overflow-hidden">
      <div
        className="ms-3 rounded-circle d-flex justify-content-center align-items-center position-absolute top-50 translate-middle-y start-0 z-3"
        style={{
          width: "50px",
          height: "50px",
          border: "1px solid",
          opacity: ".7",
        }}
              role="button"
              onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div
        className="slider-container h-100 vw-100 d-flex"
        style={{ transform: `translateX(${slideIndex * -100}vw)` , transition: "all 0.8s ease-in-out" }}
      >
        {data.map((item, index) => {
          return (
            <div
              className="vh-100 w-100 d-flex align-items-center"
                  style={{ backgroundColor: `#${item.bgColor}` }}
                  key={index}
            >
              <div className="vh-100 slider-img" style={{ flex: "1" }}>
                <img
                          src={item.image}
                  alt="main-banner"
                  style={{ height: "80%" , zIndex:"100"}}
                />
              </div>
              <div
                style={{
                  width: "100vw",
                  padding: "0 100px 50px 0",
                  flex: "1",
                }}
              >
                <h1 style={{ fontSize: "70px" }}>{item.title}</h1>
                <p
                  className="my-4"
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    letterSpacing: "3px",
                  }}
                >
                  {item.description}
                </p>
                <button className="btn border-1 border-dark rounded-0 py-2 px-4">
                  Shop Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="me-3 rounded-circle d-flex justify-content-center align-items-center position-absolute top-50 translate-middle-y end-0"
        style={{
          width: "50px",
          height: "50px",
          border: "1px solid",
          opacity: ".7",
        }}
        role="button"
        onClick={handleClick}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Banner;
