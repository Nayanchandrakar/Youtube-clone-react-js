import axios from "axios";

const API_URL = 'https://youtube138.p.rapidapi.com'


let Fetchdata = async(Type,url) => {
let options = {
params: {q : `${url}`},
headers : {'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'}
}

let {data} = await axios.get(`${API_URL}/${Type}` ,options)
return data

}




export {Fetchdata}