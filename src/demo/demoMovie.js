import { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import React from 'react';

function DemoSlider(props) {
    const [volum, setvolum] = useState(false)

    return(
        <Movie>
            <ReactPlayer 
            className='section'
            width='100%'
            height='100%'  
            playing={false}
            loop={true}
            volume={1}
            muted={false}
            url="https://vimeo.com/328542867"
            />
            <div>
                <div className='title'>
                    CGV Elite
                </div>
                <p className='text'>
                    CGV Elite Launch Campaign Director:  Fernanda Weinfeld Production Company: Awake Film Agency: Akqua
                </p>
                {
                    volum ? (

                        <VscUnmute className='icon'
                        onClick={() => setvolum(pre => !pre)}
                        />
                    ) : (

                        <VscMute className='icon'
                        onClick={() => setvolum(pre => !pre)}
                        /> 
                        )
                        
                        
                    }
                    
            </div>
            
        </Movie>
    )
}
export default DemoSlider;
const Movie = styled.div`
scroll-behavior: smooth;
padding-top: 56%;
position: relative;
background-color: #000;

.section {
    position: absolute;
    
   
    
    top: 0;
}
.title {
    position: absolute;
    left: 5%;

    top: 30%;
    color: #fff;
    font-size: 5rem;
    letter-spacing: 10px;
    font-weight: 700;
    
}
.text {
    position: absolute;
    left: 6%;
    
    top: 41%;
    color: #fff;
    font-size: 1rem;
    width: 350px;
    letter-spacing: 2px;
    line-height: 1.5rem;
    font-weight: 300;

}
.icon {
    color: white;
    background-color: #000;
    padding: 5px;
    position: absolute;
    top: 45%;
    right: 15%;
    font-size: 2.7rem;
    border-radius: 50%;
    border: 1px solid #222;
    background: rgba(100,100,100,0.3);
}
@media (max-width: 48em) {
    .title {
        font-size: 1.3rem;
        margin-top: 8px;
        top: 33%;
    }
    .text {
        width: 70%;
        font-size: 0.68rem;
        margin-top: 20px;
        top: 45%;
    }
    .icon {
        font-size: 2rem;
    }
}
@media (min-width: 48em) and (max-width: 64em) {
    .text {
        top: 60%;
        font-size: 0.95rem;
    }
    .title {
        top: 36%;
        font-size: 4rem;
    }
    .title-name {
        font-size: 1.7rem;
    }
}
`
