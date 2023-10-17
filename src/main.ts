import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  //newbtn()

  //count()

  // const a = document.createElement('button')
  // a.textContent = "Új szöveg"
  // document.getElementById('app')!.appendChild(a)
  // a.addEventListener('click', text)

  //document.getElementById('submit')!.addEventListener('click', table)
})

function newbtn(){
  //1 feladat
  const btn = document.createElement('button')
  document.getElementById('app')!.appendChild(btn)
  btn.textContent = "Feladat1"
  const color = "#" + Math.floor(Math.random() * 2 ** 24).toString(16)
  btn.style.backgroundColor = color
  btn.addEventListener('click', newbtn)
}

function count(){
  //2 feladat
  const btn = document.createElement('button')
  document.getElementById('count')!.appendChild(btn)
  let count = 0
  btn.innerHTML = `Count ${count}`
  btn.addEventListener('click', () => {
    count++
    btn.innerHTML = `Count ${count}`
  })
}

function text(){
  //3 feladat
  let text:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis pulvinar nunc sit amet sagittis. Quisque venenatis dolor molestie turpis ullamcorper, eleifend tincidunt felis pellentesque. Phasellus cursus maximus risus, vel mollis dui rutrum ac. Sed elementum, turpis non dignissim laoreet, massa massa interdum felis, ornare pretium erat tortor id quam. Duis bibendum nisl et urna pellentesque convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras posuere malesuada ornare. Sed vitae finibus justo. Sed auctor nisi odio, quis gravida elit blandit ac. Fusce aliquet eget erat non dapibus."
  const p = document.createElement('p')
  const fontcolor = document.createElement('input')
  fontcolor.type = 'color'
  const backgroundcolor = document.createElement('input')
  backgroundcolor.type = 'color'
  p.textContent = text
  document.getElementById('app')!.appendChild(p)
  document.getElementById('app')!.appendChild(fontcolor)
  document.getElementById('app')!.appendChild(backgroundcolor)
  fontcolor.addEventListener('input', () => {
    p.style.color = fontcolor.value
  })
  backgroundcolor.addEventListener('input', () => {
    p.style.backgroundColor = backgroundcolor.value
  })
}

import {something} from './data'
let items:something[] = []

function table(){
  //4 feladat
  try{
    let a1 = (document.getElementById('name') as HTMLInputElement).value
    let a2 = (document.getElementById('food') as HTMLInputElement).value
    const rowdata:something = new something(a1, a2)
    items.push(rowdata)
    Add()
  }catch(e){
    if(e instanceof Error){
      console.log(e.message)
    }
  }
}

function Add(){
  const tr = document.createElement('tr')
  const thname = document.createElement('th')
  const thfood = document.createElement('th')
  const tbl = document.getElementById('tbl')
  const thdelete = document.createElement('th')
  for(const vs of items){
    thname.textContent = `${vs.name}`
    thfood.textContent = `${vs.food}`
  }    
  thdelete.textContent = "🗑️"
  thdelete.addEventListener('click', () => {
    tr.remove()
  })
  tr.appendChild(thname)
  tr.appendChild(thfood)
  tr.appendChild(thdelete)
  tbl!.appendChild(tr)
}