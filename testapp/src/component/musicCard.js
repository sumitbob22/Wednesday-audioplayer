import React, { Component } from 'react';

export class MusicCard extends Component{
    constructor(props){
        super(props);
        this.music = null;
        this.state={
            currentTrack:''
        }
    }

    play=(src)=>{
        if(!this.music){
            this.music = document.createElement("audio");  
        }
        this.music.setAttribute('src',src); 
        this.music.load();
        this.music.play(); 

        this.setState({
            currentTrack:src
        })
    }
   
    pause =()=>{
        this.music.pause();
    }     

    componentWillUnmount=()=>{
        this.music.setAttribute('src','');
        this.music.load(); 
        this.music.play(); 
        this.music.remove();
        this.music = null;
    }


    render(){
        const {data} = this.props;
        const{currentTrack} = this.state;
        return(
            <>
             <div className='flex-container'>
             {
                    data && data.map((item,index) =>{
                        return(
                            <div className='card' key={`indexI${index}`}>
                            <div className='left-card'>
                                <img src={item.artworkUrl100} alt='album-img'/>
                            </div>
                            <div className='right-card'>
                                <div style={{height:'95px'}}>
                                <h4 className='collectionName'>{item.collectionName}</h4>
                                <h4 className='artistName'>{item.artistName}</h4>
                                </div>
                                <div className='audio-control' id="audioControl">
                                    <button onClick={()=>this.play(item.previewUrl)}>Play</button>
                                   { currentTrack && currentTrack === item.previewUrl && <button onClick={this.pause}>Pause</button>}
                                </div>
                            </div>
                        </div>
                        )
                    }) 
            }
             </div>
            </>
        )
    }
} 