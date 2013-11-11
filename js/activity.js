$(function () {
  var activities = $('ul.activities')
  var tagTitle = $('.tag-title')

  var filter = function (activity) {
    $('.activity', activities).hide()
    $('.activity.' + activity, activities).show()
  }

  var setTitle = function (activity) {
    tagTitle.html(activity)
  }

  $(window).bind('hashchange', function () {
    var hash = window.location.hash.slice(1)

    if (!$.isEmptyObject(hash)) {
      filter(hash)
      setTitle(hash)
      $("html, body").animate({ scrollTop: 0 })
    }
  })

  $(window).trigger('hashchange')
})
