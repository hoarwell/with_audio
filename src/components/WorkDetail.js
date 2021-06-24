import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import one from '../assets/1.mp3';
import two from '../assets/2.mp3';
import first from '../assets/one.jpeg';
import second from '../assets/two.jpg';

const WorkDetail = () => {
    const audios = [ one, two ];
    const images = [ first, second ];
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    const idParams = useParams();

    const audioRef = useRef();
    const imageRef = useRef();
    const cursorRef = useRef();

    const handleNotHover = (e) => {
        const { value } = e.target
        e.target.style.zIndex = "0"
        e.target.style.transition = "none"
        console.log(e.target)
    }

    const handleHover = (e) => {
        e.target.style.zIndex = "9999"
        e.target.style.transition = "all 1500s"
    }
    
    const getPosition = (e) => {
        var x = e.clientX;
        var y = e.clientY;
        console.log(x,y)
        setPosition({
            x: x,
            y: y,
        });
    }

    const collapse = () => {
        if(position.y < 80){
            audioRef.current.style.top = "1%"
        } else {
            audioRef.current.style.top = "-10%"
        }
    }

    const cursor = () => {
        cursorRef.current.style.top = `${position.y}px`;
        cursorRef.current.style.left =`${position.x}px`;
    }

    useEffect(() => {
        collapse();
        cursor();
    })

    const init = () => {
        console.log(audios[idParams.workId]);
        console.log(audios);
        console.log(idParams.workId);
    }

    useEffect(() => {
        init();
        window.addEventListener('mousemove', getPosition, false);

        return () => window.removeEventListener('mousemove', getPosition, false)
    }, [])
    
    return (
        <div className ="container">
            <div ref = { cursorRef } className = "cursor"></div>
            <h1>work { idParams.workId } page</h1>
            <img ref = { imageRef } src = { images[idParams.workId - 1]} onMouseOut = { handleNotHover } onMouseOver = { handleHover } alt = ""/>
            <audio controls autoPlay ref = { audioRef } src = { audios[idParams.workId - 1] }></audio>
        </div>
    );
}

export default WorkDetail;