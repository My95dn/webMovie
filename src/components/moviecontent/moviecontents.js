import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../../App";
function Moviecontent() {
  const [slider, setslider] = useState(0);
  const [viewWidth, setviewWidth] = useState();
  const [width, setWidth] = useState(window.innerWidth)
  const clientwidth = useRef();
  const dataAPI = useContext(Context);
  const seventeen = 17
  const number = 90;
  const view = "https://image.tmdb.org/t/p/w500";
  let subtime;
  useEffect(() => {
    subtime = setInterval(() => {
      handleView();
    }, 10000);
    return () => {
      clearInterval(subtime);
    };
  }, [slider]);

  function handleLeft() {
    const sub = clientwidth.current.clientWidth;

    setviewWidth(sub);
    setslider((pre) => (pre <= 0 ? dataAPI.length / 2 - 1 + 1 : pre - 1));
  }
  const handleView = () => {
    clearInterval(subtime);

    const sub = clientwidth.current.clientWidth;
    setviewWidth(sub);

    setslider((pre) => (pre > dataAPI.length / 2 - 1 ? 0 : pre + 1));
  };
  const handleWidth = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWidth)
    return () => {
      window.removeEventListener('resize', handleWidth)
    }
  }, [])
  return (
    <Appslider>
      <Slider>
        <Showmovie
          style={width < 768 ?  {
            transform: `translateX(-${slider * (viewWidth - seventeen) * 2}px)`,
          } : {
            transform: `translateX(-${slider * (viewWidth - number) * 2}px)`,
          }}
        >
          {dataAPI.map((element) => {
            const show = view + element.backdrop_path;
            return (
              <div className="parent" ref={clientwidth} key={element.id}>
                <div className="show">
                  <a href={`/reviewMovie/${element.id}`} className="sub">
                    <img src={show} className="image" />
                    <div className="section">
                      <h3 className="movie">{element.title} </h3>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </Showmovie>
        <FaAngleLeft className="left" onClick={handleLeft} />
        <FaAngleRight className="right" onClick={handleView} />
      </Slider>
    </Appslider>
  );
}

export default Moviecontent;
const Appslider = styled.div`
  position: relative;
`;
const Slider = styled.div`
  overflow: hidden;
  .left {
    color: #fff;
    position: absolute;
    top: 45%;

    left: 2%;
    font-size: 3rem;
    background-color: rgba(80, 80, 80, 0.5);
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
  .right {
    color: #fff;
    position: absolute;
    top: 45%;
    right: 1%;
    font-size: 3rem;
    background-color: rgba(80, 80, 80, 0.5);
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
  @media (max-width: 48em) {
    
    .right {
      font-size: 2.5rem;
      top: 41%;
    }
    .left {
      font-size: 2.5rem;
      top: 41%;
    }
  }
`;
const Showmovie = styled.div`
  display: flex;

  transition: all 1.5s;
  background-color: #00081c;
  scroll-behavior: smooth;

  &:hover .sub {
    opacity: 0.9;
  }
  .image {
    border-radius: 20px;
  }

  .parent {
    display: flex;
  }
  .show {
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px 0;
    padding: 20px;
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s;
    }
  }

  .movie {
    text-align: center;
    color: #ff8040;
  }
  .section {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    padding: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .sub {
    position: relative;
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 48em) {
    display: grid;
    grid-template-columns: repeat(20, 300px);
    &:hover .sub {
      opacity: 1;
    }
    .image {
      width: 100%;
    }
    .movie {
      font-size: 0.79rem;
    }
  }
  @media (min-width: 48em) and (max-width: 64em) {
    display: grid;
    grid-template-columns: repeat(20, 400px);
    .image {
      width: 100%;
    }
    .movie {
      font-size: 1rem;
    }
  }
`;
