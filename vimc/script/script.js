// cheking the connection of the js file to the whole website
//alert("hellow world");


// preloader
document.body.onload = function() {

    setTimeout(function() {
        var preloader = document.getElementById("preloader");
        if (!preloader.classList.contains("done")) {

            preloader.classList.add("done");


        }
    }, 2000);
    setTimeout(function() {

        var wrapper = document.getElementById("wrapper");
        if (!wrapper.classList.contains("done")) {

            wrapper.classList.add('done');

        }
    }, 2200);


    setTimeout(function() {

        // slight appearence of the content 
        var $text = $(".container");
        $text.hide();
        $text.slideDown(1000);

    }, 2200);

}