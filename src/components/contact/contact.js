import { useEffect } from "react";
import styled from "styled-components";
import Footer from "../footer/footer";
import Header from "../navbar/header";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ backgroundColor: "rgb(32, 35, 41)" }}>
      <div>
        <Header />
      </div>
      <Content>
        <div className="main-text">
          <h1 className="text">Thông tin công ty</h1>
        </div>
        <div
          className="app"
          style={{
            textAlign: "center",
            backgroundImage:
              "linear-gradient(rgb(56, 60, 71) 0%, rgb(26, 28, 34) 0%, rgb(17, 19, 25) 100%)",
            maxWidth: "1180px",
            margin: "auto",
          }}
        >
          <div>
            <div className="main-title">
              <h2 className="title-text">Về CGV International</h2>
            </div>
            <div>
              <p className="content-text">
                Có trụ sở chính tại Singapore, CGV International là đơn vị cung
                cấp dịch vụ phát video trực tuyến theo yêu cầu, và là dịch vụ
                cung cấp nội dung giải trí từ châu Á cho người dùng quốc tế. CGV
                International cung cấp dịch vụ xem video theo yêu cầu có quảng
                cáo (AVOD) và xem video theo yêu cầu có đăng ký thành viên VIP
                (SVOD). Với việc sử dụng những công nghệ tiên tiến nhất, CGV
                International mang đến cho người dùng nội dung đa dạng với các
                bộ phim truyền hình dài tập, phim điện ảnh, TV Show và các bộ
                phim hoạt hình anime với chất lượng cao cùng phụ đề ngôn ngữ địa
                phương. CGV International cũng đã thiết lập quan hệ đối tác SaaS
                với một số công ty giải trí và chia sẻ công nghệ của mình với
                các đối tác. Người dùng có thể thưởng thức nội dung cung cấp bởi
                CGV International trên mọi thiết bị thông qua iQ.com và ứng
                dụng. CGV International thuộc sở hữu của CGV, Inc. (Nasdaq: IQ)
              </p>
            </div>
            <div className="app-image">
              <img
                src="https://i.imgur.com/wPWKnGo.jpg"
                alt=""
                className="image"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#111319",
            paddingBottom: "50px",
            paddingTop: "50px",
            borderBottom: "1px solid #282a2c",
          }}
        >
          <p style={{ color: "#fff" }} className="contact-text">
            Liên hệ tại Việt Nam: Công ty TNHH Khải Phong Media. Địa chỉ: Số 3,
            hẻm 146/11/8 Ngõ 146 Phố Vương Thừa Vũ, Phường Khương Trung, Quận
            Thanh Xuân, Thành phố Hà Nội, Việt Nam. Điện thoại: +842432007015
          </p>
        </div>
        <div style={{ backgroundColor: "#111319" }} className="app-main">
          <div
            className="container"
            
          >
            <ul className="list-item">
              <li>Sứ Mệnh</li>
              <p>Sức sáng tạo đưa ước mơ thăng hoa</p>
              <li>Tầm Nhìn</li>
              <p>
                Trở thành người khổng lồ trong lĩnh vực giải trí thúc đẩy bởi sự
                đổi mới công nghệ
              </p>

              <li>Văn Hóa</li>
              <p>Nghĩ đơn giản, Làm đơn giản</p>
            </ul>
          </div>
        </div>
      </Content>

      <Footer />
    </div>
  );
}

export default Contact;
const Content = styled.div`
  padding-top: 10%;
  background: url(https://3.bp.blogspot.com/-s5XORfadHks/Ucmb__E4EpI/AAAAAAAAA28/U0K96Rv6lwA/s640/hinh-nen-may-tinh-poster-phim-7.jpg)
    top center / cover no-repeat;
  ul {
    max-width: 1180px;
    margin: auto;
  }
  ul li {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 50px;
  }
  p {
    color: #828387;
    margin-top: 20px;
    font-size: 0.9rem;
  }
  .container {
    background: url(https://www.iqiyipic.com/common/fix/global/about/logo.png)
      right center / 440px no-repeat;
    max-width: 950px;
    margin: auto;
    background-color: rgb(17, 19, 25);
    padding-top: 80px;
    padding-bottom: 150px;
  }
  .main-text {
    margin-bottom: 50px;
    text-align: center;
  }
  .text {
    font-size: 3rem;
    color: rgb(255, 255, 255);
  }
  .main-title {
    padding: 50px 0;
  }
  .title-text {
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
  }
  .content-text {
    color: rgb(130, 131, 135);
    font-size: 0.9rem;
    line-height: 1.4rem;
    padding: 0px 70px;
  }
  .image {
    border-radius: 10px;
    width: 50%;
  }
  .app-image {
    margin-top: 40px;
    padding-bottom: 40px;
  }
  .contact-text {
    color: #fff;
  }
  @media (max-width: 48em) {
    .main-text {
      margin-top: 50px;
    }
    .text {
      font-size: 1.3rem;
    }
    .main-title {
      padding: 25px 0;
    }
    .title-text {
      font-size: 1.14rem;
    }
    .content-text {
      margin-top: 0;
      font-size: 0.88rem;
      padding: 0px 15px;
    }
    .image {
      border-radius: 18px;
      width: 100%;
      padding: 10px;
      padding-bottom: 0;
    }
    .app-image {
      padding-bottom: 0;
    }
    .contact-text {
      font-size: 0.75rem;
      padding: 0 10px;
      line-height: 1.2rem;
    }
    .list-item {
      text-align: center;
    }
    .container {
      background: url(https://www.iqiyipic.com/common/fix/global/about/logo.png) bottom center / 80% no-repeat;
      padding-bottom: 90%;
    }
    .app-main {
      padding-bottom: 30px;
    }
    ul li {
      font-size: 0.9rem;
    }
     p {
      font-size: 0.8rem;
      margin-top: 10px;
      line-height: 1.3rem;
    }
    ul {
      padding: 10px;
    }
  }
`;
