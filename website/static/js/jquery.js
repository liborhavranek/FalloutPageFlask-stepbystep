
$(function () {
    var $element = $('.war, .booble-profile-name, .profile-name');
    function fadeInOut () {
        $element.fadeIn(2500, function () {
            $element.fadeOut(2000, function () {
                $element.fadeIn(2500, function () {
                    setTimeout(fadeInOut, 500);
                });
            });
        });
    }

    fadeInOut();
});

$(function () {
    $(".alert").fadeOut(4000)
});

$(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();


$(document).ready(function(){
    $(".hide").hide();  
    $(".meele-booblehead").click(function(){
      $(".meele-booblehead-description").toggle();
       // Hide the other elements
      $(".explosive-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();
    });
  
    $(".explosive-booblehead").click(function(){
      $(".explosive-booblehead-description").toggle();
      $(".meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".sneak-booblehead").click(function(){
      $(".sneak-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".barter-booblehead").click(function(){
      $(".barter-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".perception-booblehead").click(function(){ 
      $(".perception-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".strength-booblehead").click(function(){ 
      $(".strength-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".speech-booblehead").click(function(){ 
      $(".speech-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".charisma-booblehead").click(function(){
      $(".charisma-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".lock-booblehead").click(function(){
      $(".lock-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".smallguns-booblehead").click(function(){ 
      $(".smallguns-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".bigguns-booblehead").click(function(){ 
      $(".bigguns-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".medicine-booblehead").click(function(){ 
      $(".medicine-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".intelligence-booblehead").click(function(){ 
      $(".intelligence-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".endurance-booblehead").click(function(){
      $(".endurance-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".unarmed-booblehead").click(function(){
      $(".unarmed-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();
    });
  
    $(".agility-booblehead").click(function(){  
      $(".agility-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".energyweapon").click(function(){
      $(".energyweapon-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .luck-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();
    });
  
    $(".luck-booblehead").click(function(){ 
      $(".luck-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .repair-booblehead-description, .science-booblehead-description").hide();

    });
  
    $(".repair-booblehead").click(function(){ 
      $(".repair-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .science-booblehead-description").hide();
    });
  
    $(".science-booblehead").click(function(){
      $(".science-booblehead-description").toggle();
      $(".explosive-booblehead-description, .meele-booblehead-description, .sneak-booblehead-description, .barter-booblehead-description, .perception-booblehead-description, .strength-booblehead-description, .speech-booblehead-description, .charisma-booblehead-description, .lock-booblehead-description, .smallguns-booblehead-description, .bigguns-booblehead-description, .medicine-booblehead-description, .intelligence-booblehead-description, .endurance-booblehead-description, .unarmed-booblehead-description, .agility-booblehead-description, .energyweapon-booblehead-description, .luck-booblehead-description, .repair-booblehead-description").hide();

    });
  
  });
  // tooltips funciton end👆
  
  
  // perception funciton start👇
  $(function(){
    $(".perception-checkbox").attr("disabled", true);
    $("#perception-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead1','perception-find');
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".perception-unsearch").text("Nalezeno");
        $(".perception-unsearch").css('color', 'green');
        $(".perception-checkbox").prop( "checked", true );
        $(".perception-li").css( "text-decoration", 'line-through' );
        $(".perception-li").css( 'color', 'gray' );
        $("#id7-bobblehead").hide(); 
        $(".perception-booblehead-description").fadeOut(3000); 
  
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead1','perception-unfind');
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".perception-unsearch").text("Nenalezeno");
        $(".perception-unsearch").css('color', 'red');
        $( ".perception-checkbox" ).prop( "checked", false );
        $(".perception-li").css( "text-decoration", 'none' );
        $(".perception-li").css( 'color', 'black' );
        $("#id7-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead1') == 'perception-find') {
      $("#perception-button").removeClass("btn-danger");
      $("#perception-button").addClass("btn-success");
      $("#perception-button").text("Nalezeno");
      $(".perception-unsearch").text("Nalezeno");
      $(".perception-unsearch").css('color', 'green');
      $(".perception-checkbox").prop( "checked", true );
      $(".perception-li").css( "text-decoration", 'line-through' );
      $(".perception-li").css( 'color', 'gray' );
      $("#id7-bobblehead").hide(); 
      $(".perception-booblehead-description").fadeOut(); 
    }
  });
  // perception funciton end👆
  
  // explosive funciton start👇
  $(function(){
    
    $(".explosive-checkbox").attr("disabled", true);
    $("#explosive-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead2','explosive-find');
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".explosive-unsearch").text("Nalezeno");
        $(".explosive-unsearch").css('color', 'green');
        $(".explosive-checkbox").prop( "checked", true );
        $(".explosive-li").css( "text-decoration", 'line-through' );
        $(".explosive-li").css( 'color', 'gray' );
        $("#id4-bobblehead").hide(); 
        $(".explosive-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead2','explosive-unfind');
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".explosive-unsearch").text("Nenalezeno");
        $(".explosive-unsearch").css('color', 'red');
        $(".explosive-checkbox" ).prop( "checked", false );
        $(".explosive-li").css( "text-decoration", 'none' );
        $(".explosive-li").css( 'color', 'black' );
        $("#id4-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead2') == 'explosive-find') {
      $("#explosive-button").removeClass("btn-danger");
      $("#explosive-button").addClass("btn-success");
      $("#explosive-button").text("Nalezeno");
      $(".explosive-unsearch").text("Nalezeno");
      $(".explosive-unsearch").css('color', 'green');
      $(".explosive-checkbox").prop( "checked", true );
      $(".explosive-li").css( "text-decoration", 'line-through' );
      $(".explosive-li").css( 'color', 'gray' );
      $("#id4-bobblehead").hide(); 
      $(".explosive-booblehead-description").fadeOut(); 
    }
  });
  // explosive funciton end👆
  
 
  


  
  // repair funciton start👇
  $(function(){
    $(".repair-checkbox").attr("disabled", true);
    $("#repair-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead3','repair-find');
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".repair-unsearch").text("Nalezeno");
        $(".repair-unsearch").css('color', 'green');
        $(".repair-checkbox").prop( "checked", true );
        $(".repair-li").css( "text-decoration", 'line-through' );
        $(".repair-li").css( 'color', 'gray' );
        $("#id21-bobblehead").hide(); 
        $(".repair-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead3','repair-unfind');
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".repair-unsearch").text("Nenalezeno");
        $(".repair-unsearch").css('color', 'red');
        $(".repair-checkbox" ).prop( "checked", false );
        $(".repair-li").css( "text-decoration", 'none' );
        $(".repair-li").css( 'color', 'black' );
        $("#id21-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead3') == 'repair-find') {
      $("#repair-button").removeClass("btn-danger");
      $("#repair-button").addClass("btn-success");
      $("#repair-button").text("Nalezeno");
      $(".repair-unsearch").text("Nalezeno");
      $(".repair-unsearch").css('color', 'green');
      $(".repair-checkbox").prop( "checked", true );
      $(".repair-li").css( "text-decoration", 'line-through' );
      $(".repair-li").css( 'color', 'gray' );
      $("#id21-bobblehead").hide(); 
      $(".repair-booblehead-description").fadeOut(); 
    }
  });
  // repair funciton end👆
  
  
  // luck funciton start👇
  $(function(){
    $(".luck-checkbox").attr("disabled", true);
    $("#luck-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead4','luck-find');
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".luck-unsearch").text("Nalezeno");
        $(".luck-unsearch").css('color', 'green');
        $(".luck-checkbox").prop( "checked", true );
        $(".luck-li").css( "text-decoration", 'line-through' );
        $(".luck-li").css( 'color', 'gray' );
        $("#id20-bobblehead").hide(); 
        $(".luck-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead4','luck-unfind');
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".luck-unsearch").text("Nenalezeno");
        $(".luck-unsearch").css('color', 'red');
        $(".luck-checkbox" ).prop( "checked", false );
        $(".luck-li").css( "text-decoration", 'none' );
        $(".luck-li").css( 'color', 'black' );
        $("#id20-bobblehead").show()
      }
    });
    if (localStorage.getItem('bobblehead4') == 'luck-find') {
      $("#luck-button").removeClass("btn-danger");
      $("#luck-button").addClass("btn-success");
      $("#luck-button").text("Nalezeno");
      $(".luck-unsearch").text("Nalezeno");
      $(".luck-unsearch").css('color', 'green');
      $(".luck-checkbox").prop( "checked", true );
      $(".luck-li").css( "text-decoration", 'line-through' );
      $(".luck-li").css( 'color', 'gray' );
      $("#id20-bobblehead").hide(); 
      $(".luck-booblehead-description").fadeOut(); 
    }
  });
  // luck funciton end👆
  
  // agility funciton start👇
  $(function(){
    $(".agility-checkbox").attr("disabled", true);
    $("#agility-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead5','agility-find');
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".agility-unsearch").text("Nalezeno");
        $(".agility-unsearch").css('color', 'green');
        $(".agility-checkbox").prop( "checked", true );
        $(".agility-li").css( "text-decoration", 'line-through' );
        $(".agility-li").css( 'color', 'gray' );
        $("#id18-bobblehead").hide(); 
        $(".agility-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead5','agility-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".agility-unsearch").text("Nenalezeno");
        $(".agility-unsearch").css('color', 'red');
        $(".agility-checkbox" ).prop( "checked", false );
        $(".agility-li").css( "text-decoration", 'none' );
        $(".agility-li").css( 'color', 'black' );
        $("#id18-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead5') == 'agility-find') {
      $("#agility-button").removeClass("btn-danger");
      $("#agility-button").addClass("btn-success");
      $("#agility-button").text("Nalezeno");
      $(".agility-unsearch").text("Nalezeno");
      $(".agility-unsearch").css('color', 'green');
      $(".agility-checkbox").prop( "checked", true );
      $(".agility-li").css( "text-decoration", 'line-through' );
      $(".agility-li").css( 'color', 'gray' );
      $("#id18-bobblehead").hide(); 
      $(".agility-booblehead-description").fadeOut(); 
    }
  });
  // agility funciton end👆
  
  // endurance funciton start👇
  $(function(){
    $(".endurance-checkbox").attr("disabled", true);
    $("#endurance-button").click(function(){
      localStorage.setItem('bobblehead6','endurance-find')
      if($(this).hasClass("btn-danger")){
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".endurance-unsearch").text("Nalezeno");
        $(".endurance-unsearch").css('color', 'green');
        $(".endurance-checkbox").prop( "checked", true );
        $(".endurance-li").css( "text-decoration", 'line-through' );
        $(".endurance-li").css( 'color', 'gray' );
        $("#id17-bobblehead").hide(); 
        $(".endurance-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead6','endurance-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".endurance-unsearch").text("Nenalezeno");
        $(".endurance-unsearch").css('color', 'red');
        $(".endurance-checkbox" ).prop( "checked", false );
        $(".endurance-li").css( "text-decoration", 'none' );
        $(".endurance-li").css( 'color', 'black' );
        $("#id17-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead6') == 'endurance-find') {
      $("#endurance-button").removeClass("btn-danger");
      $("#endurance-button").addClass("btn-success");
      $("#endurance-button").text("Nalezeno");
      $(".endurance-unsearch").text("Nalezeno");
      $(".endurance-unsearch").css('color', 'green');
      $(".endurance-checkbox").prop( "checked", true );
      $(".endurance-li").css( "text-decoration", 'line-through' );
      $(".endurance-li").css( 'color', 'gray' );
      $("#id17-bobblehead").hide(); 
      $(".endurance-booblehead-description").fadeOut(); 
    }
  });
  // endurance funciton end👆
  
  
  // unarmed funciton start👇
  $(function(){
    $(".unarmed-checkbox").attr("disabled", true);
    $("#unarmed-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead7','unarmed-find')
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".unarmed-unsearch").text("Nalezeno");
        $(".unarmed-unsearch").css('color', 'green');
        $(".unarmed-checkbox").prop( "checked", true );
        $(".unarmed-li").css( "text-decoration", 'line-through' );
        $(".unarmed-li").css( 'color', 'gray' );
        $("#id16-bobblehead").hide(); 
        $(".unarmed-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead7','unarmed-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".unarmed-unsearch").text("Nenalezeno");
        $(".unarmed-unsearch").css('color', 'red');
        $(".unarmed-checkbox" ).prop( "checked", false );
        $(".unarmed-li").css( "text-decoration", 'none' );
        $(".unarmed-li").css( 'color', 'black' );
        $("#id16-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead7') == 'unarmed-find') {
      $("#unarmed-button").removeClass("btn-danger");
      $("#unarmed-button").addClass("btn-success");
      $("#unarmed-button").text("Nalezeno");
      $(".unarmed-unsearch").text("Nalezeno");
      $(".unarmed-unsearch").css('color', 'green');
      $(".unarmed-checkbox").prop( "checked", true );
      $(".unarmed-li").css( "text-decoration", 'line-through' );
      $(".unarmed-li").css( 'color', 'gray' );
      $("#id16-bobblehead").hide(); 
      $(".unarmed-booblehead-description").fadeOut(); 
    }
  });
  //unarmed funciton end👆
  
  // smallguns funciton start👇
  $(function(){
    $(".smallguns-checkbox").attr("disabled", true);
    $("#smallguns-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead8','smallguns-find')
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".smallguns-unsearch").text("Nalezeno");
        $(".smallguns-unsearch").css('color', 'green');
        $(".smallguns-checkbox").prop( "checked", true );
        $(".smallguns-li").css( "text-decoration", 'line-through' );
        $(".smallguns-li").css( 'color', 'gray' );
        $("#id12-bobblehead").hide(); 
        $(".smallguns-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead8','smallguns-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".smallguns-unsearch").text("Nenalezeno");
        $(".smallguns-unsearch").css('color', 'red');
        $(".smallguns-checkbox" ).prop( "checked", false );
        $(".smallguns-li").css( "text-decoration", 'none' );
        $(".smallguns-li").css( 'color', 'black' );
        $("#id12-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead8') == 'smallguns-find') {
      $("#smallguns-button").removeClass("btn-danger");
      $("#smallguns-button").addClass("btn-success");
      $("#smallguns-button").text("Nalezeno");
      $(".smallguns-unsearch").text("Nalezeno");
      $(".smallguns-unsearch").css('color', 'green');
      $(".smallguns-checkbox").prop( "checked", true );
      $(".smallguns-li").css( "text-decoration", 'line-through' );
      $(".smallguns-li").css( 'color', 'gray' );
      $("#id12-bobblehead").hide(); 
      $(".smallguns-booblehead-description").fadeOut(); 
    }
  });
  //smallguns funciton end👆
  
  // bigguns funciton start👇
  $(function(){
    $(".bigguns-checkbox").attr("disabled", true);
    $("#bigguns-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead9','bigguns-find')
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".bigguns-unsearch").text("Nalezeno");
        $(".bigguns-unsearch").css('color', 'green');
        $(".bigguns-checkbox").prop( "checked", true );
        $(".bigguns-li").css( "text-decoration", 'line-through' );
        $(".bigguns-li").css( 'color', 'gray' );
        $("#id13-bobblehead").hide(); 
        $(".bigguns-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead9','bigguns-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".bigguns-unsearch").text("Nenalezeno");
        $(".bigguns-unsearch").css('color', 'red');
        $(".bigguns-checkbox" ).prop( "checked", false );
        $(".bigguns-li").css( "text-decoration", 'none' );
        $(".bigguns-li").css( 'color', 'black' );
        $("#id13-bobblehead").show();
      }
    });
    if (localStorage.getItem('bobblehead9') == 'bigguns-find') {
      $("#bigguns-button").removeClass("btn-danger");
      $("#bigguns-button").addClass("btn-success");
      $("#bigguns-button").text("Nalezeno");
      $(".bigguns-unsearch").text("Nalezeno");
      $(".bigguns-unsearch").css('color', 'green');
      $(".bigguns-checkbox").prop( "checked", true );
      $(".bigguns-li").css( "text-decoration", 'line-through' );
      $(".bigguns-li").css( 'color', 'gray' );
      $("#id13-bobblehead").hide(); 
      $(".bigguns-booblehead-description").fadeOut(); 
    }
  });
  //bigguns funciton end👆
  
  // medicine funciton start👇
  $(function(){
    $(".medicine-checkbox").attr("disabled", true);
    $("#medicine-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead10','medicine-find')
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".medicine-unsearch").text("Nalezeno");
        $(".medicine-unsearch").css('color', 'green');
        $(".medicine-checkbox").prop( "checked", true );
        $(".medicine-li").css( "text-decoration", 'line-through' );
        $(".medicine-li").css( 'color', 'gray' );
        $("#id14-bobblehead").hide(); 
        $(".medicine-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead10','medicine-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".medicine-unsearch").text("Nenalezeno");
        $(".medicine-unsearch").css('color', 'red');
        $(".medicine-checkbox" ).prop( "checked", false );
        $(".medicine-li").css( "text-decoration", 'none' );
        $(".medicine-li").css( 'color', 'black' );
        $("#id14-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead10') == 'medicine-find') {
      $("#medicine-button").removeClass("btn-danger");
      $("#medicine-button").addClass("btn-success");
      $("#medicine-button").text("Nalezeno");
      $(".medicine-unsearch").text("Nalezeno");
      $(".medicine-unsearch").css('color', 'green');
      $(".medicine-checkbox").prop( "checked", true );
      $(".medicine-li").css( "text-decoration", 'line-through' );
      $(".medicine-li").css( 'color', 'gray' );
      $("#id14-bobblehead").hide(); 
      $(".medicine-booblehead-description").fadeOut(); 
    }
  });
  //medicine funciton end👆
  
  
  // intelligence funciton start👇
  $(function(){
    $(".intelligence-checkbox").attr("disabled", true);
    $("#intelligence-button").click(function(){
      localStorage.setItem('bobblehead11','intelligence-find')
      if($(this).hasClass("btn-danger")){
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".intelligence-unsearch").text("Nalezeno");
        $(".intelligence-unsearch").css('color', 'green');
        $(".intelligence-checkbox").prop( "checked", true );
        $(".intelligence-li").css( "text-decoration", 'line-through' );
        $(".intelligence-li").css( 'color', 'gray' );
        $("#id15-bobblehead").hide(); 
        $(".intelligence-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead11','intelligence-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".intelligence-unsearch").text("Nenalezeno");
        $(".intelligence-unsearch").css('color', 'red');
        $(".intelligence-checkbox" ).prop( "checked", false );
        $(".intelligence-li").css( "text-decoration", 'none' );
        $(".intelligence-li").css( 'color', 'black' );
        $("#id15-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead11') == 'intelligence-find') {
      $("#intelligence-button").removeClass("btn-danger");
      $("#intelligence-button").addClass("btn-success");
      $("#intelligence-button").text("Nalezeno");
      $(".intelligence-unsearch").text("Nalezeno");
      $(".intelligence-unsearch").css('color', 'green');
      $(".intelligence-checkbox").prop( "checked", true );
      $(".intelligence-li").css( "text-decoration", 'line-through' );
      $(".intelligence-li").css( 'color', 'gray' );
      $("#id15-bobblehead").hide(); 
      $(".intelligence-booblehead-description").fadeOut(); 
    }
  });
  //intelligence funciton end👆
  
  
  // meele funciton start👇
  $(function(){
    $(".meele-checkbox").attr("disabled", true);
    $("#meele-button").click(function(){
      localStorage.setItem('bobblehead12','meele-find')
      if($(this).hasClass("btn-danger")){
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".meele-unsearch").text("Nalezeno");
        $(".meele-unsearch").css('color', 'green');
        $(".meele-checkbox").prop( "checked", true );
        $(".meele-li").css( "text-decoration", 'line-through' );
        $(".meele-li").css( 'color', 'gray' );
        $("#id3-bobblehead").hide(); 
        $(".meele-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead12','meele-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".meele-unsearch").text("Nenalezeno");
        $(".meele-unsearch").css('color', 'red');
        $(".meele-checkbox" ).prop( "checked", false );
        $(".meele-li").css( "text-decoration", 'none' );
        $(".meele-li").css( 'color', 'black' );
        $("#id3-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead12') == 'meele-find') {
      $("#meele-button").removeClass("btn-danger");
      $("#meele-button").addClass("btn-success");
      $("#meele-button").text("Nalezeno");
      $(".meele-unsearch").text("Nalezeno");
      $(".meele-unsearch").css('color', 'green');
      $(".meele-checkbox").prop( "checked", true );
      $(".meele-li").css( "text-decoration", 'line-through' );
      $(".meele-li").css( 'color', 'gray' );
      $("#id3-bobblehead").hide(); 
      $(".meele-booblehead-description").fadeOut(); 
    }
  });
  //meele funciton end👆
  
  
  // lock funciton start👇
  $(function(){
    $(".lock-checkbox").attr("disabled", true);
    $("#lock-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead13','lock-find')
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".lock-unsearch").text("Nalezeno");
        $(".lock-unsearch").css('color', 'green');
        $(".lock-checkbox").prop( "checked", true );
        $(".lock-li").css( "text-decoration", 'line-through' );
        $(".lock-li").css( 'color', 'gray' );
        $("#id11-bobblehead").hide(); 
        $(".lock-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead13','lock-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".lock-unsearch").text("Nenalezeno");
        $(".lock-unsearch").css('color', 'red');
        $(".lock-checkbox" ).prop( "checked", false );
        $(".lock-li").css( "text-decoration", 'none' );
        $(".lock-li").css( 'color', 'black' );
        $("#id11-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead13') == 'lock-find') {
      $("#lock-button").removeClass("btn-danger");
      $("#lock-button").addClass("btn-success");
      $("#lock-button").text("Nalezeno");
      $(".lock-unsearch").text("Nalezeno");
      $(".lock-unsearch").css('color', 'green');
      $(".lock-checkbox").prop( "checked", true );
      $(".lock-li").css( "text-decoration", 'line-through' );
      $(".lock-li").css( 'color', 'gray' );
      $("#id11-bobblehead").hide(); 
      $(".lock-booblehead-description").fadeOut(); 
    }
  });
  //lock funciton end👆
  
  
  // barter funciton start👇
  $(function(){
    $(".barter-checkbox").attr("disabled", true);
    $("#barter-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead14','barter-find')
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".barter-unsearch").text("Nalezeno");
        $(".barter-unsearch").css('color', 'green');
        $(".barter-checkbox").prop( "checked", true );
        $(".barter-li").css( "text-decoration", 'line-through' );
        $(".barter-li").css( 'color', 'gray' );
        $("#id6-bobblehead").hide(); 
        $(".barter-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead14','barter-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".barter-unsearch").text("Nenalezeno");
        $(".barter-unsearch").css('color', 'red');
        $(".barter-checkbox" ).prop( "checked", false );
        $(".barter-li").css( "text-decoration", 'none' );
        $(".barter-li").css( 'color', 'black' );
        $("#id6-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead14') == 'barter-find') {
      $("#barter-button").removeClass("btn-danger");
      $("#barter-button").addClass("btn-success");
      $("#barter-button").text("Nalezeno");
      $(".barter-unsearch").text("Nalezeno");
      $(".barter-unsearch").css('color', 'green');
      $(".barter-checkbox").prop( "checked", true );
      $(".barter-li").css( "text-decoration", 'line-through' );
      $(".barter-li").css( 'color', 'gray' );
      $("#id6-bobblehead").hide(); 
      $(".barter-booblehead-description").fadeOut(); 
    }
  });
  //barter funciton end👆
  
  
  // sneak funciton start👇
  $(function(){
    $(".sneak-checkbox").attr("disabled", true);
    $("#sneak-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead15','sneak-find')
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".sneak-unsearch").text("Nalezeno");
        $(".sneak-unsearch").css('color', 'green');
        $(".sneak-checkbox").prop( "checked", true );
        $(".sneak-li").css( "text-decoration", 'line-through' );
        $(".sneak-li").css( 'color', 'gray' );
        $("#id5-bobblehead").hide(); 
        $(".sneak-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead15','sneak-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".sneak-unsearch").text("Nenalezeno");
        $(".sneak-unsearch").css('color', 'red');
        $(".sneak-checkbox" ).prop( "checked", false );
        $(".sneak-li").css( "text-decoration", 'none' );
        $(".sneak-li").css( 'color', 'black' );
        $("#id5-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead15') == 'sneak-find') {
      $("#sneak-button").removeClass("btn-danger");
      $("#sneak-button").addClass("btn-success");
      $("#sneak-button").text("Nalezeno");
      $(".sneak-unsearch").text("Nalezeno");
      $(".sneak-unsearch").css('color', 'green');
      $(".sneak-checkbox").prop( "checked", true );
      $(".sneak-li").css( "text-decoration", 'line-through' );
      $(".sneak-li").css( 'color', 'gray' );
      $("#id5-bobblehead").hide(); 
      $(".sneak-booblehead-description").fadeOut(); 
    }
  });
  //sneak funciton end👆
  
  
  // science funciton start👇
  $(function(){
    $(".science-checkbox").attr("disabled", true);
    $("#science-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead16','science-find')
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".science-unsearch").text("Nalezeno");
        $(".science-unsearch").css('color', 'green');
        $(".science-checkbox").prop( "checked", true );
        $(".science-li").css( "text-decoration", 'line-through' );
        $(".science-li").css( 'color', 'gray' );
        $("#id22-bobblehead").hide(); 
        $(".science-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead16','science-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".science-unsearch").text("Nenalezeno");
        $(".science-unsearch").css('color', 'red');
        $(".science-checkbox" ).prop( "checked", false );
        $(".science-li").css( "text-decoration", 'none' );
        $(".science-li").css( 'color', 'black' );
        $("#id22-bobblehead").show();
      }
    });
    if (localStorage.getItem('bobblehead16') == 'science-find') {
      $("#science-button").removeClass("btn-danger");
      $("#science-button").addClass("btn-success");
      $("#science-button").text("Nalezeno");
      $(".science-unsearch").text("Nalezeno");
      $(".science-unsearch").css('color', 'green');
      $(".science-checkbox").prop( "checked", true );
      $(".science-li").css( "text-decoration", 'line-through' );
      $(".science-li").css( 'color', 'gray' );
      $("#id22-bobblehead").hide(); 
      $(".science-booblehead-description").fadeOut(); 
    }
  });
  //science funciton end👆
  
  
  // speech funciton start👇
  $(function(){
    $(".speech-checkbox").attr("disabled", true);
    $("#speech-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead17','speech-find')
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".speech-unsearch").text("Nalezeno");
        $(".speech-unsearch").css('color', 'green');
        $(".speech-checkbox").prop( "checked", true );
        $(".speech-li").css( "text-decoration", 'line-through' );
        $(".speech-li").css( 'color', 'gray' );
        $("#id9-bobblehead").hide(); 
        $(".speech-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead17','speech-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".speech-unsearch").text("Nenalezeno");
        $(".speech-unsearch").css('color', 'red');
        $(".speech-checkbox" ).prop( "checked", false );
        $(".speech-li").css( "text-decoration", 'none' );
        $(".speech-li").css( 'color', 'black' );
        $("#id9-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead17') == 'speech-find') {
      $("#speech-button").removeClass("btn-danger");
      $("#speech-button").addClass("btn-success");
      $("#speech-button").text("Nalezeno");
      $(".speech-unsearch").text("Nalezeno");
      $(".speech-unsearch").css('color', 'green');
      $(".speech-checkbox").prop( "checked", true );
      $(".speech-li").css( "text-decoration", 'line-through' );
      $(".speech-li").css( 'color', 'gray' );
      $("#id9-bobblehead").hide(); 
      $(".speech-booblehead-description").fadeOut(); 
    }
  });
  //speech funciton end👆
  
  
  // strength funciton start👇
  $(function(){
    $(".strength-checkbox").attr("disabled", true);
    $("#strength-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead18','strength-find')
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".strength-unsearch").text("Nalezeno");
        $(".strength-unsearch").css('color', 'green');
        $(".strength-checkbox").prop( "checked", true );
        $(".strength-li").css( "text-decoration", 'line-through' );
        $(".strength-li").css( 'color', 'gray' );
        $("#id8-bobblehead").hide(); 
        $(".strength-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead18','strength-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".strength-unsearch").text("Nenalezeno");
        $(".strength-unsearch").css('color', 'red');
        $(".strength-checkbox" ).prop( "checked", false );
        $(".strength-li").css( "text-decoration", 'none' );
        $(".strength-li").css( 'color', 'black' );
        $("#id8-bobblehead").show();
      }
    });
    if (localStorage.getItem('bobblehead18') == 'strength-find') {
      $("#strength-button").removeClass("btn-danger");
      $("#strength-button").addClass("btn-success");
      $("#strength-button").text("Nalezeno");
      $(".strength-unsearch").text("Nalezeno");
      $(".strength-unsearch").css('color', 'green');
      $(".strength-checkbox").prop( "checked", true );
      $(".strength-li").css( "text-decoration", 'line-through' );
      $(".strength-li").css( 'color', 'gray' );
      $("#id8-bobblehead").hide(); 
      $(".strength-booblehead-description").fadeOut(); 
    }
  });
  //strength funciton end👆
  
  // charisma funciton start👇
  $(function(){
    $(".charisma-checkbox").attr("disabled", true);
    $("#charisma-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead19','charisma-find')
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".charisma-unsearch").text("Nalezeno");
        $(".charisma-unsearch").css('color', 'green');
        $(".charisma-checkbox").prop( "checked", true );
        $(".charisma-li").css( "text-decoration", 'line-through' );
        $(".charisma-li").css( 'color', 'gray' );
        $("#id10-bobblehead").hide(); 
        $(".charisma-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead19','charisma-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".charisma-unsearch").text("Nenalezeno");
        $(".charisma-unsearch").css('color', 'red');
        $(".charisma-checkbox" ).prop( "checked", false );
        $(".charisma-li").css( "text-decoration", 'none' );
        $(".charisma-li").css( 'color', 'black' );
        $("#id10-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead19') == 'charisma-find') {
      $("#charisma-button").removeClass("btn-danger");
      $("#charisma-button").addClass("btn-success");
      $("#charisma-button").text("Nalezeno");
      $(".charisma-unsearch").text("Nalezeno");
      $(".charisma-unsearch").css('color', 'green');
      $(".charisma-checkbox").prop( "checked", true );
      $(".charisma-li").css( "text-decoration", 'line-through' );
      $(".charisma-li").css( 'color', 'gray' );
      $("#id10-bobblehead").hide(); 
      $(".charisma-booblehead-description").fadeOut(); 
    }
  });
  //charisma funciton end👆
  
  // energyweapon funciton start👇
  $(function(){
    $(".energyweapon-checkbox").attr("disabled", true);
    $("#energyweapon-button").click(function(){
      if($(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead20','energyweapon-find')
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-success");
        $(this).text("Nalezeno");
        $(".energyweapon-unsearch").text("Nalezeno");
        $(".energyweapon-unsearch").css('color', 'green');
        $(".energyweapon-checkbox").prop( "checked", true );
        $(".energyweapon-li").css( "text-decoration", 'line-through' );
        $(".energyweapon-li").css( 'color', 'gray' );
        $("#id19-bobblehead").hide(); 
        $(".energyweapon-booblehead-description").fadeOut(3000); 
      }
      else if (!$(this).hasClass("btn-danger")){
        localStorage.setItem('bobblehead20','energyweapon-unfind')
        $(this).removeClass("btn-success")
        $(this).addClass("btn-danger");
        $(this).text("Nenalezeno");
        $(".energyweapon-unsearch").text("Nenalezeno");
        $(".energyweapon-unsearch").css('color', 'red');
        $(".energyweapon-checkbox" ).prop( "checked", false );
        $(".energyweapon-li").css( "text-decoration", 'none' );
        $(".energyweapon-li").css( 'color', 'black' );
        $("#id19-bobblehead").show(); 
      }
    });
    if (localStorage.getItem('bobblehead20') == 'energyweapon-find') {
      $("#energyweapon-button").removeClass("btn-danger");
      $("#energyweapon-button").addClass("btn-success");
      $("#energyweapon-button").text("Nalezeno");
      $(".energyweapon-unsearch").text("Nalezeno");
      $(".energyweapon-unsearch").css('color', 'green');
      $(".energyweapon-checkbox").prop( "checked", true );
      $(".energyweapon-li").css( "text-decoration", 'line-through' );
      $(".energyweapon-li").css( 'color', 'gray' );
      $("#id19-bobblehead").hide(); 
      $(".energyweapon-booblehead-description").fadeOut(); 
    }
  });
  //energyweapon funciton end👆


  $(document).ready(function(){
    $(".animated-text").on({
        mouseenter: function(){
            $(this).css("color", "red");
        }
    });    
});


