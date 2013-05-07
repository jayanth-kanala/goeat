/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
	
 var showed = false; //Whether the menu still showed(true) or not(false)...
 
$("li.bakli").live("mouseenter",function() {
    //$(this).css({
    //background : "#A3C8ED"
    //});
    $(this).find("div").attr("id","liover");
	
    $(this).append("<div class='overbutton'><input type='button' value='Map' class='butlook dropshadow cusbut' onclick='overlaymap(this)'/><input class='butlook dropshadow cusbut' type='button' value='Menu' onclick='overlaymenu(this)'/></div>");
		
});
$("li.bakli").live("mouseleave",function() {
    $(this).css({
        background : "-webkit-linear-gradient(top, #f7fbff 0%,#f2f8ff 100%)"
    });
    $(this).find("div").attr("id","liout");
    $(this).find("div.overbutton").remove();
		
});


$(function() {
    /*  $('#activator').live("click",function() {
                $('#overlay').fadeIn('fast', function() {
                    $('#box').animate({
                        'top' : '10px',
                        'height' : '90%'
                    }, 500);
                });
                $('#box').append('<center><div class="mainbar"><input type="button" value="Map"/><input type="button" value="Menu"/></div><!--</div>--><div id="barcontainer" style="width:96%;"><div id="totval" class="midtext" style="color: #1e69de; float: right; font-size:23px;">Total: <span>0</span></div></div><!--End of Total bar (footer)--></center>');
            });*/
    $('#boxclose').click(function() {
        total=0;
        $('#box').animate({
            'top' : '-200px',
            'height' : '1px'
        }, 500, function() {
            $('#overlay').fadeOut('fast');
        });
        $('div.box').find("center").remove();
    });
});


// show map,menu

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var bakeryid;
function showmap(a) {
    if($(a).attr("id") != "active") {
        $(a).parent().find("input").attr("id","");
        $(a).parent().find("input").attr("class","butnoshadow");
        $(a).attr("class","butinshadow");
        $(a).attr("id", "active");
        
        var xmlhttp=getXmlHttp();   
        
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            { 
               $("#omenu").hide();
                $("#map_canvas").show();
                //$('div.mcontainer').html('<div id="map_canvas" style="width: 90%; height: 500px;"></div>');
                //$('#map_canvas').html('<center><div class="mainbar"><input type="button" value="Map" onclick="showmap(this)" id=""/><input type="button" value="Menu" onclick="showmenu(this)" id="active"/></div><hr class="style-two"><div id="map_canvas" style="width: 700px; height: 400px;"></div></center>');    
                var text = xmlhttp.responseText;
                var latlng = text.split(",");
                center = new google.maps.LatLng(parseFloat(latlng[0]), parseFloat(latlng[1]));
                neighborhoods = [
                new google.maps.LatLng(parseFloat(latlng[0]), parseFloat(latlng[1])),
                ];
                initialize();
                                                    
             }
        }
        xmlhttp.open("GET","map.php?id="+bakeryid,true);
        xmlhttp.send(null);
    }
}

function showmenu(a) {
   
    if($(a).attr("id") != "active") {
        $(a).parent().find("input").attr("id","");
        $(a).parent().find("input").attr("class","butnoshadow");
        $(a).attr("class","butinshadow");
        $(a).attr("id", "active");
        var xmlhttp = getXmlHttp();
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {  
                $("#omenu").show();
                $("#map_canvas").hide();
                if(!showed){
                    showed = true;
                    $("#omenu").html(xmlhttp.responseText);
                }
                
                //$('div.mcontainer').html(xmlhttp.responseText);    
            //document.getElementById("menu").innerHTML=xmlhttp.responseText;
             }
        }
        xmlhttp.open("GET","menu.php?id="+bakeryid,true);
        xmlhttp.send(null);	
    }

}
                        
function overlaymenu(a){
    var val = bakeryid = $(a).parent().parent().attr("id");
    $('#overlay').fadeIn('fast', function() {
        $('#box').animate({
            'top' : '10px',
            'height' : '90%'
        }, 200,function() {
            
            
            var xmlhttp = getXmlHttp();
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {  
                    $('#box').append('<center><div class="mainbar"><input class="butnoshadow" type="button" value="Map" onclick="showmap(this)" id=""/><input class="butinshadow" type="button" value="Menu" onclick="showmenu(this)" id="active"/></div><hr class="style-two"><div class="mcontainer"><div id="omenu">'+xmlhttp.responseText+'</div><div id="map_canvas" style="width: 90%; height: 500px;"></div></div></center>');    
                    $("#map_canvas").hide();
                    showed = true;
                //document.getElementById("menu").innerHTML=xmlhttp.responseText;butlook
                 }
            }
            xmlhttp.open("GET","menu.php?id="+val,true);
            xmlhttp.send(null);		
        });
    });
      
}

function overlaymap(a){
    var val = bakeryid = $(a).parent().parent().attr("id");
    $('#overlay').fadeIn('fast', function() {
        $('#box').animate({
            'top' : '10px',
            'height' : '90%'
        }, 200,function() {
            var xmlhttp=getXmlHttp();   
        
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                { 
showed = false;
                    $('#box').append('<center><div class="mainbar"><input class="butinshadow" type="button" value="Map" onclick="showmap(this)" id="active"/><input class="butnoshadow" type="button" value="Menu" onclick="showmenu(this)" id=""/></div><hr class="style-two"><div class="mcontainer"><div id="map_canvas" style="width: 90%; height: 500px;"></div><div id="omenu"></div></div></center>');    
                    $("#omenu").hide();
                    var text = xmlhttp.responseText;
                    var latlng = text.split(",");
                    center = new google.maps.LatLng(parseFloat(latlng[0]), parseFloat(latlng[1]));
                    neighborhoods = [
                    new google.maps.LatLng(parseFloat(latlng[0]), parseFloat(latlng[1])),
                    ];
                    initialize();
                                                    
                 }
            }
            xmlhttp.open("GET","map.php?id="+val,true);
            xmlhttp.send(null);	
        });
    });
      
}

function getMenu(val){
    bakeryid = val;
    $('#overlay').fadeIn('fast', function() {
        $('#box').animate({
            'top' : '10px',
            'height' : '90%'
        }, 500,function() {
            
            
            var xmlhttp = getXmlHttp();
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {  
                    $('#box').append('<center><div class="mainbar"><input class="butnoshadow" type="button" value="Map" onclick="showmap(this)" id=""/><input class="butinshadow" type="button" value="Menu" onclick="showmenu(this)" id="active"/></div><hr class="style-two"><div class="mcontainer"><div id="omenu">'+xmlhttp.responseText+'</div><div id="map_canvas" style="width: 90%; height: 500px;"></div></div></center>');    
                    showed = true;  
                    $("#map_canvas").hide();
                //document.getElementById("menu").innerHTML=xmlhttp.responseText;butlook
                 }
            }
            xmlhttp.open("GET","menu.php?id="+val,true);
            xmlhttp.send(null);		
        });
    });
      
}