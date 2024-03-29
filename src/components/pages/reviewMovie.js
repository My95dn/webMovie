import { useEffect, useMemo, useRef, useState } from "react";
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
    {
      id: 850871,
      link: "https://www.youtube.com/embed/QaqLBfOf0Cg",
    },
    {
      id: 1026563,
      link: "https://www.youtube.com/embed/cCoRo5OR0WA",
    },
    {
      id: 32516,
      link: "https://www.youtube.com/embed/S_SD6ON8SWU",
    },
    {
      id: 594767,
      link: "https://www.youtube.com/embed/l37LjoV9W7M",
    },
    {
      id: 804150,
      link: "https://www.youtube.com/embed/DuWEEKeJLMI",
    },
    {
      id: 603692,
      link: "https://www.youtube.com/embed/qEVUtrk8_B4",
    },
    {
      id: 1003579,
      link: "https://www.youtube.com/embed/5OzP3grTnz8",
    },
    {
      id: 983768,
      link: "https://www.youtube.com/embed/sxWmmXAIgPE",
    },
    {
      id: 980078,
      link: "https://www.youtube.com/embed/W3E74j_xFtg",
    },
    {
      id: 1087040,
      link: "https://www.youtube.com/embed/WTAay-4QUuY",
    },
    {
      id: 296271,
      link: "https://www.youtube.com/embed/PznXx8NHwpc",
    },
    {
      id: 884184,
      link: "https://www.youtube.com/embed/x3w3AXRS50w",
    },
    {
      id: 324552,
      link: "https://www.youtube.com/embed/XGk2EfbD_Ps",
    },
    {
      id: 730629,
      link: "https://www.youtube.com/embed/LVZ9Btv5SNE",
    },
    {
      id: 1076605,
      link: "https://www.youtube.com/embed/pMb6OmVCtyM",
    },
    {
      id: 776835,
      link: "https://www.youtube.com/embed/JvNuYOR7b4w",
    },
    {
      id: 842945,
      link: "https://www.youtube.com/embed/6509bINfvQg",
    },
    {
      id: 829410,
      link: "https://www.youtube.com/embed/sjj4SjzrKeA",
    },
    {
      id: 1033219,
      link: "https://www.youtube.com/embed/vdpj3SQpKcw",
    },
    {
      id: 502356,
      link: "https://www.youtube.com/embed/TnGl01FkMMo",
    },
    {
      id: 1023313,
      link: "https://www.youtube.com/embed/YDGw1MTEe9k",
    },
    {
      id: 1084225,
      link: "https://www.youtube.com/embed/HLcEO27FWBY",
    },
    {
      id: 964426,
      link: "https://www.youtube.com/embed/UGoSXFpQ4ic",
    },
    {
      id: 964426,
      link: "https://www.youtube.com/embed/UGoSXFpQ4ic",
    },
    {
      id: 816904,
      link: "https://www.youtube.com/embed/WRB8YIc4U68",
    },
    {
      id: 638974,
      link: "https://www.youtube.com/embed/LM2F56uK0fs",
    },
    {
      id: 758323,
      link: "https://www.youtube.com/embed/YJXqvnT_rsk",
    },
    {
      id: 700391,
      link: "https://www.youtube.com/embed/5ieCIed2At0",
    },
    {
      id: 615,
      link: "https://www.youtube.com/embed/K83366UdtXw",
    },
    {
      id: 849869,
      link: "https://www.youtube.com/embed/H6J3fmL6Bm8",
    },
    {
      id: 984105,
      link: "https://www.youtube.com/embed/yszDB3lDEbA",
    },
    {
      id: 676841,
      link: "https://www.youtube.com/embed/F7YdtowVLtk",
    },
    {
      id: 736790,
      link: "https://www.youtube.com/embed/ViKnrHjzgn4",
    },
    {
      id: 1008005,
      link: "https://www.youtube.com/embed/_JrZflM5OSI",
    },
    {
      id: 1104040,
      link: "https://www.youtube.com/embed/CBLhv0cgVSo",
    },
    {
      id: 713704,
      link: "https://www.youtube.com/embed/smTK_AeAPHs",
    },
    {
      id: 948713,
      link: "https://www.youtube.com/embed/HvaXYZJ69Ow",
    },
    {
      id: 447365,
      link: "https://www.youtube.com/embed/u3V5KDHRQvk",
    },
    {
      id: 868759,
      link: "https://www.youtube.com/embed/IAdCsNtEuBU",
    },
    {
      id: 1102776,
      link: "https://www.youtube.com/embed/044PUmZQd1g",
    },
    {
      id: 493529,
      link: "https://www.youtube.com/embed/IiMinixSXII",
    },
    {
      id: 420808,
      link: "https://www.youtube.com/embed/p-5sVX7MRj8",
    },
    {
      id: 946310,
      link: "https://www.youtube.com/embed/wgyWDK2Gycc",
    },
    {
      id: 385687,
      link: "https://www.youtube.com/embed/aOb15GVFZxU",
    },
    {
      id: 727340,
      link: "https://www.youtube.com/embed/nahsyvtJOBI",
    },
    {
      id: 1111140,
      link: "https://www.youtube.com/embed/t0dELzneNIk",
    },
    {
      id: 876969,
      link: "https://www.youtube.com/embed/90ccnyXujS0",
    },
    {
      id: 785759,
      link: "https://www.youtube.com/embed/-VXQPfgH_uw",
    },
    {
      id: 882569,
      link: "https://www.youtube.com/embed/02PPMPArNEQ",
    },
    {
      id: 868985,
      link: "https://www.youtube.com/embed/DQ0UqBQ_AII",
    },
    {
      id: 842675,
      link: "https://www.youtube.com/embed/Yf3VreXwVpI",
    },
    {
      id: 1037644,
      link: "https://www.youtube.com/embed/N57ewbrPLAg",
    },
    {
      id: 649609,
      link: "https://www.youtube.com/embed/vXkN2H3Ijyw",
    },
    {
      id: 455476,
      link: "https://www.youtube.com/embed/Sko0o_KoBHY",
    },
    {
      id: 254128,
      link: "https://www.youtube.com/embed/23VflsU3kZE",
    },
    {
      id: 569094,
      link: "https://www.youtube.com/embed/cqGjhVJWtEg",
    },
    {
      id: 445651,
      link: "https://www.youtube.com/embed/tN8o_E_f9FQ",
    },
    {
      id: 47964,
      link: "https://www.youtube.com/embed/_BMmRdAW2yw",
    },
    {
      id: 667538,
      link: "https://www.youtube.com/embed/itnqEauWQZM",
    },
    {
      id: 1103825,
      link: "https://www.youtube.com/embed/UrpWNse0iA4",
    },
    {
      id: 697843,
      link: "https://www.youtube.com/embed/Y274jZs5s7s",
    },
    {
      id: 976573,
      link: "https://www.youtube.com/embed/hXzcyx9V0xw",
    },
    {
      id: 406563,
      link: "https://www.youtube.com/embed/acQyrwQyCOk",
    },
    {
      id: 664767,
      link: "https://www.youtube.com/embed/I1vccr3yWBU",
    },
    {
      id: 396263,
      link: "https://www.youtube.com/embed/r37ARGRJC-k",
    },
    {
      id: 841755,
      link: "https://www.youtube.com/embed/uXR_MGAxUrA",
    },
    {
      id: 614479,
      link: "https://www.youtube.com/embed/ZuQuOnYnr3Q",
    },
    {
      id: 1010581,
      link: "https://www.youtube.com/embed/PaB7cGBuCP0",
    },
    {
      id: 1036561,
      link: "https://www.youtube.com/embed/3FeRxeECUMI",
    },
    {
      id: 565770,
      link: "https://www.youtube.com/embed/j5rpK0Ba7q8?si=jqh5KL9YLkTFrKXw",
    },
    {
      id: 980489,
      link: "https://www.youtube.com/embed/GVPzGBvPrzw?si=BxhGvp8NdSm0YAFg",
    },
    {
      id: 615656,
      link: "https://www.youtube.com/embed/dG91B3hHyY4?si=rqxu6Rb-yjRd4vzf",
    },
    {
      id: 678512,
      link: "https://www.youtube.com/embed/Rt0kp4VW1cI?si=zRPO5hIFFyCmYnZN",
    },
    {
      id: 762430,
      link: "https://www.youtube.com/embed/jzQn0-WH4WM?si=-o1Of4P6xcXHIVnZ",
    },
    {
      id: 1008042,
      link: "https://www.youtube.com/embed/aLAKJu9aJys?si=sTl7jJ2rjTPONUVq",
    },
    {
      id: 968051,
      link: "https://www.youtube.com/embed/QF-oyCwaArU?si=A9cXsvIftIDGmlL8",
    },
    {
      id: 385687,
      link: "https://www.youtube.com/embed/1fvzVMmARqY?si=t0PCxNriDLmp8hi-",
    },
    {
      id: 346698,
      link: "https://www.youtube.com/embed/GRyt3Ov4zz0?si=xwrotiRI4IZXsFZh",
    },
    {
      id: 820609,
      link: "https://www.youtube.com/embed/IcA02w6rm44?si=cL5i7MpVFV74c_qs",
    },
    {
      id: 976573,
      link: "https://www.youtube.com/embed/hXzcyx9V0xw?si=q3p7C4w4I8Sx_2To",
    },
    {
      id: 1002338,
      link: "https://www.youtube.com/embed/OylFBzk_cg0?si=321_T5Xa9tjiQiv8",
    },
    {
      id: 852436,
      link: "https://www.youtube.com/embed/1Xv1ft5T_XM?si=R6624dVHwzFT-eoc",
    },
    {
      id: 717930,
      link: "https://www.youtube.com/embed/0r6-YSKzKf4?si=g3qgtm6Owtgpabg8",
    },
    {
      id: 1076364,
      link: "https://www.youtube.com/embed/5emJgNiFbAA?si=b_JkTfNiV18MxXXL",
    },
    {
      id: 951491,
      link: "https://www.youtube.com/embed/t3PzUo4P21c?si=x0v0LsBhiRhwFSuV",
    },
    {
      id: 335977,
      link: "https://www.youtube.com/embed/eQfMbSe7F2g?si=xNOdvio-9Pam9ENt",
    },
    {
      id: 744278,
      link: "https://www.youtube.com/embed/EH0379AquBk?si=CEv7NwEc0Ifotf_9",
    },
    {
      id: 790493,
      link: "https://www.youtube.com/embed/TuiRw0v3bAw?si=26rjtKtY5mfwVL0f",
    },
    {
      id: 897087,
      link: "https://www.youtube.com/embed/0u5E1pQK8Fc?si=GOf4ORtEnhkbrivM",
    },
    {
      id: 901362,
      link: "https://www.youtube.com/embed/qZ40Z62tcXM?si=SpPjWhJLkMOx5i_V",
    },
    {
      id: 1075794,
      link: "https://www.youtube.com/embed/G_AEL-Xo5l8?si=bjQHzuHgnXftgo30",
    },
    {
      id: 787699,
      link: "https://www.youtube.com/embed/otNh9bTjXWg?si=iamQ73Ceicq991V8",
    },
    {
      id: 872585,
      link: "https://www.youtube.com/embed/uYPbbksJxIg?si=CmbP1Pi5qSQlcBg4",
    },
    {
      id: 466420,
      link: "https://www.youtube.com/embed/EP34Yoxs3FQ?si=U_JKEXaEFwfJBOpD",
    },
    {
      id: 1001835,
      link: "https://www.youtube.com/embed/Q0who82bdhU?si=iz_kxD2QoKKNSQIQ",
    },
    {
      id: 670292,
      link: "https://www.youtube.com/embed/ex3C1-5Dhb8?si=E08mCmgOMeYzaw3t",
    },
    {
      id: 507089,
      link: "https://www.youtube.com/embed/0VH9WCFV6XQ?si=asXrtcLmEwP81YTe",
    },
    {
      id: 951546,
      link: "https://www.youtube.com/embed/12K6JVjEYGA?si=0I5XAYb_suYZdgJi",
    },
    {
      id: 566810,
      link: "https://www.youtube.com/embed/ZbCUeIFB-38?si=VVO7brchbg11KVuT",
    },
    {
      id: 1046032,
      link: "https://www.youtube.com/embed/28qvBwqma2c?si=39hcmctqYEvWLuru",
    },
    {
      id: 1047925,
      link: "https://www.youtube.com/embed/YRQDrVr2VZs?si=YKvm1ZcGD8UdfwcF",
    },
    {
      id: 575264,
      link: "https://www.youtube.com/embed/avz06PDqDbM?si=Pg1SZLv3BZq5xPIg",
    },
    {
      id: 299054,
      link: "https://www.youtube.com/embed/DhlaBO-SwVE?si=BPxLp1tieGG3RXj5",
    },
    {
      id: 695721,
      link: "https://www.youtube.com/embed/RDE6Uz73A7g?si=6xjDyC09qzQiLz6K",
    },
    {
      id: 940721,
      link: "https://www.youtube.com/embed/VvSrHIX5a-0?si=lXLdFvXwjJ_cDK2i",
    },
    {
      id: 479753,
      link: "https://www.youtube.com/embed/poM_9ELcCGE?si=BiT_oXNoZp_H-XPO",
    },
    {
      id: 1096197,
      link: "https://www.youtube.com/embed/PSEoAaSswgo?si=mS5BZWA8uzbscfH4",
    },
    {
      id: 792307,
      link: "https://www.youtube.com/embed/RlbR5N6veqw?si=sCwOD-OlZTAysVgo",
    },
    {
      id: 969492,
      link: "https://www.youtube.com/embed/yTFazxfrXVw?si=GbtW0t36yKfiP2r8",
    },
    {
      id: 1072790,
      link: "https://www.youtube.com/embed/UtjH6Sk7Gxs?si=ngcmDSmJWy7f2xi4",
    },
    {
      id: 693134,
      link: "https://www.youtube.com/embed/Way9Dexny3w?si=S8Xovjw58nhySOKJ",
    },
    {
      id: 940551,
      link: "https://www.youtube.com/embed/cQfo0HJhCnE?si=ByDkrALQwNQ8VY2H",
    },
    {
      id: 949429,
      link: "https://www.youtube.com/embed/THOSPwDRfp4?si=TuN9QcUg7jHzFC4z",
    },
    {
      id: 931642,
      link: "https://www.youtube.com/embed/6LiKKFZyhRU?si=QWy6ccsQE3uf3f-r",
    },
    {
      id: 1211483,
      link: "https://www.youtube.com/embed/85Sg3MTrXyo?si=Dqj6mgKhoMw_4qHy",
    },
    {
      id: 609681,
      link: "https://www.youtube.com/embed/wS_qbDztgVY?si=erIlTuy_qRyk16li",
    },
    {
      id: 1139566,
      link: "https://www.youtube.com/embed/G_WsQNsfx1Q?si=M60yp-kpasBmHV7_",
    },
    {
      id: 787699,
      link: "https://www.youtube.com/embed/otNh9bTjXWg?si=wqUd1JMx5YJZK016",
    },
    {
      id: 438631,
      link: "https://www.youtube.com/embed/U2Qp5pL3ovA?si=9iAF-53smU3oOAbH",
    },
    {
      id: 933131,
      link: "https://www.youtube.com/embed/hKbo-ZKdSqw?si=G9Lflp4_Azqh-yFx",
    },
    {
      id: 1026436,
      link: "https://www.youtube.com/embed/vk2OJZHutBM?si=QIqgqpxVYBRqz-s-",
    },
    {
      id: 572802,
      link: "https://www.youtube.com/embed/UGc5Tzz19UY?si=ntcmze8PULjDDlS0",
    },
    {
      id: 1183905,
      link: "https://www.youtube.com/embed/DfHeq3qVBoE?si=4f9uG6btLL8vsYdP",
    },
    {
      id: 1022796,
      link: "https://www.youtube.com/embed/oyRxxpD3yNw?si=Wn8zNwU_920Sq30g",
    },
    {
      id: 980137,
      link: "https://www.youtube.com/embed/sPVicWnq_BU?si=OoRD03y9CaEuy4XG",
    },
    {
      id: 866398,
      link: "https://www.youtube.com/embed/SzINZZ6iqxY?si=8zRcNtMXX8AvsQ_o",
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
  const imageMovie = "https://actionewz.com/images/articles/banners/1406.jpeg";
  const dataMovies = useLoaderData();
  const show = URL_IMG + dataMovies.poster_path;
  const showMovie = dataMovies.backdrop_path
    ? URL_IMG + dataMovies.backdrop_path
    : imageMovie;
  const valueIndex = useRef();
  const commentImage = useRef();
  const group = "group member";
  let avatarComment =
    "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg";
  let user =
    "https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg";
  function handleDelete(index) {
    setsub((pre) => pre - 1);
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

        setInput(false);
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
  useEffect(() => {
    handleActive();
  }, [comment]);
  const handleBack = (id) => {
    
    setactive(id);
    if (active == id) {
      setFeedback((pre) => !pre);
    }
  };
  useEffect(() => {
    handleBack();
  }, []);
  console.log(imageMovie);
  return (
    <div style={{ overflow: "hidden" }}>
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
          <h4 className="comment">Movie commentary</h4>
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
    overflow: hidden;
    padding: 10px;
    .comment {
      margin-left: -2px;
    }
    .photo {
      width: 8%;
    }
    .app-avatar {
      flex-basis: 9%;
    }
    .avarta-comment {
      flex-basis: 8%;
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
