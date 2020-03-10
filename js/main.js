$(document).ready(function(){
    $.getJSON('data/word.json', function(data){
        $('#word').html(data.word); 
        $('#meaning').html(data.meaning);
    });   
})