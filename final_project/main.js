let joyImages = ["images/joy1", "images/joy2","images/joy3","images/joy4"];

console.log(joyImages[1])

$('.box1').click(function(){

  let randomIndex = Math.floor(Math.random()*4);
  let imageSrc = joyImages[randomIndex];
  $('#joy-img').attr("src", imageSrc)
})