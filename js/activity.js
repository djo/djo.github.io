$(function () {
  var $activities = $('ul.activities'),
      $tagTitle = $('.tag-title'),
      $body = $("html, body");

  $(window).bind('hashchange', toggleTag);
  $(window).trigger('hashchange');

  function toggleTag() {
    var activity = window.location.hash.slice(1);
    if ($.isEmptyObject(activity)) return;

    $activities.find('.activity').hide();
    $activities.find('.activity.' + activity).show();
    $tagTitle.html(' &raquo; ' + activity);
    $body.animate({ scrollTop: 0 });
  };
})
