const animationFadeIn = 200;

$(document).ready(async function() {
    function bobbingAnimation() {
        $("#title-text").animate({ top: "-=10px" }, 1000, "swing")
                              .animate({ top: "+=10px" }, 1000, "swing", bobbingAnimation);  // Move down
    }
    $("#title-text").animate({ top: "+=5px" }, 500, "swing")
    bobbingAnimation();
});

setTimeout(() => {
    //$(".icon").css("display", "inline-block").css("border", "1px solid black").css("border-radius", "10px");
    display(1)
}, 500);

$('#github-icon').on('click', function() {
    window.open('https://github.com/ThePillowCat/', '_blank');
});

function display(index) {
    if (index < 22) {
        $(`#i${index}`).css("display", "inline-block").animate({opacity: 1}, animationFadeIn);
        setTimeout(() => {display(index+1)}, animationFadeIn);
    }
}