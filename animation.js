$(document).ready(function(){
  // next page animation
    $(".nextButton").click(function(){

      $("#firstPage").animate({
        left: '70%',
      }).animate({
        zIndex: '1',
      }).animate({
        left: '5%',
        opacity: '0.1',
        top:'25vh',
      },"slow");

      $("#secondPage").animate({
        left: '35%',
        opacity: '1',
        top:'10vh',
        zIndex: '3'
      },"slow");
      $("#thirdPage").animate({
        left: '25%',
        opacity: '0.3',
        top:'15vh',
        zIndex: '2'
      },"slow");
      $("#fourthPage").animate({
        left: '15%',
        opacity: '0.2',
        top:'20vh',
        zIndex: '2'
      },"slow");
        
      $('#firstPage').attr('id', 'temp');
      $('#secondPage').attr('id', 'firstPage');
      $('#thirdPage').attr('id', 'secondPage');
      $('#fourthPage').attr('id', 'thirdPage');
      $('#temp').attr('id', 'fourthPage');
    });
    // end of next page animation


    // changing background opacity with slider
      function changeOpacity(){
        var value = document.getElementById("rangeSlider").value;
        value = value/10;
          var opacityOfPage = "rgba(0, 0, 0,"+value+")"
          document.getElementById("firstPage").style.backgroundColor = opacityOfPage;
          document.getElementById("secondPage").style.backgroundColor = opacityOfPage;
          document.getElementById("thirdPage").style.backgroundColor = opacityOfPage;
          document.getElementById("fourthPage").style.backgroundColor = opacityOfPage;
      }
      document.getElementById("rangeSlider").addEventListener("input",changeOpacity);
    // end of slider effect

    // Modal opening and closing animation
    $(".modalOpener").click(function(){
      $(".w3scholImages").css("display","block");
    })
    $(".close").click(function(){
      $(".w3scholImages").css("display","none");
    })
  });

