// JavaScript Document
console.log("hi");

var wishlist=document.getElementById("wishlist");

wishlist.addEventListener("click", change);

function change(){
    wishlist.classList.toggle("anders")
}