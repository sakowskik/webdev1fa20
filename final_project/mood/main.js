let sadImages = ["../images/sad1.jpg", "../images/sad2.jpg", "../images/sad3.jpg", "../images/sad4.jpg", "../images/sad5.jpg"];

console.log(sadImages[1])

$("#box1").click(function(){
  let randomIndex = Math.floor(Math.random()*5);
  let imageSrc = sadImages[randomIndex];
  $("#sad-img").attr("src", imageSrc);
})


let angryImages = ["../images/angry1.jpg", "../images/angry2.jpg","../images/angry3.jpg","../images/angry4.jpg","../images/angry5.jpg"];

console.log(angryImages[1])

$("#box2").click(function(){
  let randomIndex = Math.floor(Math.random()*5);
  let imageSrc = angryImages[randomIndex];
  $('#angry-img').attr("src", imageSrc)
})


let stressedImages = ["../images/stressed1.jpg", "../images/stressed2.jpg","../images/stressed3.jpg","../images/stressed4.jpg","../images/stressed5.jpg"];

console.log(angryImages[1])

$('#box3').click(function(){
  let randomIndex = Math.floor(Math.random()*5);
  let imageSrc = stressedImages[randomIndex];
  $('#stressed-img').attr("src", imageSrc)
})


let exhaustedImages = ["../images/exhausted1.jpg", "../images/exhausted2.jpg","../images/exhausted3.jpg","../images/exhausted4.jpg","../images/exhausted5.jpg","..images/images/exhausted6.jpg"];

console.log(exhaustedImages[1])

$('#box4').click(function(){
  let randomIndex = Math.floor(Math.random()*5);
  let imageSrc = exhaustedImages[randomIndex];
  $('#exhausted-img').attr("src", imageSrc)
})



let disappointedImages = ["../images/disappointed1.jpg", "../images/disappointed2.jpg","../images/disappointed3.jpg","../images/disappointed4.jpg","../images/disappointed5.jpg"];

console.log(disappointedImages[1])

$('#box5').click(function(){
  let randomIndex = Math.floor(Math.random()*5);
  let imageSrc = disappointedImages[randomIndex];
  $('#disappointed-img').attr("src", imageSrc)
})



let anxiousImages = ["../images/anxious1.jpg", "../images/anxious2.jpg","../images/anxious3.jpg","../images/anxious4.jpg","../images/anxious5.jpg","../images/anxious6.jpg"];

console.log(anxiousImages[1])

$('#box6').click(function(){
  let randomIndex = Math.floor(Math.random()*6);
  let imageSrc = anxiousImages[randomIndex];
  $('#anxious-img').attr("src", imageSrc)
})


let joyImages = ["../images/joy1.jpg", "../images/joy2.jpg","../images/joy3.jpg","../images/joy4.jpg"];

console.log(joyImages[1])

$('#box7').click(function(){
  let randomIndex = Math.floor(Math.random()*4);
  let imageSrc = joyImages[randomIndex];
  $('#joy-img').attr("src", imageSrc)
})



let boredImages = ["../images/bored1.jpg", "../images/bored2.jpg","../images/bored3.jpg","../images/bored4.jpg"];

console.log(boredImages[1])

$('#box8').click(function(){
  let randomIndex = Math.floor(Math.random()*4);
  let imageSrc = boredImages[randomIndex];
  $('#bored-img').attr("src", imageSrc)
})


