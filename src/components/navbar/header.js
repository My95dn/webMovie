import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { ImHome3 } from "react-icons/im";
import { BiMovie, BiMoviePlay } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  AiFillCloseCircle,
  AiOutlineLoading3Quarters,
  AiOutlineMenu,
} from "react-icons/ai";
import React, { useMemo } from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Header(prop) {
  const url = "https://image.tmdb.org/t/p/w500";
  const [images, setimage] = useState([]);
  const [int, setInt] = useState("");
  const [active, setActive] = useState("");
  const [viewscoll, setviewscoll] = useState(0);
  const [loadMore, setloadMore] = useState(5);

  const opa = 1;
  const [loading, setloading] = useState(false);
  const [moudle, setMoudle] = useState(false);

  function renderint(e) {
    setInt(e.target.value);
  }
  function handleClose() {
    setInt("");
  }
  const handlefilter = () => {
    let data = images.slice(0, loadMore);

    const showImage = data.map((i) => {
      const findSearch = i.title.toLowerCase().includes(int.toLowerCase());
      if (findSearch) {
        const show = url + i.backdrop_path;
        return (
          <a
            href={`/reviewMovie/${i.id}`}
            key={i.id}
            style={{ display: "flex" }}
          >
            <img
              className="imagess"
              src={show}
              alt={i.original_title}
              style={{ width: "30%", padding: "10px 10px" }}
            />
            <span className="showtitle">{i.title}</span>
          </a>
        );
      }
    });

    return showImage;
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        const resutl = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8"
        );
        return resutl.data;
      } catch (error) {
        console.log("error movie", error);
      }
    };
    getdata().then((data) => {
      setimage(data.results);
    });
  }, []);
  useEffect(() => {
    const handleScolly = () => {
      setviewscoll((pre) => {
        return (pre = window.scrollY || document.documentElement.scrollTop);
      });
    };

    window.addEventListener("scroll", handleScolly);
    return () => {
      window.removeEventListener("scroll", handleScolly);
    };
  }, []);
  const handleColor = (opa) => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const coLor = `${r}, ${g}, ${b},${opa}`;
    return coLor;
  };

  const handleLoadimages = () => {
    setloading((pre) => !pre);
    const time = setTimeout(() => {
      setloadMore((p) => p + p);
      setloading((pre) => !pre);
    }, 800);
    return () => {
      if (time) {
        clearTimeout(time);
      }
    };
  };
  const handleActive = (item) => {
    setActive(item);
  };
  const handleMenu = () => {
    setMoudle((pre) => !pre);
  };
  const handleClosemenu = () => {
    setMoudle((pre) => !pre);
  };
  const handleMoudleBackgroud = () => {
    setMoudle((pre) => !pre);
  };
  return (
    <Navbar>
      <div
        className="subnavbars"
        style={
          viewscoll > 55
            ? { backgroundColor: "rgba(255,255,255,0.7)" }
            : { backgroundColor: "#fff" }
        }
      >
        <div className="app-sub">
          <a href="/" className="subimg">
            <img
              className="image"
              src="https://inkythuatso.com/uploads/thumbnails/800/2021/09/cgv-logo-inkythuatso-1-14-16-41-01.jpg"
            />
          </a>

          <div className="section">
            <FiSearch className="search" />
            <div className="list">
              {int !== "" && (
                <AiFillCloseCircle
                  className="close"
                  onClick={handleClose}
                  style={{ marginTop: "4px" }}
                />
              )}
              <input
                className="inputSearch"
                type="text"
                placeholder="Search"
                value={int}
                onChange={renderint}
              />
            </div>

            <div
              className="moudle"
              style={
                int.length > 0
                  ? {
                      transition: `all 1.5s`,
                      transform: `translateY(3px)`,
                      display: "block",
                    }
                  : { transition: `all .5s`, display: "none" }
              }
            >
              {handlefilter()}
              <div className="load-more">
                {loading && <AiOutlineLoading3Quarters className="loading" />}

                <button className="load-images" onClick={handleLoadimages}>
                  LoadMore Movie
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sub">
          <ul>
            <ImHome3
              style={{ color: `rgba(${useMemo(() => handleColor(opa), [])})` }}
              className="homeIcon"
            />
            <a href="/">
              <li>Home</li>
            </a>
            <BiMoviePlay
              style={{ color: `rgba(${useMemo(() => handleColor(opa), [])})` }}
              className="homeIcon"
            />
            <Link to="/allMovies">
              <li className="link" onClick={() => handleActive("All movie")}>
                All movie
              </li>
            </Link>
            <BiMovie
              style={{ color: `rgba(${useMemo(() => handleColor(opa), [])})` }}
              className="homeIcon"
            />
            <Link to="/Contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="app-menu">
          <AiOutlineMenu className="menu" onClick={handleMenu} />
          <div
            className="moudle-app"
            style={
              moudle
                ? { transform: "translateX(-25%)" }
                : { transform: "translateX(-100%)" }
            }
          >
            <AiFillCloseCircle
              className="closeMenu"
              onClick={handleClosemenu}
            />
            <div className="list-item">
              <ul>
                <ImHome3
                  style={{
                    color: `rgba(${useMemo(() => handleColor(opa), [])})`,
                  }}
                  className="homeIcon"
                />
                <a href="/">
                  <li>Home</li>
                </a>
                <BiMoviePlay
                  style={{
                    color: `rgba(${useMemo(() => handleColor(opa), [])})`,
                  }}
                  className="homeIcon"
                />
                <Link to="/allMovies">
                  <li
                    className="link"
                    onClick={() => handleActive("All movie")}
                  >
                    All movie
                  </li>
                </Link>
                <BiMovie
                  style={{
                    color: `rgba(${useMemo(() => handleColor(opa), [])})`,
                  }}
                  className="homeIcon"
                />
                <Link to="/Contact">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
            <div style={{ textAlign: "center", marginTop: "35px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <BsFillTelephoneFill
                 
                  className="iconPhone"
                />
                <p
                  style={{
                    color: "#eb3e32",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="callPhone"
                >
                  0123 456 789
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={handleMoudleBackgroud}
            className="moudle-backgroud"
            style={
              moudle
                ? { backgroundColor: "#222", opacity: "0.7" }
                : { display: "none", opacity: "none" }
            }
          ></div>
        </div>
      </div>
    </Navbar>
  );
}
export default Header;
const Navbar = styled.div`
  scroll-behavior: smooth;
  width: 100%;
  height: var(--width-header);
  transition-timing-function: ease-in;
  transition: all 1s;
  position: fixed;
  z-index: 100;

  .subnavbars {
    display: flex;
    height: 100%;
    justify-content: space-between;
    background-color: #fff;
  }
  .active {
    color: #e66f20;
  }
  ul li {
    .link:hover {
      color: #ff8040;
    }
  }
  .app-sub {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }
  .image {
    height: 100%;
  }
  .section {
    position: relative;
    margin-left: 70px;
    padding: 20px;
  }

  .subimg {
    height: 100%;
  }
  .inputSearch {
    font-size: 1.2rem;
    color: #fff;
    padding: 10px 18px;
    outline: none;
    width: 400px;
    border-radius: 24px;
    background-color: rgb(45, 47, 52);
    cursor: text;
  }

  .search {
    color: #fff;
    cursor: pointer;
    font-size: 1.7rem;
    padding-left: 5px;
    border-left: 1px solid #eee;
    position: absolute;
    right: 9%;
    top: 34%;
    &:hover {
      opacity: 0.7;
    }
  }
  ul li {
    cursor: pointer;
    color: #000;
    display: inline-block;
    padding: 10px;
    margin-right: 50px;
    font-weight: 700;
    &:hover {
      color: #ff8040;
    }
  }
  .sub {
    align-items: center;
    display: flex;
    margin-right: 50px;
  }
  .homeIcon {
    margin-right: 3px;
    color: #fff;
    font-size: 1.7rem;
  }
  ul {
    display: flex;
    align-items: center;
  }
  .moudle {
    border-radius: 5px;
    position: absolute;
    left: 20%;
    top: 80%;
    background-color: #fff;
    color: #fff;
    left: 5%;
    top: 73%;
    width: 90%;
    height: 438px;
    overflow-y: scroll;
  }
  .showtitle {
    display: flex;
    align-items: center;
    color: #000;
    cursor: pointer;
    &:hover {
      color: #e74c3c;
    }
  }
  .imagess {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  .close {
    position: absolute;
    right: 16%;
    top: 29%;
    padding: 5px;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
  .loading {
    position: absolute;
    left: 25%;
    top: 9%;
    padding: 5px;
    font-size: 1.8rem;
    color: #ccc;
    animation: fadein linear 2s infinite;
  }

  .load-more {
    text-align: center;
    margin: 15px 0;
    position: relative;
  }
  .load-images {
    padding: 8px;
    background-color: #00081c;
    color: #fff;
    outline: none;
    border: transparent;
    opacity: 0.9;
    &:hover {
      opacity: 1;
      background-color: #cdbc7a;
      color: #00081c;
      cursor: pointer;
    }
  }
  .menu {
    display: none;
  }
  .moudle-app {
    display: none;
  }
  .iconPhone {
    color: rgb(235, 62, 50);
    font-size: 1.7rem;
    margin-right: 10px;
  }
  @media (max-width: 48em) {
    .loading {
      left: 14%;
      top: 5%;
      font-size: 1.5rem;
    }
    .inputSearch {
      font-size: 0.9rem;
    }
    .load-images {
      font-size: 0.65rem;
      padding: 7px;
    }
    .showtitle {
      font-size: 0.7rem;
    }
    .subnavbars {
      height: 55px;
      .app-sub {
        margin-left: 0;
      }
    }
    .inputSearch {
      width: 200px;
      height: 35px;
    }
    .section {
      margin-left: 0;
      padding: 10px;
    }
    .sub {
      display: none;
    }
    .search {
      font-size: 1.3rem;
      margin-right: 8px;
      transform: translateY(-2px);
      height: 40%;
    }
    .app-menu {
      display: flex;
      align-items: center;
      margin-right: 15px;
    }
    .menu {
      display: block;
      font-size: 1.6rem;
      color: #000;
      padding: 5px;
    }
    .list-item {
      margin-top: 50px;
      padding-bottom: 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
    .moudle-app {
      transform: translateX(-100%);
      transition: all 1s;
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #0a0c0f;
      top: 0;
      z-index: 100;
      ul {
        flex-direction: column;
      }
      ul li {
        color: #fff;
        margin-right: 0;
        margin: 10px 0;
      }
    }
    .close {
      color: #fff;
      position: absolute;
      top: 19%;
      right: 27%;
      font-size: 1.5rem;
      padding: 5px;
    }
    .closeMenu {
      position: absolute;
      top: 4%;
      right: 7%;
      color: #fff;
      font-size: 2rem;
      padding: 5px;
    }
    .moudle-backgroud {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      z-index: 10;
    }
  }
  @media (min-width: 48em) and (max-width: 64em) {
    .sub {
      display: none;
    }
    .menu {
      display: block;

      color: #000;
      padding: 5px;
      font-size: 2.5rem;
    }
    .app-menu {
      display: flex;
      align-items: center;
      margin-right: 50px;
    }
    .moudle-backgroud {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      z-index: 10;
    }
    .closeMenu {
      position: absolute;
      top: 4%;
      right: 7%;
      color: #fff;
      font-size: 2rem;
      padding: 5px;
    }
    .close {
      color: #fff;
      position: absolute;
      top: 19%;
      right: 27%;
      font-size: 1.5rem;
      padding: 5px;
    }
    .moudle-app {
      transform: translateX(-100%);
      transition: all 1s;
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #0a0c0f;
      top: 0;
      z-index: 100;
      ul {
        flex-direction: column;
      }
      ul li {
        color: #fff;
        margin-right: 0;
        margin: 10px 0;
        font-size: 1.5rem;
      }
    }
    .list-item {
      margin-top: 50px;
      padding-bottom: 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
    .homeIcon {
      font-size: 2.3rem;
    }
    .closeMenu {
      font-size: 2.8rem;
    }
    .callPhone {
      font-size: 2rem;
    }
    .iconPhone {
      font-size: 2.5rem;
    }
    
  }
`;
