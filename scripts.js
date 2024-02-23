// declaration 
var plusbtn = Array.from(document.querySelectorAll(".fa-plus-circle"));
var moinsbtn = Array.from(document.querySelectorAll(".fa-minus-circle"))
var deleteBtns = Array.from(document.querySelectorAll('.fa-trash-alt'))
var cards = Array.from(document.querySelectorAll(".card"))
var likebtn = Array.from(document.querySelectorAll(".fa-heart"))
// add button 
for (let plus of plusbtn ) {
plus.addEventListener('click', function(){
    plus.nextElementSibling.innerHTML ++;
    total() ;

} 
)}
//subb button 
for (let moins of moinsbtn) {
    moins.addEventListener('click', function() {
   moins.previousElementSibling.innerHTML > 0 ? moins.previousElementSibling.innerHTML -- : null ;
   total() ;
} 
 
   )}
   // delete
   for (let i in deleteBtns) {
    deleteBtns[i].addEventListener('click', function () {
      cards[i].remove()
      total()
    })
  }
    // like button 
   for ( let like =0 ;like< likebtn.length ;like ++ ) 
       likebtn[like].addEventListener("click", function()
{
    if (likebtn[like].style.color=='black'){
        likebtn[like].style.color='red'
    } else {
        likebtn[like].style.color='black'
    }
})

// total price 
function total ()
{
   let qu =  Array.from(document.querySelectorAll('.qute'))
   let prix =  Array.from(document.querySelectorAll('.unitt-price'))
   let s = 0 ;
   for ( let i = 0 ; i< qu.length ; i++ ){
    s= s + prix[i].innerHTML * qu[i].innerHTML
   }
   document.getElementById('total-price').innerHTML = s ;
} 
