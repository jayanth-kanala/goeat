/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(function(){
    var availableTags=[];
                 
    $.getJSON("locations.json", function(jd) {
                     
        $.each(jd,function(i,e){
            availableTags.push(e);
        });
        
        availableTags.sort();
        $( "#al" ).autocomplete({
            autoFocus:true,
            source: availableTags
             });
        
    });
             
         
});
         
         
$(function(){
    var availableTags=[];
    $.getJSON("bake.json", function(jd) {
     
        $.each(jd,function(i,e){
            availableTags.push(e);
        });
        availableTags.sort();
        $( "#search" ).autocomplete({
            autoFocus:true,
            source: availableTags
        });
    });
             
         
});
        

