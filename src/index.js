import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'

// const user = {
//     nombre: 'Daian',
//     apellido: 'Rene',
//     avatar: "https://static.thenounproject.com/png/157453-200.png"
// }

// const getName2 = (user)=>{
//     return `${user.nombre} ${user.apellido} `
// }

// const getName3= (user)=>{
//     if(user){
//         return <h1>Holiwis {getName2(user)}</h1>
//     }else{
//         return <h1>Naonao</h1>
//     }
// }


// const element = (
//     <div>
//         {getName3(user)}
//         <img src= {user.avatar}/>
//     </div>
// )

const container = document.getElementById('root')



ReactDom.render(<App></App>,container)