//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
function myFunction() {
  var dots = document.getElementById("dots")
  var moreText = document.getElementById("more")
  var btnText = document.getElementById("myBtn")

  if (dots.style.display === "none") {
    dots.style.display = "inline"
    btnText.innerHTML = "Read more"
    moreText.style.display = "none"
  } else {
    dots.style.display = "none"
    btnText.innerHTML = "Read less"
    moreText.style.display = "inline"
  }
}

////Jquery function for show more/show less button////
$("#show-more-content").hide()

$("#show-more").click(function () {
  $("#show-more-content").show(500)
  $("#show-less").show(500)
  $(this).hide()
})

$("#show-less").click(function () {
  $("#show-more-content").hide(500)
  $("#show-more").show(500)
  $(this).hide()
})

////Jquery function to manipulate show more/show less classes
$(".show-more-content1").hide()

$(".show-more1").click(function () {
  $(".show-more-content1").show(500)
  $(".show-less1").show(500)
  $(this).hide()
})

$(".show-less1").click(function () {
  $(".show-more-content1").hide(500)
  $(".show-more1").show(500)
  $(this).hide()
})

/////adjusted mutatis mutandis from codepen: https://codepen.io/web-design-with-chris/pen/JOXjEg
/* I still need to see how to DRY this function so to avoid show-more-content1,2,3. I should not 
have to repeat basically the same function so many times */
$(".show-more-content2").hide()

$(".show-more2").click(function () {
  $(".show-more-content2").show(500)
  $(".show-less2").show(500)
  $(this).hide()
})

$(".show-less2").click(function () {
  $(".show-more-content2").hide(500)
  $(".show-more2").show(500)
  $(this).hide()
})

////
$(".show-more-content3").hide()

$(".show-more3").click(function () {
  $(".show-more-content3").show(500)
  $(".show-less3").show(500)
  $(this).hide()
})

$(".show-less3").click(function () {
  $(".show-more-content3").hide(500)
  $(".show-more3").show(500)
  $(this).hide()
})

////
