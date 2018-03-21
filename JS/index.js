function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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
    $('#hide-content').click(function(){
      $(".about-us").show();
      $('#dd').hide();
      $('.abc').hide();
    });
    $("#show-content").click(function(){
      $("#dd").show();
      $('.abc').show();
      $(".about-us").hide();
    });
  });