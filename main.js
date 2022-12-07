var quantity=document.getElementById('quantity').textContent;
var price=document.getElementById('price').textContent

function addition(){
    quantity++
    document.getElementById('quantity').textContent=quantity
    priceprod()
}
function soustraction(){
    if(quantity>1){
        quantity--

    }else{
        quantity=1
    }
    
    document.getElementById('quantity').textContent=quantity
    priceprod()
}
function priceprod(){
    var totalprice=0
    totalprice=quantity*price
    document.getElementById('price').textContent=totalprice
   
}
function shopcard(){
    // var price = document.getElementById('price').textContent
    // var quantity=document.getElementById('quantity').textContent;
    var img =document.getElementById("cardpc").src
    var object
    object={
        price:price, 
        quantity:quantity,
        image:img,
    }
    console.log(object)
}