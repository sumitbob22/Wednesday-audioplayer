import axios from 'axios';
export function Get(url){
     return axios.get(url).then(res => {
         console.log("axios--->",res)
         if(res.status === 200){
            return res.data;
         }else{
            return {};
         }
})
}