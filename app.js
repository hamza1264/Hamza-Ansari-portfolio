
// section 03 start (skills)
var skill = document.getElementsByClassName("skill-card");
for (var i = 0; i < skill.length; i++) {
    skill[i].onmouseover = function () {
        this.style.height = "210px"
        this.style.width = "160px"
        this.style.transition = "0.3s ease-in"

    }
    skill[i].onmouseout = function () {
        this.style.height = "200px"
        this.style.width = "150px"
        this.style.transition = "0.3s ease-out"

    }
}
// section 03  end (skills)

// section 04 start (big project) 
function carRent() {
    window.open("https://hamza1264.github.io/1st-hackathon/", "_blank");
}
function aisha() {
    window.open("https://hamza1264.github.io/4th-assignment-E-COMMERCE-/#bridals", "_blank");
}
function skyPluse() {
    window.open("https://hamza1264.github.io/E-commerce--website-SKY-PLUSE/", "_blank");
}
function jewelry() {
    window.open("https://hamza1264.github.io/4th-assignment--E-COMMERCE--with-js-/", "_blank");
}

var fourCard = document.getElementsByClassName("project-card");
for (var i = 0; i < fourCard.length; i++) {
    fourCard[i].onmouseover = function () {
        this.style.height = "520px"
        this.style.width = "700px"
        this.style.transition = "0.3s ease-in"
        this.style.fontSize = "18px"
    }
    fourCard[i].onmouseout = function () {
        this.style.height = "500px"
        this.style.width = "690px"
        this.style.transition = "0.3s ease-out"
        this.style.fontSize = "16px"
    }
}
// section 04 end (big project)

// section 05 start (cartificate)

function htmlCertificate() {
    window.open("image/html cartificate.jpg", "_blank");
}

function cssCertificate() {
    window.open("image/css cartificate.jpg", "_blank");
}

function javascriptCertificate01() {
    window.open("image/javascript cartificate 01.jpg", "_blank");
}

function javascriptCertificate02() {
    window.open("image/javascript cartificate 02.jpg", "_blank");
}



var certificates = document.getElementsByClassName("certificate-card")
for (var i = 0; i < certificates.length; i++) {
    certificates[i].onmouseover = function () {
        this.style.height = "530px"
        this.style.width = "720px"
        this.style.transition = "0.3s ease-in"
    }
    certificates[i].onmouseout = function () {
        this.style.height = "500px"
        this.style.width = "690px"
        this.style.transition = "0.3s ease-out"
    }
}
// section 05 start (cartificate)





