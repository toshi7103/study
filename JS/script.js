const pullDownButton = document.getElementById("lists")
console.log(pullDownButton)

window.addEventListener('load',function(){

  const pullDownButton = document.getElementById("lists")
  console.log(pullDownButton)
})


lists.addEventListener('mouseover',function(){

  console.log("乗る")
  
})

lists.addEventListener('mouseout',function(){

  console.log("外れる")
  
})

lists.addEventListener('click',function(){

  console.log("クリック")
})

pullDownButton.addEventListener('mouseover', function(){
  pullDownButton.setAttribute("style", "background-color:blue;")
})

pullDownButton.addEventListener('mouseout',function(){
  pullDownButton.removeAttribute("style", "background-color:red;")
})

pullDownButton.addEventListener('click', function(){
  pullDownButton.setAttribute("style", "background-color:green;")
})