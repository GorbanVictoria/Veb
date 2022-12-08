var slideIndex = 1;
ShowSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.display += "active";
}



var result;

function check() {

    var question;
    var value1;
    var value2;


    question = 1;
    value1 = 0;
    value2 = 0;


    result = "";
    var choice;
    for (question = 1; question <= 3; question++) {

        var q = document.forms['quiz'].elements['q' + question];

        for (var i = 0; i < q.length; i++) {
            if (q[i].checked) {
                choice = q[i].value;
            }
        }

        if (choice == "value1") {
            value1++;
        }

        if (choice == "value2") {
            value2++;
        }
    }

    if (value2 == 0) {
        // Нет правильных ответов
        result = "You should rewatch some cartoons!";

    }
    else if (value2 == 1) {

        // Один правильный ответ
        result = "You should rewatch some cartoons!";

    }
    else if (value2 == 2) {

        // Два правильных ответа
        result = "You should rewatch some cartoons!";

    }
    else if (value2 == 3) {

        // Три правильных ответа
        result = "You are the real connoisseur";

    }
    else {
        result = "404";
    }
    alert(result);
}

