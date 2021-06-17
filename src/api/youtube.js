import axios from "axios"
const KEY = "AIzaSyAPerQqJcRy3MgDFvhH_XFmvA4ZrOQDWJQ";


export default axios.create({
baseURL : "https://www.googleapis.com/youtube/v3",
params : {
part: "snippet",
maxResults: 5,
key: KEY,
},
headers:{}

})