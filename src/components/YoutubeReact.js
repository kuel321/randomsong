import React, { Component, useEffect  } from 'react';
import YouTube from 'react-youtube';
import {useInView} from 'react-intersection-observer';


 
class YoutubeReact extends Component {


    
  render() {
      const {videoId} = this.props;
      const videoVariants = {
      
      }
      
     
    const opts = {
      height: '1',
      width: '1',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    
    event.target.playVideo();
  }

 _onPlay(event) {
     event.target.playVideo();
 }

}



export default YoutubeReact;