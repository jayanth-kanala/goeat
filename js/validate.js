/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
       var reg=/^[a-z. ]*$/i;
function validate(v){
  
    var err="";
  
    
    var params="location="+v.location.value+"&nppl="+v.nppl.value+"&bget="+v.bget.value;
    //var params="location=KPHB&nppl=10&bget=1000";
    //alert(params);
    if(v.location.value==""){
        v.location.style.border = "1px solid red";
                err+="Fill the location";
            }else {v.location.style.border = "1px solid #919194";}
     
     if(!reg.test(v.location.value)){
        v.location.style.border = "1px solid red";
        err+="Illegal chars in Location Field";
    }else {v.location.style.border = "1px solid #919194";}
    
     if(isNaN(v.nppl.value)||v.nppl.value==""){
        v.nppl.style.border = "1px solid red";
        err+="Expected Numeric in 2,3 fields";
    }else{v.nppl.style.border = "1px solid #919194";}
    
    if(isNaN(v.bget.value)||v.bget.value==""){
        v.bget.style.border = "1px solid red";
          err+="Expected Numeric in 2,3 fields";
    }   else {v.bget.style.border = "1px solid #919194";}  
    
     if(v.bget.value/v.nppl.value<=80){
        v.bget.style.border = "1px solid red";
        err+="\nBudget too low!";
    }else {v.bget.style.border = "1px solid #919194";}
     if(v.nppl.value==0)
        err+="Check No.ppl";
    else {v.nppl.style.border = "1px solid #919194";}
               
                
    if(err!=""){
        $("#a").effect("shake", {
            times:2
        }, 90)
       // alert(err);
        
                    
    }  
    else{
         $('html, body').stop().animate({
         scrollTop: $('#output').offset().top
        }, 1000,'easeInOutExpo');
		
        getResult(params);
		
    }
}   
            
      
        
 

