
function setlinkClickHandler() {
  $('.nav').click(function(e){
    $('.nav').removeClass('active');
    $(this).addClass('active');
  });
}

function setColor() {

}

$(function() {
  console.log("Irwin Tsay's Portfolio");
  setlinkClickHandler();
});
