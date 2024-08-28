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
    //display(1)
}, 500);

// function display(index) {
//     if (index < 22) {
//         $(`#i${index}`).css("display", "inline").animate({opacity: 1}, 1000);
//         setTimeout(display(index+1), 1000);
//     }
// }