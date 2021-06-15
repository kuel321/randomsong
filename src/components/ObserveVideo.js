import React, { Component, useEffect  } from 'react';
import YouTube from 'react-youtube';
import { useInView } from "react-intersection-observer";
import YoutubeReact from './YoutubeReact';


  

  function useOnScreen(options) {
    const ref = React.useRef();
    const [visible, setVisible] = React.useState(false);
    
    React.useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        
        setVisible(entry.isIntersecting);
       
        
      }, options);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.unobserve(ref.current);
      };
    },  [ref, options]);
    return [ref, visible];
  }


  function ObserveVideo(props){
     const [ref, visible] = useOnScreen();
     

     return (
       <div className="boxContainer">
         
         <div className="box" id="box" ref={ref}> {visible ? (<div className="thisVideo"><h1 className="videoTitle">{props.title}{console.log(props.title)}</h1> 
           <YoutubeReact videoId={props.videoId} /> </div>) : (<h1></h1>)}

            </div>
       </div>
     )
   
  }



export default ObserveVideo;