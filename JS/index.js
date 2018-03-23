function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

$(document).ready(function(){
  $('body,html').animate({
    scrollTop: 0
  }, 800);
  $('#btn-go-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

$('.carousel').carousel({
  interval: 15000
});

function showtext()
{
  var text="For more Information Conntact US";
  document.getElementById("textarea").innerHTML=text;
}



$('#top').click(function(){ $(window).scrollTop(0); });

$(document).ready(function(){
  $('#more-func').click(function(){
    $(".about-us").show();
    $('#dd').hide();
    $('.abc').hide();
  });
});

$("button").click(function() {
  $('html,body').animate({
    scrollTop: $(".second").offset().top},
    'slow');
});


$(document).ready(function(){
  $('#hide-content').click(function(){
    $(".about-us").show();
    $('#dd').hide();
    $('.abc').hide();
    $("#hide-content").prop("disabled",true);

  });
  $("#show-content").click(function(){
    $("#dd").show();
    $('.abc').show();
    $(".about-us").hide();
  });
});

