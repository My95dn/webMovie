import { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Footer from "../footer/footer";

function Movies() {
  const [images, setImages] = useState([]);
  const [loadMovie, setloadMovie] = useState(6);
  const [loading, setLoading] = useState(false);
  const numberIndex = 0;
  const numberOne = 3;
  const URL_IMG = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8"
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.results);
      });
  }, []);
  const renderImages = () => {
    let dataImages = images.slice(numberIndex, loadMovie);
    const value = dataImages.map((element) => {
      const show = URL_IMG + element.poster_path;
      return (
        <a key={element.id} className="app" href={`/reviewMovie/${element.id}`}>
          <div className="images">
            <img
              src={show}
              alt=""
              style={{ width: "100%" }}
              className="image"
            />
            <div className="background">
              <h3 className="name-title">{element.title}</h3>
            </div>
          </div>
        </a>
      );
    });
    return value;
  };
  const handleLoadMore = () => {
    setLoading((e) => !e);
    const time = setTimeout(() => {
      setLoading((e) => !e);
      setloadMovie((pre) => pre + (pre - numberOne));
    }, 800);
    return () => {
      if (time) {
        clearTimeout(time);
      }
    };
  };
  return (
    <div>
      <Content>
        <div
          style={{
            color: "#dacb46",
            fontSize: "1.3rem",
            fontWeight: "700",
            paddingBottom: "20px",
            borderBottom: "1px solid #e9ebee",
          }}
        >
          YOU MAY LIKE TO SEE
        </div>
        <div
          className="container"
          style={loading ? { marginBottom: "50px" } : { marginBottom: "0px" }}
        >
          {renderImages()}
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="loadmore" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
          {loading && (

         <AiOutlineLoading3Quarters className="loading" />
          )}
      </Content>

      <Footer />
    </div>
  );
}

export default Movies;
const Content = styled.div`
  scroll-behavior: smooth;
  padding: 20px 0;
  padding-bottom: 20px;
  max-width: 1290px;
  margin: auto;
  position: relative;
  &:hover .image {
    opacity: 0.7;
  }
  .app {
    cursor: pointer;
    padding: 20px 10px;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .loadmore {
    color: #000;
    font-weight: 700;
    display: inline-block;
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #fff;
    cursor: pointer;
    border-radius: 6px;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
  .loading {
    position: absolute;
    left: 48%;
    bottom: 80px;
    padding: 5px;
    font-size: 2.8rem;
    color: #fff;
    animation: fadein linear 2s infinite;
  }
  .image {
    width: 50%;
    &:hover {
      opacity: 1;
    }
  }
  .container {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 400px);
    gap: 20px;
  }
  .name-title {
    text-align: center;
    padding: 21px 5px;
    background-color: rgba(50, 50, 50, 0.6);
    margin-top: -3px;
    color: #fff;
    font-weight: 300;
  }
  .background {
    background: linear-gradient(to right, #00f2c0, #00c3da);
  }
  .images {
    border-radius: 20px;
    overflow: hidden;
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 48em) {
    padding: 20px 10px;
    
    .container {
      
      display: flex;
      flex-direction: column;
    }
    .loadmore {
      font-size: 0.75rem;
      padding: 6px 15px;
    }
    .loading {
      left: 44%;
    }
  }
`;
