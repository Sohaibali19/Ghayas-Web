$(".inner-switch").on("click", function() {
    // toggle moon and sun every time
    $(this).find("i").toggleClass("fa-moon").toggleClass("fa-sun");
  
    if ($("body").hasClass("dark")) {
      $("nav").removeClass("dark-force");
      $("body").removeClass("dark");
  } else {
   $("body").addClass("dark");
      $("nav").addClass("dark-force");
    }
  });