import { useSearchParams } from "react-router-dom";

export const google_api_key="AIzaSyBvvegD7Laip5Xy85ntJAbyz51lEKHhe5o";

export const youtube_api = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key="+google_api_key;


