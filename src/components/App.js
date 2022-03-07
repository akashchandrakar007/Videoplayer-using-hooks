import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App=()=>{

   const [videos,setVideos]=useState([]);
   const [selectedVideo,setSelectedVideo]=useState(null);

   useEffect(()=>{
     onTermSubmit('Marvel');
   },[]);

   const onTermSubmit= async (term)=>{
     const response =await youtube.get('/search',{
       params:{
         q:term
       }
     });
     setVideos(response.data.items);
   }


   return (
     <div className="ui container">
       <SearchBar onFormSubmit={onTermSubmit}/>
       <VideoDetail video={selectedVideo}/>
       <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
     </div>
   );
};


export default App;
