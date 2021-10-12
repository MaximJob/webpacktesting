// import axios from "axios"
import Post from "@/post.js";
import json from '@/assets/json.json'
//import WebpackImg from './assets/webpack.svg'
import '@/styles/styles.css'

const post = new Post('Webpack Test', 'WebpackImg')

console.log(post.toString())

console.log(json)

// let data = axios.get('https://pogoda.yandex.ru/static/cities.xml')
//     .then(response => {
//         console.log(response)
//     })
