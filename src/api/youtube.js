import axios from "axios"
const KEY = "AIzaSyB5zVieboI-a9bUjpjs-xNNj2R6IYTGmss";


export default axios.create({
baseURL : "https://www.googleapis.com/youtube/v3",
params : {
part: "snippet",
maxResults: 5,
key: KEY,
},
headers:{}

})