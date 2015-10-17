$(document).ready(function() {


  console.log("Script included!");

  $(".ingredient").click( function() {

      console.log("event handler trapped click");

     $boughtCheck = $(this).prev().prev();

     if ($boughtCheck.text() === "") {
        $boughtCheck.text("X");
     } else {
        $boughtCheck.text("");
     }

  });


  $('tr').hover(
    function(){
      $(this).addClass('active');
   },
   function(){
      $(this).removeClass('active');
   });

  $('.column li').click( function() {

      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        var instruction = $(this).html();
        var newInstruction = instruction.slice("done --  ".length - 1);
        console.log("newInstruction = " + newInstruction);
        $(this).html(newInstruction);
      } else {
        $(this).addClass('active');
        var instruction = $(this).html();
        $(this).html("done --  " + instruction);
      }

  });

  $(".horizline a").click( function(event) {

      event.preventDefault();

      //get the images and hide them
      var $tempArray = $(".toggleimage");

      $tempArray.each(function( index ) {
          //$(this).css("display", "none");
          //$(this).toggle();
          //$(this).css({visibility: "hidden"});
          $(this).css({visibility: "hidden"});
      });

      // $( "li" ).each(function( index ) {
      //   console.log( index + ": " + $( this ).text() );
      // });

  });

});
