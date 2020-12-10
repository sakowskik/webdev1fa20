let joyImages = ["images/joy1.jpg", "../images/joy2.jpg","../images/joy3.jpg","../images/joy4.jpg"
];

console.log(joyImages[1])

$('#box7').click(function(){
  let randomIndex = Math.floor(Math.random()*4);
  let imageSrc = joyImages[randomIndex];
  $('#joy-img').attr("src", imageSrc)
})