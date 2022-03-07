import axios from 'axios';

const KEY='AIzaSyCR9WlsJzQ_cHpSegi6Z6kwhLTiZ6NfhNM';


export default axios.create({
  baseURL:"https://www.googleapis.com/youtube/v3",
  params:{
    part:'snippet',
    maxResults:50,
    key:KEY,
  }
});
