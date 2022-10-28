let boxes=document.querySelectorAll('.box1')
let reset=document.querySelector('#reset')
let turn='X'

let gamestart=true
let winsscore=document.getElementById('wins')
let gamewinbox=document.querySelector('.gamestart')



// functionality of changing PLayer Sign once press it became X again in another it change to Y//

function changeturn(){
   if (turn=='X'){
      return turn='0'
   }
  else{
   return turn='X'
  }
}

// FUnctionality code for winning this game crossing when three rows came same//
function winningchance(){
   let wins=[[0,1,2,0,50,0],[0,3,6, -100,130,90  ],[1,4,7, 0,130,90],[2,5,8 ,100,130,90],[3,4,5,0,130,0],[6,7,8,0,230,0],[0,4,8,-10,130,40],[2,4,6,-10,140,140]]
   let cut=document.querySelector('.cut')
   wins.forEach((item)=>{
      let mainboxes=document.querySelectorAll('.box1')
      if(mainboxes[item[0]].innerText === mainboxes[item[1]].innerText && mainboxes[item[1]].innerText === mainboxes[item[2]].innerText && mainboxes[item[0]].innerText != ""){
         cut.style.background='red'
         cut.style.transform=`translate( ${item[3]+'px'},${item[4]+'px'}) rotate(${item[5]+'deg'})            `
         winsscore.innerText=`${mainboxes[item[0]].innerText} wins`
         
         setTimeout(()=>{
            gamewinbox.classList.remove('hide')
            gamewinbox.firstElementChild.innerHTML=`Game Over.Player ${mainboxes[item[0]].innerText} wins.<br>Press Here to Re-start`
         },400)
      
        
         
      }
   })
}


// Game main Parent COde start here//
function main_game_start(){
   boxes.forEach((item)=>{
      item.addEventListener('click',()=>{
         
            if (item.innerText===''){
               item.innerText=turn
               
               changeturn()
               winningchance()
            }
         
        
      })
   })
}


// Game starting phase//
if (gamestart==true){
   main_game_start()

}


// Renew game again functionaliTY when press Reset button && Last win game button//
reset.addEventListener('click',resetmain)
function resetmain(){
   boxes.forEach((item)=>item.innerHTML='')
   location.reload()
}
gamewinbox.addEventListener('click',()=>{
   location.reload()
})