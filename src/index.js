document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
let nameInput = document.getElementById("gift-name-input")
let imageInput = document.getElementById("gift-image-input")
let list = document.getElementById("gift-list")
let img = document.getElementsByTagName("img")

function individualGifts(gifts){
  gifts.forEach((gift) => {
    showGift(gift)
  })
};

function showGift(gift){
  let li = document.createElement("li")
  list.append(li)
  li.innerHTML = `${gift.name}
  <br>
  <img id=${gift.id} src=${gift.image}><button id="edit">Edit Gift</button>`
};

document.addEventListener("submit",createGift)

function createGift(e){
  e.preventDefault()
  console.log(nameInput.value)
  showGift({name: nameInput.value, image: imageInput.value})
};

list.addEventListener("click",deleteGift)

function updateGifts(e){
  e.preventDefault()
  if(e.target.id === 'edit'){
    editGift(e)
  } else if(e.target.id === 'delete') {
    deleteGift
  }
}

function editGift(e){
  console.log(e.target.previousElementSibling.id)
}


function deleteGift(e){
  e.target.remove()
}























  individualGifts(gifts)
})
