function init() {

// Here goes all the animations and whatever else I need. This function is a wrapper that will eventually//
// contain all other functions //

const curtain = document.querySelector(".curtain , .curtain_c , .loaderImg, .whiteBar");
const profile = document.querySelector(".author")
const project = document.querySelectorAll(".proIcon")
const content = document.querySelectorAll(".boxed, .identity,.author,.textBox,.smallicon")

// Since this is the first event, this shall go before everything //
const t1 = new TimelineMax();
t1.fromTo(curtain, 0.55, {y:'0%'}, {y:'-100%'}, 1.0)
t1.fromTo(content, 0.55, {top:'-100%'},{top:'20%'}, 1.3)

project.forEach((button,index) => {
    button.onmouseover = function(){
        gsap.fromTo(button, {opacity: 0.5,height:"100px", width:"100px"}, {opacity: 1, height:"150px", width:"150px", duration: 1});
        gsap.fromTo(".container.footerish", {height:"180px"}, {height: "280px", duration: 1});
    }
    button.onmouseout = function(){
        gsap.fromTo(button, {opacity: 1, height:"150px", width:"150px"}, {opacity: 0.5,height:"100px", width:"100px", duration:1});
        gsap.fromTo(".container.footerish", {height:"280px"}, {height: "180px", duration: 1});
    }

})

profile.onmouseover = function(){
    gsap.fromTo(".author", {'filter': 'grayscale(100%)','-moz-filter': 'grayscale(100%)'}, {'filter': 'grayscale(0%)','-moz-filter': 'grayscale(0%)', duration: 1});
}

profile.onmouseout = function(){
    gsap.fromTo(".author", {'filter': 'grayscale(0%)','-moz-filter': 'grayscale(0%)'}, {'filter': 'grayscale(100%)','-moz-filter': 'grayscale(100%)', duration: 1});
}


// Here I want to delete the curtain material after load with JQuery //

setTimeout(function() {
    $('.curtain').remove();
  }, 2000);








}


init();