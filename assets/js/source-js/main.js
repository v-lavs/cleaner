jQuery(document).ready(function () {
  //Mob menu
  var nav = jQuery('.main-nav-wrap');

  jQuery('.btn-burger').click(function (e) {
    e.preventDefault();
    nav.addClass('open');
  });

  jQuery('.close-main-nav').click(function (e) {
    e.preventDefault();
    nav.removeClass('open');
  });

//  rating
  $('.vote').on ('click', function(){

    $(this).addClass('active');

    var parent = $(this).parent().parent().parent().parent();
    var commentCountElement = parent.find('.commentscount');
    var ratingValueElement = parent.find('.ratingvalue');
    var votedValue = parseInt($(this).attr('data-score'));

    parent.addClass('voted');

    var commentCount = parseInt(commentCountElement.text());

    commentCount = commentCount;
    commentCountElement.text(commentCount + 1);

    var rating = parseFloat(ratingValueElement.text());
    rating = (commentCount * rating + votedValue)/(commentCount + 1);
    ratingValueElement.text(rating.toFixed(2));

    console.log('AJAX запрос примет значение ' + votedValue);
  })
});