$(document).ready(function(){
    $(".nextButton").click(function(){

      $("#firstPage").animate({
        left: '70%',
      }).animate({
        zIndex: '1',
      }).animate({
        left: '15%',
        opacity: '0.1',
        top:'160px',
      },"slow");

      $("#secondPage").animate({
        left: '35%',
        opacity: '1',
        top:'100px',
        zIndex: '3'
      },"slow");
      $("#thirdPage").animate({
        left: '25%',
        opacity: '0.2',
        top:'130px',
        zIndex: '2'
      },"slow");
        
      $('#firstPage').attr('id', 'temp');
      $('#secondPage').attr('id', 'firstPage');
      $('#thirdPage').attr('id', 'secondPage');
      $('#temp').attr('id', 'thirdPage');
    });
  });