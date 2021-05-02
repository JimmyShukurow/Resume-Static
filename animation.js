$(document).ready(function(){
  // next page animation
    $(".nextButton").click(function(){

      $("#firstPage").animate({
        left: '70%',
      }).animate({
        zIndex: '1',
      }).animate({
        left: '15%',
        opacity: '0.1',
        top:'20vh',
      },"slow");

      $("#secondPage").animate({
        left: '35%',
        opacity: '1',
        top:'10vh',
        zIndex: '3'
      },"slow");
      $("#thirdPage").animate({
        left: '25%',
        opacity: '0.2',
        top:'15vh',
        zIndex: '2'
      },"slow");
        
      $('#firstPage').attr('id', 'temp');
      $('#secondPage').attr('id', 'firstPage');
      $('#thirdPage').attr('id', 'secondPage');
      $('#temp').attr('id', 'thirdPage');
    });
    // end of next page animation


    // changing background opacity with slider
      function changeOpacity(){
        var value = document.getElementById("rangeSlider").value;
        value = value/10;
        if (screen.width < 500){
          var opacityOfPage = "rgba(0, 0, 0,"+value+")"
          document.getElementById("firstPage").style.backgroundColor = opacityOfPage;
          document.getElementById("secondPage").style.backgroundColor = opacityOfPage;
          document.getElementById("thirdPage").style.backgroundColor = opacityOfPage;
        }else{
          var opacityOfPage = "rgba(22, 223, 230,"+value+")"
          document.getElementById("firstPage").style.backgroundColor = opacityOfPage;
        }
      
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

