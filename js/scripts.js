console.log("Scripts breh!");

function setlinkClickHandler() {
  $('.nav').click(function(e){
    $('.nav').removeClass('active');
    $(this).addClass('active');
  });
}

function setColor() {

}

$(function() {
  setlinkClickHandler();
});
