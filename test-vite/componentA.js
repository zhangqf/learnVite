import componentAcss from './componentA.module.css'
console.log(componentAcss)
const div = document.createElement('div')

div.className = componentAcss.content

document.body.append(div)
