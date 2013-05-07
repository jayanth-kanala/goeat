/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var center;

var neighborhoods;

var markers = [];
//var iterator = 0;

var map;

function initialize() {
    var mapOptions = {
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: center
    };

    map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    drop();
}

function drop() {
    for (var i = 0; i < neighborhoods.length; i++) {
        setTimeout(function() {
            addMarker();
        }, i * 200);
    }
}

function addMarker() {
    markers.push(new google.maps.Marker({
        position: neighborhoods[0],
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    }));
    //iterator++;
}


function getMap(){
    var xmlhttp=getXmlHttp();
    
        
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        { 
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
/*
function getMap(){
    var center = new google.maps.LatLng(17.4422, 78.4246);

  var neighborhoods = [
    new google.maps.LatLng(17.4422, 78.4246),
      ];

  var markers = [];
  var iterator = 0;

  var map;

  function initialize() {
    var mapOptions = {
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: center
    };

    map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
                drop();
     
  }

  function drop() {
    for (var i = 0; i < 1; i++) {
      setTimeout(function() {
        addMarker();
      }, i * 200);
    }
  }

  function addMarker() {
    markers.push(new google.maps.Marker({
      position: neighborhoods[iterator],
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP
    }));
    iterator++;
  }

    var xmlhttp=getXmlHttp();
    
        
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        { 
            initialize();
                 
                                    
         }
    }
    xmlhttp.open("GET","map.php?id="+bakeryid,true);
    xmlhttp.send(null);
}              

  */  