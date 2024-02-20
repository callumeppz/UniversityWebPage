if ("ontouchstart" in document.documentElement) {
    document.documentElement.className += " touch";
    console.log("   supports touch");
  } else {
    console.log("   does NOT support touch");
  }
  
  
  
  $('.touch .container').each(function() {
    $('*').not(this).on('mouseover', function() {});
  });