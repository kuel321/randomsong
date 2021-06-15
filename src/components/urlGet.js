import React, { Component, useEffect } from 'react'
import { render } from 'react-dom';
import ObserveVideo from './ObserveVideo';






 class Urlget extends Component {
 
      
      state = {
       loading: true,
       newurl: null,
       menuscreen: true,
       newTitle: null,
       videoArray: null,
       buttonText: "Load more songs",
       index: 3
      
       
   };
  

  
   
  
 async fetchData() {
  const url = "https://curvy-wombat-54.loca.lt/myurl";
  const response = await fetch(url);
  const data = await response.json();
  this.setState({newurl: data.thisUrl, newTitle: data.id, videoArray: data.thisUrl.slice(0,this.state.index), loading: false});
  console.log(this.state.newurl.length)
 }
  
  async componentDidMount() {
        this.fetchData();
  }

   newit = () => {
     if(this.state.index >= 10){
       this.setState({
         buttonText: "All out! Refresh for more"

       })
     }
     else{
     this.setState({
       index: this.state.index+2,
      videoArray: this.state.newurl.slice(0,this.state.index)
     });
    }
   }

   countinue = () => {
     
     if (!this.state.newurl){
       this.fetchData();

     }
     this.setState({
       menuscreen: false,
       loading: false
     })
   }

  
    render() {
     
        if (this.state.menuscreen) {
          return <div>
            <div className="header"> 
            <div className="box1">
              <h1 className="boxWord">Random Song Generator</h1>
              <div className="exitButtondiv">
                <button className="exitButton" onClick={this.countinue}>Countinue</button>
              </div>
              <h1 className="boxWord1">(warning: this site will autoplay songs, so adjust volume if necessary.)</h1>
            </div >
          
            </div>
          </div>
        }

        if (this.state.loading) {
          return <div>
            <h1>loading</h1>
          </div>
        }
    
        if (!this.state.newurl) {
          return <div>Couldn't display any songs</div>
          ;
        }
      
    
        return (
          <div className="mainContainer">
           <div class="parent row">



            
            <div className="videoContainer">
            <div className="bleh">
            
              
              {this.state.videoArray.map((item, index) => (
                <div>
                <div id="urlVideo" className="thisVideo">
                   <ObserveVideo videoId={this.state.newurl[index]} title={this.state.newTitle[index]}/> </div>
                </div>
              ))}
              <button className="videoButton" onClick={this.newit}>{this.state.buttonText}</button>

      
            </div>
    
              </div>
          </div>
          </div>
        );

        
      }

      
     
    }




export default Urlget
