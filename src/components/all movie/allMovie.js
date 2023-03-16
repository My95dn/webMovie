import styled from "styled-components";
import Header from "../navbar/header";
import Footer from "../footer/footer";
import { useState } from "react";
import { useEffect } from "react";
function AllMovies() {
  const [data, setData] = useState([]);
  const URL_IMG = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8"
    )
      .then((res) => res.json())
      .then((value) => {
        setData(value.results);
      });
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ backgroundColor: "#00081c" }}>
        <ContentMovie>
          <div className="app">
            <div className="container">
              {data.map((element) => {
                const movie = URL_IMG + element.poster_path;
                return (
                  <a
                    href={`/reviewMovie/${element.id}`}
                    key={element.id}
                    className="view"
                  >
                    <div className="zoom">
                      <img src={movie} alt="" className="image" />
                    </div>
                    <div className="background">
                      <h3 className="name-title">{element.title}</h3>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </ContentMovie>

        <Footer />
      </div>
    </div>
  );
}

export default AllMovies;
const ContentMovie = styled.div`
  scroll-behavior: smooth;
  background-color: #00081c;
  .container {
    padding-top: 120px;
    display: grid;
    grid-template-columns: repeat(3, 356px);
    gap: 20px;
  }
  .app {
    display: flex;
    justify-content: center;
  }
  &:hover .image {
    opacity: 0.7;
  }
  .image {
    width: 100%;
    opacity: 0.9;
  }
  .background {
    background: linear-gradient(to right, #00f2c0, #00c3da);
  }
  .view {
    height: max-content;
    padding: 10px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px 0;
    border-radius: 44px;

    overflow: hidden;
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s;
      opacity: 1;
    }
  }
  .zoom {
    &:hover .image {
      opacity: 1;
    }
  }
  .name-title {
    text-align: center;
    padding: 21px 5px;
    background-color: rgba(50, 50, 50, 0.6);
    margin-top: -3px;
    color: #fff;
    font-weight: 300;
  }
  @media (max-width: 48em) {
    .container {
      display: flex;
      flex-direction: column;
    }
    .name-title {
      font-size: 0.85rem;
      padding: 14px 5px;
    }
    .view {
      border-radius: 9%;
    }
  }
`;
