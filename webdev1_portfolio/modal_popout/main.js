!---- $(".open").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");
  });
  
  $(".close, .popup-overlay").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
  });
  ----!

  $('#box-show').click(function(){
    $('#box-show').show()
  })
  $('#hide').click(function(){
    $('#box-hide').hide();
  })