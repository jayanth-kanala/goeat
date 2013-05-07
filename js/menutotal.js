/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var total = 0,f=true;

$("li.menulist").live("click",function() {
    // ON Mouse Click
    $(this).toggle(
        function(){
            //$("h1").text($(this).find("span").text());
            $("#barcontainer").append('<div class="cusselect" id="a' + $(this).attr("id") + '"><div class="nam"><div class="midtext">' + $(this).text() + '</div></div><input type="text"  id="'+$(this).find("span").text()+'" maxlength=2 class="val" value="1"/></div>');
            if($(this).find("span").attr("id") == "notadded") {
                $(this).find("span").attr("id", "added");
                total = total + parseInt($(this).find("span").text());
                $("#totval").find("span").text(total);
            }
            //;
            //hr color
            $(this).find("hr").css({
                background : "-webkit-linear-gradient(left, rgba(255,255,255,0), rgba(255,255,255,0.75), rgba(255,255,255,0))"
            });
            // ON Mouse Click
            $(this).css("color", "white");
            var gr = "-webkit-linear-gradient(top, #499bea 0%,#207ce5 100%)";
            $(this).css({
                background : gr
            });
            gr = "-moz-linear-gradient(top, #499bea 0%, #207ce5 100%)";
            $(this).css({
                background : gr
            });
            gr = "-o-linear-gradient(top,  #499bea 0%,#207ce5 100%)";
            $(this).css({
                background : gr
            });
            gr = "-ms-linear-gradient(top, #499bea 0%,#207ce5 100%)";
            $(this).css({
                background : gr
            });
            var br = " 0px 0px 3px #000000";
            $(this).css({
                boxShadow : br
            });
        },
        // ON Default
        function() {
            //alert($(divele).find("input").val());	
				
            if($(this).find("span").attr("id") == "added") {
                $(this).find("span").attr("id", "notadded");
                var divele = document.getElementById("a"+$(this).attr("id"));
                total = total - parseInt($(this).find("span").text()) * parseInt($(divele).find("input").val());
                $("#totval").find("span").text(total);
            }
            $("#a" + $(this).attr("id")).remove();
            $(this).find("hr").css({
                background : "-webkit-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0))"
            });
            $(this).css("color", "black");
            var gr = "-webkit-linear-gradient(top, #f7fbff 0%,#f2f8ff 100%)";
            $(this).css({
                background : gr
            });
            gr = "-moz-linear-gradient(top, #f7fbff 0%,#f2f8ff 100%)";
            $(this).css({
                background : gr
            });
            gr = "-o-linear-gradient(top, #f7fbff 0%,#f2f8ff 100%)";
            $(this).css({
                background : gr
            });
            gr = "-ms-linear-gradient(top, #f7fbff 0%,#f2f8ff 100%)";
            $(this).css({
                background : gr
            });
        });
    $(this).trigger('click');
});

var down = up = 0;
$(".val").live('focus',function(){
    up = down = $(this).val();
});
$(".val").live('blur',function(){
    if($(this).val() == ""){
        $(this).val(0);
    }
});

//CALCULATE TOTAL
//on key up calculate total

$(".val").live('keyup',function(){
    if(!f){
    var cost=0;
      up=$(this).val();
     if(up!=down){
     cost= (up-down) * parseInt($(this).attr("id"));
     f=true;
      }
      if(isNaN(cost))
          cost=0;
       total=total+cost;
       $("#totval").find("span").text(total);
    }
  });
 $(".val").live('keydown',function(){
     if(f){
      down=$(this).val();
      f=false;}
  });
 // cost = up * parseInt($(this).attr("id"));
   
       //$("#totval").find("span").text(total);
  
 

// End Customized Members Selection
