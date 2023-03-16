import styled from "styled-components";
import {FaFacebookSquare} from 'react-icons/fa'
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
function Footer() {
    return ( 
        <Content>
            <div className="container" >
                <h5 className="title" >Trải nghiệm tốt nhất chỉ có trên CCV</h5>
            </div>
            <div className="app">
            <div className="section">
                <div >
                    <h3 className="text">Giới thiệu về chúng tôi</h3>
                </div>
                <div>
                    <a className="sub-text">Thông tin công ty</a>
                </div>
                <div>
                    <p className="sub-text">giới thiệu dịch vụ sản phẩm</p>
                </div>
                <div>
                    <p className="sub-text">cách xem</p>
                </div>
            </div>
            <div className="section">
                <div>
                    <h3 className="text">Hợp tác</h3>
                </div>
                <div>
                    <a className="sub-text">Đăng quảng cáo</a>
                </div>
                <div>
                    <p className="sub-text">Quan hệ kinh doanh</p>
                </div>
                <div>
                    <p className="sub-text">Hợp tác cài đặt trước</p>
                </div>
            </div>
            <div className="section">
                <div>
                    <h3 className="text">Hổ trợ và giúp đỡ</h3>
                </div>
                <div>
                    <a className="sub-text">Phản ánh ý kiến</a>
                </div>
                <div>
                    <p className="sub-text">Trung tâm phản hồi bảo mật</p>
                </div>
                <div>
                    <p className="sub-text">Câu hỏi thường gặp</p>
                </div>
            </div>
            <div className="main">
                <div className="sub-main">
                    <h3 className="text">Điều khoản dịch vụ</h3>
                </div>
                <div>
                    <a className="sub-text">Điều khoản quyền riêng tư</a>
                </div>
                <div>
                    <p className="sub-text">Điều khoản sử dụng</p>
                </div>
                
            </div>
            </div>
            <div style={{textAlign: 'center',marginTop: '50px',paddingBottom: '20px'}}> 
                <div>
                    <p className="title-text">Copyright © 2021 CCV All Rights Reserved</p>
                </div>
                <div>
                <p className="title-text">Chúng tôi sử dụng Cookies để cải thiện trải nghiệm sử dụng của bạn. Nếu bạn tiếp tục sử dụng trang web của chúng tôi, có nghĩa là bạn đồng ý chúng tôi sử dụng Cookies. Đọc Chính sách quyền riêng tư CCV</p>
                </div>
                <div style={{marginTop: '20px'}}>

                <FaFacebookSquare style={{fontSize: '2rem',marginRight: '16px'}} className="icon"/>
                <AiOutlineInstagram style={{fontSize: '2rem',marginRight: '16px'}} className="icon"/>
                <AiFillTwitterCircle style={{fontSize: '2rem',marginRight: '16px'}} className="icon"/>
                </div>
            </div>
        </Content>
     );
}

export default Footer;
const Content = styled.div`
padding-top: 30px;
background-color: #0a0c0f;
color: #fff;
.app {
    display: flex;
    justify-content: space-around;
    margin-bottom: 25px;
    padding-top: 40px;
    border-top: 1px solid #282a2c;
}
.icon {
    transition: all .3s;
    cursor: pointer;
    padding-bottom: 10px;
    &:hover {
        color: #d80000;
        transform: translateY(-10px);

    }
}
.title-text {
    font-size: 0.8rem;
    color: #999;
    margin-top: 10px;
}
.text {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 20px;
}
.sub-text {
    font-size: 0.9rem;
    color: #999;
    margin-top: 15px;
    cursor: pointer;
    &:hover {
        color: #e66f20;
    }
}
.title {
    font-size: 1.3rem;
    margin-bottom: 50px;
}

.container {
    text-align: center;
    padding-top: 30px;
}
@media (max-width: 48em) {
    
    padding-top: 0;
    .container {
        padding-top: 15px;
        .title {
            margin-bottom: 15px;
            font-size: 1.15rem;
        }
    }
    
        .text {

            font-size: 0.9rem;
        }
    .sub-text {
        font-size: 0.82rem;
    }
    .app {
        flex-direction: column;
    }
    .section {
        text-align: center;
        margin-bottom: 20px;
    }
    .main {
        text-align: center;
    }
}
`