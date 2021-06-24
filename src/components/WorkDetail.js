import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import one from '../assets/1.mp3';
import two from '../assets/2.mp3';
import first from '../assets/one.jpg';
import second from '../assets/two.jpeg';

const WorkDetail = () => {
    const audios = [ one, two ];
    const images = [ first, second ];
    const idParams = useParams();

    const audioRef = useRef();

    const init = () => {
        console.log(audios[idParams.workId]);
        console.log(audios);
        console.log(idParams.workId);
    }

    useEffect(() => {
        init();
    }, [])
    
    return (
        <div>
            <h1>work { idParams.workId } page</h1>
            <img src = { images[idParams.workId - 1]} alt = ""/>
            <audio controls autoPlay ref = { audioRef } src = { audios[idParams.workId - 1] }></audio>
        </div>
    );
}

export default WorkDetail;