/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//low value increments to select 2 rows each and high is 2
//par is initialized to params and used in other methods for radius calculating,etc
//getResult() method called from validate(), passing params as location,nppl,bget
//radius =0 

var low=0;
var par;
var radius=0;
var count=0;
function getResult(params){
    
    var xmlhttp=getXmlHttp();
    par=params;
    this.low=0;
    this.radius=0;
    params=params+"&low="+0; // here 'low' is appended to params
  
 //alert(params);
    
    xmlhttp.onreadystatechange=function()
    {
if (xmlhttp.readyState==1){
document.getElementById("output").innerHTML="<img src='./images/45.gif'/>";
}
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {  
             
            if(low==0){   
             // alert(xmlhttp.responseText);
                var text=xmlhttp.responseText;                                                                   
                count = text.split("!!!");  
                //alert(count[1]);
               document.getElementById("output").innerHTML=count[1];
          //alert(count);
            }
            else {
                document.getElementById("output").innerHTML=xmlhttp.responseText;
                document.getElementById("radius").value=radius;
                document.getElementById("radius").select();
            }         }
    }
    xmlhttp.open("GET","result.php?"+params,true);
    xmlhttp.send(null);
}              

    
function loadMore(){
    this.low=low+2;
    var xmlhttp=getXmlHttp();
    // alert(low);
    
    
    var params=par+"&low="+low;
    //alert(params);
    xmlhttp.onreadystatechange=function()
    {
if (xmlhttp.readyState==1 ){
            if(low==2)
                    $("#output").append("<br/><img id='load' src='./images/45.gif'/>");
                else
                    $("#load").show();
                }
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {  
           $("#load").hide();
            //alert(xmlhttp.responseText.length);//checking to disable loadmore if 5 disable
            //alert(xmlhttp.responseText.length);

            if(low>=count[0]){
                // alert(xmlhttp.responseText.length);
                
                document.getElementById("loadmore").value="No more to load";
                document.getElementById("loadmore").disabled="true";
                low=0;
              
            }else{ 
                
                $("div ul").append(xmlhttp.responseText);
            }
            
         }
    }
    xmlhttp.open("GET","result.php?"+params,true);
    xmlhttp.send(null);
       
}



function getByRadius(rad){
    var regrad=/^[1-9]*$/;
    radius=rad;
    this.low=0;
    //alert(radius);
    if(regrad.test(radius)&&radius!=""){
    var xmlhttp=getXmlHttp();
    
    var params=par+"&low="+0+"&radius="+rad;
      
      
    // alert(params);
    xmlhttp.onreadystatechange=function()
    {
if (xmlhttp.readyState==1){
document.getElementById("output").innerHTML="<img src='./images/45.gif'/>";
}
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {  
            //alert("getting...");
                                                             
            // alert(xmlhttp.responseText);
            document.getElementById("output").innerHTML=xmlhttp.responseText;
            document.getElementById("radius").value=radius;
            document.getElementById("radius").select();
        }
    }
    xmlhttp.open("GET","radius.php?"+params,true);
    xmlhttp.send(null);  
}else {
    $("#radius").effect("pulsate", {
            times:2
        }, 90)
}
}

function loadMoreByRadius(){
    var xmlhttp=getXmlHttp();
    this.radius=radius;
    this.low=low+2;
    
    var params=par+"&low="+low+"&radius="+radius;
    // alert(params);
        
    xmlhttp.onreadystatechange=function()
    {
if (xmlhttp.readyState==1 && low==2){
                    $("#output").append("<img id='load' src='./images/45.gif'/>");
                }
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {  
if(low==2)
            $("#load").hide();
            //alert("getting...");
                               
            //document.getElementById("output").innerHTML=xmlhttp1.responseText+($("table:last").html());
                             
            if(xmlhttp.responseText!=="")
                $("div ul").append(xmlhttp.responseText);
       
             //alert(xmlhttp.responseText.length);
            if(xmlhttp.responseText.length==302){
                low=0;
              
                document.getElementById("loadmore").value="No more to load";
                document.getElementById("loadmore").disabled="true";
            }
         }
    }
    xmlhttp.open("GET","radius.php?"+params,true);
    xmlhttp.send(null);
}

function getXmlHttp(){
                
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}


