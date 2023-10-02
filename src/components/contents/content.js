import styled from "styled-components";

import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../App";
import Footer from "../footer/footer";
function Contents() {
  const img = useContext(Context);
  console.log(img)
  const [test, setTest] = useState(1);
  const [show, setshow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const numberFive = 6;
  const number = 8;
  const indexMinmax = test * number;
  const URL_IMG = "https://image.tmdb.org/t/p/w500";
  const movieLength = Math.floor(img.length / numberFive);
  const pages = [];
  const images = img.slice(indexMinmax - number, indexMinmax);
  for (let i = 0; i < movieLength; i++) {
    pages.push(i + 1);
  }

  const handlePages = (e) => {
    const time = setTimeout(() => {
      if (width >= 1024) {
        window.scrollTo(0, 1500);
      } else {
        if (width >= 768) {
          window.scrollTo(0, 600);
        }
      }
      if (width < 768) {
        window.scrollTo(0, 390);
      }
      setshow((pre) => !pre);
      setTest(e.target.id);
    }, 800);
    setshow((pre) => !pre);
    return () => {
      if (time) {
        clearTimeout(time);
      }
    };
  };
  const elementPages = pages.map((element) => {
    return (
      <div key={element} style={{ marginBottom: "30px" }}>
        <ul>
          <li
            className={`page ${test == element ? "activeMovie" : ""}`}
            onClick={handlePages}
            id={element}
            style={test == element ? { color: "#fff" } : { color: "" }}
          >
            {element}
          </li>
        </ul>
      </div>
    );
  });

  function renderImage(data) {
    const value = data.map((element) => {
      const movie = URL_IMG + element.poster_path;
      return (
        <a
          href={`/reviewMovie/${element.id}`}
          key={element.id}
          className="view"
        >
          <div className="zoom">
            <img src={movie} alt="" className="image" />

            <div className="background">
              <h3 className="name-title">{element.title}</h3>
            </div>
          </div>
        </a>
      );
    });
    return value;
  }
  const handleWindowwidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowwidth);
    return () => {
      window.removeEventListener("resize", handleWindowwidth);
    };
  }, []);
  return (
    <div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Content>
            {renderImage(images)}
            {show && <AiOutlineLoading3Quarters className="loading" />}
          </Content>
        </div>
        <Pagemovies>{elementPages}</Pagemovies>
        <div className="sec">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contents;
const Pagemovies = styled.div`
  margin-top: 20px;
  display: flex;
  transition: all 1s;
  justify-content: center;
  ul li {
    list-style: none;
  }
  li {
    padding: 10px;
    background-color: #fff;
    font-weight: 700;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
      background-color: #ff8040;
      color: #fff;
    }
  }
  .page {
    color: #000;
  }
  .activeMovie {
    background: #e66f20;
  }
  .activeColor {
    color: #fff;
  }
  @media (max-width: 48em) {
    .page {
      padding: 7px;
      font-size: 0.85rem;
    }
  }
`;
const Content = styled.div`
  
  display: grid;
  
  margin-top 40px;
  grid-template-columns: repeat(4, 356px);
  grid-template-rows: repeat(1, 616px);
  overflow: hidden;
  padding: 20px 1px 45px 1px;
  position: relative;
  gap: 15px;
  background-color: #00081c;
  scroll-behavior: smooth;
  transition: all 1s;
  padding-left:  30px;
  &:hover .image{
    opacity: 0.7;
  }
  .image {
    width: 100%;
    opacity: 0.9;
    
  }
  .loading {
    
    position: absolute;
    left: 49%;
    bottom: -5px;
    padding: 5px;
    font-size: 2.8rem;
    color: #fff;
    animation: fadein linear 2s infinite;
  }
  .active{
    background: #ccc;
  }
  
  .sec {
    height: 1000px;
    background-color: #000;
  }
  .view {
    
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    height: 100%;
    padding: 10px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px 0;
    overflow: hidden;
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s;
      opacity: 1;
    }
  }
  .background {
    background: linear-gradient(to right, #00f2c0, #00c3da);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .name-title {
    text-align: center;
    padding: 21px 5px;
    background-color: rgba(50, 50, 50, 0.6);
    margin-top: -3px;
    color: #fff;
    font-weight: 300;
    
  }
  .zoom {
    height: 100%;
    &:hover .image{
      opacity: 1;
    }
  }
  @media (max-width: 48em) {
    display: grid;
    grid-template-columns: repeat(2,185px);
    grid-template-rows: repeat(1,300px);
    
    padding-left: 0;
    margin-top: 0;
    padding-bottom: 50px;
    gap: 0;
    &:hover .image{
      opacity: 1;
    }
    .name-title {
      font-size: 0.5rem;
      padding: 10px 5px;
    }
    .view {
      border-radius: 42px;
      &:hover {
        transform: scale(1);
      }
    }
    .loading {
      left: 44%;
    }
    
  }
  @media (min-width: 48em) and (max-width: 64em) {
    grid-template-columns: repeat(3,260px);
    grid-template-rows: none;
    padding-left: 0;
    gap: 0;
    &:hover .image{
      opacity: 1;
    }
    .loading {
      left: 47%;
    }
    .view {
      &:hover {
        transform: scale(1);
      }
    }
    .name-title {
      font-size: 0.9rem;
    }
  }
`;
