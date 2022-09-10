import {Howl, Howler} from 'howler';
//import {useMemo, useEffect, useState} from "react";
import {Component} from "react";



const SoundPlayer =(props)=>{

    const soundPlay = (src)=>{

        const sound = new Howl({
            src,
            html5 : true
        })
        //sound.soundObj
        sound.play();
    }
    const renderButtonSound = ()=>{
        return props.audioClips.map((soundObj,index)=>{
            return (<button key={index} onClick={()=>{soundPlay(soundObj.sound)}}>
                {soundObj.label}
            </button>);
        })
    }

    // render(){
        return (
        <div className = "App">
            <h2>sound</h2>
            {renderButtonSound()}
        </div>);

    // }
}
export default SoundPlayer;