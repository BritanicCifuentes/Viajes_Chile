// Aquí hacemos funcionamiento de nuestro smoot scroll lento para nuestro menu
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
        } 
    });
});
// Aquí hacemos funcionamiento de nuestro typeform
$(function() { 
    var qs,js,q,s,d=document, 
        gi=d.getElementById, 
        ce=d.createElement, 
        gt=d.getElementsByTagName, 
        id="typef_orm", 
        b="https://embed.typeform.com/"; 
        if(!gi.call(d,id)) { js=ce.call(d,"script"); 
        js.id=id; js.src=b+"embed.js"; 
        q=gt.call(d,"script")[0]; 
        q.parentNode.insertBefore(js,q)
    } 
})