var startItem = 3;

$(document).ready(function(){
  $('.carousel_data .carousel_item').each(function(){
    $('#carousel').append($(this).find('.image').html());
  });
  createCarousel();
});

function createCarousel() {
  $('div#carousel').roundabout({
    responsive: true,
    startingChild: window.startItem,
    childSelector: 'img',
    tilt:-4.5,
    minOpacity: 1,
    minScale: .45,
    duration: 1200,
    clickToFocus: true,
    clickToFocusCallback: showCaption
  });
  createCustomButtons(); 
  showCaption();
}

function createCustomButtons(){
  $('.next-item').click(function(){
    hideCaptions();
    $('div#carousel').roundabout('animateToNextChild', showCaption);       
  });

  $('.prev-item').click(function(){
    hideCaptions();
    $('div#carousel').roundabout('animateToPreviousChild', showCaption);       
  });
}

function showCaption(){
  var childInFocus = $('div#carousel').data('roundabout').childInFocus
  var setCaption = $('.carousel_data .carousel_item .caption:eq('+childInFocus+')').html();
  $('#captions').html(setCaption);
  var newHeight = $('#captions').height()+'px';
  $('.caption_container').animate({'height': newHeight}, 250, function(){
    $('#captions').animate({'opacity':1}, 250);
  });
}

function hideCaptions() {
  $('#captions').animate({ 'opacity': 0}, 550);

} 
