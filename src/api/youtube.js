import axios from 'axios';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        maxResult : 5,
        key: 'AIzaSyAo-xk9f-V9QDwX3HgdKsd',  //This is a sample api, please dont  try this api this wouldnt work
        
    }
});
