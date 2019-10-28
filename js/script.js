$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
function pig(word) {
    first_let = word.charAt(0);
    all_other_let = word.replace(first_let, '');
    return all_other_let;
}

$("button").click(function() {
    let message = $("input").val();
    var word = pig(message);
    $("body").append(word);
});

//function pig(str)

});