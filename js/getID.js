/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function getID(){
       var id=$("#search").val();
    if(id==""){
        $("#search").css("border","1px solid red");
    }else if(!reg.test(id)){
        $("#search").css("border","1px solid red");
    }else {
        $("#search").css("border","1px solid #919194");
        var xmlhttp = getXmlHttp();
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {  
                document.getElementById("output").innerHTML="";
                if(xmlhttp.responseText != ""){
                    getMenu(xmlhttp.responseText.split("<",1));
                } else{
                    document.getElementById("output").innerHTML="Bakery Not Found";
                }
                
            
             }
        }
    
        xmlhttp.open("GET","getID.php?id="+$("#search").val(),true);
        xmlhttp.send(null);
    }
}