const image = document.getElementsByClassName("card-img-top");
const carouselItem = document.getElementsByClassName("carousel-item");
const modal = document.getElementsByClassName("modal-body");
var modalImg = document.getElementById("img01");

function display() {
  console.log(this.src);
  // modal.style.display = "block";
  modalImg.src = `${this.src}`;
}
// function myFunction() {
//   element.classList.remove("mystyle");
//   var element = document.getElementById("myDIV");
//   element.classList.add("mystyle");
// }
for(var i =0; i<carouselItem.length; i++){
  console.log(carouselItem[i].firstElementChild, image[i].attributes[0].value)
  const CarouselImages = carouselItem[i].firstElementChild.attributes[0].value;
  const displayImages = image[i].attributes[0].value;
  
  image[i].addEventListener("click",()=>{
    if(CarouselImages === displayImages){
     
      console.log('yes',  image[0].attributes[0].value)
    }
    // carouselItem[i].classList.add("active")
  });
}

// for(var i =0; i<image.length; i++){
//   console.log(image.length)
//   image[i].addEventListener("click", display);
// }

