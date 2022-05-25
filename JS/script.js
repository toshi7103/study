function pullDown() {
const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")
const pullDownChild = document.querySelectorAll(".pull-down-list")
const currentList = document.getElementById("current-list")
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
  this.setAttribute("style", "background-color:blue;")
})

pullDownButton.addEventListener('mouseout',function(){
  this.removeAttribute("style", "background-color:red;")
})

pullDownButton.addEventListener('click', function(){
  if(pullDownParents.getAttribute("style") == "display:block;"){
    pullDownParents.removeAttribute("style","display:block;")
    console.log("非表示")
  } else {
    pullDownParents.setAttribute("style","display:block;")
    console.log("表示")
  }
})

pullDownChild.forEach(function(list) {
  list.addEventListener('click',function() {
    const value = list.innerHTML
    console.log(value)
    currentList.innerHTML = value
  })
})

}
window.addEventListener('load',pullDown)