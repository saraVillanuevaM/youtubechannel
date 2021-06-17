import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from"./components/VideoList";
import VideoItem from"./components/VideoItem";
import "../src/styles/styles.css"




class App extends React.Component {

state = {
    videos: [],
    selectedVideo: null
  }



onVideoSelected = videoId => {
  this.setState({
selectedVideo:videoId

  })
}

onTermSubmit = async keyword => {
    const response = await youtube.get("/search", {
      params: {
        q: keyword
      }
    })
    this.setState({
      videosMetaInfo: response.data.items
 
    })
    
    console.log("looooooo")
    
    console.log(response.data.items[0]);
    this.setState({ 
      videos:response.data.items,
      selectedVideo:response.data.items[0]
      
    })
console.log(this.state)

  };



  render() {
    return (
<div className="container">

      <div className="searchbar">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        </div>


      <div className="videoslist-container">
        <VideoList onVideoSelected={this.onVideoSelected}
        data={this.state.videos}/>

        </div>

      <div className="videoselect-container">

        <VideoItem video={this.state.selectedVideo} />
        
        
      </div>
</div>

     
    );
  }
}

export default App;