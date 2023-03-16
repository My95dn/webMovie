import { useEffect, useRef, useState } from "react";
import {
  AiFillCamera,
  AiFillDelete,
  AiFillEdit,
  AiFillLike,
} from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Movies from "../movies/movies";
import Header from "../navbar/header";

function ReviewMovie() {
  const trailerMovies = [
    { id: 646389, link: "https://www.youtube.com/embed/M25zXBIUVr0" },
    {
      id: 505642,
      link: "https://www.youtube.com/embed/_Z3QKkl1WyM",
    },
    {
      id: 631842,
      link: "https://www.youtube.com/embed/0wiBHEACNHs",
    },
    {
      id: 315162,
      link: "https://www.youtube.com/embed/RqrXhwS33yc",
    },
    {
      id: 1058949,
      link: "https://www.youtube.com/embed/yqCk_HSBFOQ",
    },
    {
      id: 842942,
      link: "https://www.youtube.com/embed/sSjYZXVXiaM",
    },
    {
      id: 772515,
      link: "https://www.youtube.com/embed/Yupd1vBO8FA",
    },
    {
      id: 823999,
      link: "https://www.youtube.com/embed/dKPjnDd5aVY",
    },
    {
      id: 536554,
      link: "https://www.youtube.com/embed/BRb4U99OU80",
    },
    {
      id: 76600,
      link: "https://www.youtube.com/embed/d9MyW72ELq0",
    },
    {
      id: 758009,
      link: "https://www.youtube.com/embed/U8gz0rUzTAY",
    },
    {
      id: 640146,
      link: "https://www.youtube.com/embed/5WfTEZJnv_8",
    },
    {
      id: 1058732,
      link: "https://www.youtube.com/embed/8itcioHD6ow",
    },
    {
      id: 267805,
      link: "https://www.youtube.com/embed/1E-F3tRA0-4",
    },
    {
      id: 785084,
      link: "https://www.youtube.com/embed/nWiQodhMvz4",
    },
    {
      id: 1035806,
      link: "https://www.youtube.com/embed/zt-hyQE-sIA",
    },
    {
      id: 788752,
      link: "https://www.youtube.com/embed/6sxnOLRGkhw",
    },
    {
      id: 843794,
      link: "https://www.youtube.com/embed/LCxnmfdxJ6s",
    },
    {
      id: 436270,
      link: "https://www.youtube.com/embed/Fva_W_AF0IM",
    },
    {
      id: 842544,
      link: "https://www.youtube.com/embed/kB-Dqd2JKTQ",
    },
    {
      id: 1011679,
      link: "https://www.youtube.com/embed/6DKVDjLKy8g",
    },
    {
      id: 937278,
      link: "https://www.youtube.com/embed/eFYUX9l-m5I",
    },
    {
      id: 965839,
      link: "https://www.youtube.com/embed/s-fP904VHy8",
    },
    {
      id: 677179,
      link: "https://www.youtube.com/embed/2iPOTWpmg2I",
    },
    {
      id: 1077280,
      link: "https://www.youtube.com/embed/pGNv5-dyRKA",
    },
    {
      id: 906221,
      link: "https://www.youtube.com/embed/pBIGdw-BRxw",
    },
    {
      id: 782936,
      link: "https://www.youtube.com/embed/uZEjKwz7cH8",
    },
    {
      id: 934433,
      link: "https://www.youtube.com/embed/h74AXqw4Opc",
    },
    {
      id: 943822,
      link: "https://www.youtube.com/embed/8yptyiIXJZg",
    },
    {
      id: 545611,
      link: "https://www.youtube.com/embed/wxN1T1uxQ2g",
    },
  ];
  let trailer = "";
  const [input, setInput] = useState("");
  const [comment, setComment] = useState([]);
  const [avatar, setAvatar] = useState();
  const [sub, setsub] = useState(0);
  const [activeindex, setactiveIndex] = useState();
  const [active, setactive] = useState();
  const [yes, setYes] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const URL_IMG = "https://image.tmdb.org/t/p/w500";
  const dataMovies = useLoaderData();
  const show = URL_IMG + dataMovies.poster_path;
  const showMovie = URL_IMG + dataMovies.backdrop_path;
  const valueIndex = useRef();
  const commentImage = useRef();
  const group = "group member";
  let avatarComment =
    "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg";
  let user =
    "https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg";
  function handleDelete(index) {
    comment.splice(index, 1);
    setComment((pre) => [...pre]);
  }
  const handleEdit = (index) => {
    setInput(comment[index]);

    valueIndex.current.setAttribute("id", index);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const checkTrailer = () => {
    trailerMovies.forEach((element) => {
      if (element.id == dataMovies.id) {
        trailer = element.link;
      }
    });
  };
  const handlePost = () => {
    if (input == "") {
      alert("vui lòng nhập comment của bạn");
    } else {
      const commentIndex = valueIndex.current.getAttribute("id");
      if (commentIndex === 0 || commentIndex) {
        comment[commentIndex] = input;
        setComment(comment);
        setInput("");
        valueIndex.current.removeAttribute("id");
      } else {
        setsub((pre) => pre + 1);
        setComment((pre) => [...pre, input]);

        setInput("");
      }
    }
  };
  checkTrailer();

  const handleAvatar = (event) => {
    const file = event.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  const handleActive = (id) => {
    setactiveIndex(id);
    if (activeindex == id) {
      setYes((pre) => !pre);
    }
  };
  const handleBack = (id) => {
    setactive(id);
    if (active == id) {
      setFeedback((pre) => !pre);
    }
  };
  return (
    <div style={{overflow: 'hidden'}}>
      <div>
        <Header className="header" />
      </div>

      <div style={{ backgroundColor: "#111319" }}>
        <Content style={{ paddingTop: "81px" }}>
          <div className="test">
            <div className="layout">
              <div className="sub">
                <div className="view">
                  <div className="main-app" style={{ display: "flex" }}>
                    <div className="wraper">
                      <img
                        src={show}
                        alt=""
                        style={{ width: "100%", borderRadius: "20px" }}
                      />
                    </div>

                    <div className="app" style={{ flexBasis: "100%" }}>
                      <div>
                        <h2 className="title">{dataMovies.title}</h2>

                        <p className="text">{`Describe: ${dataMovies.overview}`}</p>
                        <div className="app-btn">
                          <h2 className="btn-movie">Watch a movie</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <img src={showMovie} alt="" className="img" />
                  <div className="background"></div>
                  <div className="background-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </Content>

        <TrailerMovie>
          <h3 className="text-trailer">
            {dataMovies.title} - Official Trailer
          </h3>
          <div className="trailer-movie">
            <iframe
              className="iframe"
              src={trailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </TrailerMovie>
        <MovieCommentary>
          <h4 className="comment" >
            Movie commentary
          </h4>
          <div className="container">
            <div className="comment-moudle">
              <div style={{ marginLeft: "5px" }}>
                <div className="text-title">
                  <div style={{ display: "flex" }}>
                    <p className="content-text">
                      Đừng quên nhấn like và theo dõi Fanpage của{" "}
                    </p>
                    <span style={{ marginLeft: "3px", fontWeight: "700" }}>
                      CGV.Net
                    </span>
                  </div>
                </div>

                <div style={{ marginTop: "20px" }}>
                  <a className="btn">
                    <AiFillLike
                      className="icon-like"
                      style={{ marginRight: "3px" }}
                    />
                    theo dõi 11k
                  </a>
                  <p
                    style={{
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                    className="text-content"
                  >
                    Nếu các bạn thấy hay thì hãy comment ngay vào bên dưới,
                    chúng tôi muốn nghe ý kiến từ các bạn.Thank!
                  </p>
                </div>
                <div className="time-comment">
                  <h4 className="comments">{`${sub}`} comment</h4>
                </div>

                <div className="photo">
                  <form>
                    <input
                      type="file"
                      name="myFileInput"
                      onChange={handleAvatar}
                      className="avatar-sub"
                    ></input>
                    <AiFillCamera className="camera" />
                  </form>
                  <div className="avatar-user">
                    <img
                      src={avatar ? avatar.preview : user}
                      alt=""
                      style={{ width: "100%", borderRadius: "50%" }}
                    />
                  </div>
                </div>
                <div ref={commentImage}></div>
                <div className="app-comments">
                  <div className="app-avatar">
                    <img
                      style={{ width: "100%" }}
                      src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg"
                      alt=""
                    />
                  </div>

                  <div style={{ flexBasis: "100%", marginLeft: "5px" }}>
                    <input
                      value={input}
                      onChange={handleInput}
                      placeholder="write a comment..."
                      className="write"
                    />
                    <div
                      style={{
                        textAlign: "end",
                        border: "1px solid #d3d6db",
                        padding: "5px",
                        display: input ? "block" : "none",
                      }}
                    >
                      <button
                        className="btn-up"
                        onClick={handlePost}
                        ref={valueIndex}
                      >
                        Đăng
                      </button>
                    </div>
                  </div>
                </div>
                {comment.map((element, index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "10px",
                        marginBottom: "10px",
                      }}
                      key={index}
                    >
                      <div className="avarta-comment">
                        <img
                          style={{ width: "100%" }}
                          src={avatar ? avatar.preview : avatarComment}
                          alt=""
                        />
                      </div>
                      <div className="contact">
                        <div style={{ marginBottom: "5px" }}>
                          <a
                            style={{
                              fontSize: "0.88rem",
                              color: "#385898",
                              fontWeight: "700",
                            }}
                          >
                            {group}
                          </a>
                        </div>
                        <div style={{ marginBottom: "5px" }}>
                          <p style={{ fontSize: "0.88rem" }}>
                            {element}
                            <AiFillEdit
                              className="edit"
                              onClick={() => handleEdit(index)}
                            />
                            <AiFillDelete
                              className="dalete"
                              onClick={() => handleDelete(index)}
                            />
                          </p>
                        </div>
                        <div className="event">
                          <a
                            className={
                              yes && activeindex == index ? "like" : ""
                            }
                            onClick={() => handleActive(index)}
                            style={{
                              fontSize: "0.75rem",
                              marginRight: "18px",
                              cursor: "pointer",
                              color: "rgb(88, 121, 187)",
                            }}
                          >
                            Thích
                          </a>
                          <a
                            className={
                              feedback && active == index ? "back" : ""
                            }
                            onClick={() => handleBack(index)}
                            style={{
                              fontSize: "0.75rem",
                              marginRight: "18px",
                              color: "rgb(88, 121, 187)",
                              cursor: "pointer",
                            }}
                          >
                            Phản Hồi
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </MovieCommentary>
        <Movies />
      </div>
    </div>
  );
}

export default ReviewMovie;
const MovieCommentary = styled.div`
  background-color: #545256;
  padding-bottom: 15px;
  border-radius: 10px;
  max-width: 1290px;
  margin: auto;
  .contact {
    flex-basis: 100%;
    margin-left: 7px;
  }
  .avatar-user {
    width: 100%;
    padding: 10px;
    background-color: #333;
    border-radius: 8px;
    margin-top: 20px;
    height: 100%;
  }
  .like {
    color: green;
    font-weight: 790;
    &:hover {
      opacity: 0.8;
    }
  }
  .back {
    color: #0571ed;
    font-weight: 790;
    &:hover {
      opacity: 0.8;
    }
  }
  .camera {
    position: absolute;
    right: 17%;
    top: 43%;
    font-size: 1.3rem;
  }
  .avatar-sub {
    opacity: 0;
    position: absolute;
    top: 43%;
    width: 4%;
    right: 17%;
    padding: 10px;
    z-index: 1;
    cursor: pointer;
  }
  .edit {
    margin-left: 18px;
    transform: translateY(2px);
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  .dalete {
    cursor: pointer;
    margin-left: 10px;
    transform: translateY(2px);
    &:hover {
      opacity: 0.7;
    }
  }
  .btn-up {
    padding: 5px 10px;
    background-color: #4267b2;
    color: #fff;
    margin-right: 5px;
    outline: none;
    border: none;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
  .app-comments {
    display: flex;
    margin: 30px 10px;
  }
  .write {
    padding: 12px 8px;
    width: 100%;
    line-height: 46px;
    outline: none;
    border: 1px solid #d3d6db;
  }
  .option {
    outline: none;
    padding: 4px;
  }
  .time-comment {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    border-bottom: 1px solid #e9ebee;
    padding-bottom: 50px;
  }
  .time {
    display: flex;
    align-items: center;
    margin-right: 15px;
  }
  .comments {
    margin-left: 10px;
    font-size: 0.9rem;
  }
  .comment {
    color: #dacb46;
    font-weight: 400;
    font-size: 1.3rem;
    letter-spacing: 2px;
    padding: 10px 10px;
  }
  .icon-like {
    transform: translateY(2px);
    font-size: 1.1rem;
    margin-right: 1px;
  }
  .btn {
    padding: 10px;
    border-radius: 5px;
    margin-left: 10px;
    background: #375798;
    color: #fff;
  }
  .text-title {
    padding: 11px;
    font-size: 0.9rem;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .comment-moudle {
    border-radius: 10px;
    width: 98%;
    min-height: 500px;
    background-color: #fff;
  }
  .like:forcus {
    color: red;
    font-weight: 700;

    &:hover {
      opacity: 0.7;
    }
  }

  .res {
    color: #0571ed;
    font-weight: 700;
    &:hover {
      opacity: 0.7;
    }
  }
  .text-content {
    font-size: 0.9rem;
  }
  .photo {
    position: relative;
    width: 5%;
    margin-left: 10px;
  }
  .app-avatar {
    flex-basis: 5%;
    padding: 2px;
  }
  .avarta-comment {
    flex-basis: 5%;
    margin-top: 3px;
    height: 100%;
  }
  .comment {
    margin-left: 2px;
  }
  @media (max-width: 48em) {
    margin: 10px;
    padding: 10px;
    .content-text {
      font-size: 0.8rem;
    }
    .text-content {
      font-size: 0.8rem;
      line-height: 1.1rem;
    }
    .btn {
      padding: 6px;
      font-size: 0.9rem;
    }
    .photo {
      width: 14%;
    }
    .app-avatar {
      flex-basis: 17%;
    }
    .write {
      padding: 2px 8px;
    }
    .btn-up {
      font-size: 0.75rem;
      padding: 4px 10px;
    }
    .avarta-comment {
      flex-basis: 17%;
    }
  }
  @media (min-width: 48em) and (max-width: 64em) {
    padding: 10px;
    .comment {
      margin-left: -2px;
    }
  }
`;
const TrailerMovie = styled.div`
  
  margin-bottom: 10px;
  text-align: center;
  padding-left: 32px;
  padding-top: 30px;
  padding: 50px 0 10px 0;
  background-color: #111319;
  .text-trailer {
    color: #fff;
  }
  .trailer-movie {
    margin-top: 20px;
  }
  .iframe {
    width: 67%;
    height: 650px;
  }
  @media (max-width: 48em) {
    .iframe {
      width: 95%;
      height: 300px;
    }
  }
  @media (min-width: 48em) and (max-width: 64em) {
    .iframe {
      width: 97%;
    }
  }
`;
const Content = styled.div`
  background-color: rgb(17, 19, 25);
  .section {
    position: relative;
    flex-basis: 100%;
  }
  .wraper {
    margin: 25px 0;
  }
  .btn-movie {
    border-radius: 6px;
    color: #fff;
    padding: 12px 10px;
    margin-top: 50px;
    background-color: #d9534f;
    text-align: center;
    border-color: #d43f3a;
    font-size: 0.95rem;
    font-weight: 400;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
  .app {
    padding: 0 20px;
    margin-top: 27px;
  }
  .background {
    position: absolute;
    left: 0;
    height: 100%;
    top: 0;
    width: 50%;
    background-image: linear-gradient(
      270deg,
      rgba(17, 19, 25, 0) 0%,
      rgba(17, 19, 25, 0.05) 16%,
      rgba(17, 19, 25, 0.2) 30%,
      rgba(17, 19, 25, 0.39) 43%,
      rgba(17, 19, 25, 0.61) 55%,
      rgba(17, 19, 25, 0.8) 68%,
      rgba(17, 19, 25, 0.95) 82%,
      rgb(17, 19, 25) 98%
    );
  }
  .sub {
    display: flex;
  }
  .view {
    flex-basis: 100%;
    background-color: #111319;
    margin-left: 40px;
  }
  .background-bottom {
    background-image: linear-gradient(
      179deg,
      rgba(17, 19, 25, 0) 1%,
      rgba(17, 19, 25, 0.05) 17%,
      rgba(17, 19, 25, 0.2) 31%,
      rgba(17, 19, 25, 0.39) 44%,
      rgba(17, 19, 25, 0.61) 56%,
      rgba(17, 19, 25, 0.8) 69%,
      rgba(17, 19, 25, 0.95) 83%,
      rgb(17, 19, 25) 99%
    );
  }
  .title {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 750;
  }
  .text {
    color: #fff;
    font-size: 0.95rem;
    margin-top: 20px;
    line-height: 1.5rem;
  }
  .img {
    width: 100%;
  }
  .app-btn {
    display: inline-block;
  }

  @media (max-width: 48em) {
    .sub {
      flex-wrap: wrap;
    }
    .main-app {
      flex-wrap: wrap;
    }
    .view {
      margin-left: 0;
    }
    .wraper {
      padding: 15px;
      margin: 0 0;
    }
    .title {
      font-size: 1.5rem;
    }
    .text {
      font-size: 0.8rem;
    }
    .btn-movie {
      margin-bottom: 20px;
    }
    .app-btn {
      display: block;
    }
    .img {
      width: 96%;
    }
  }
  @media (min-width: 48em) and (max-width: 64em) {
    .sub {
      flex-wrap: wrap;
    }
    .title {
      font-size: 1.4rem;
    }
    .text {
      font-size: 0.9rem;
    }
    .section {
      padding: 10px;
    }
    .text-trailer {
      font-size: 1.1rem;
    }
  }
`;
