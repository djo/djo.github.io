(function () {
  window.addEventListener('hashchange', toggleTag);
  toggleTag();

  function toggleTag() {
    var activity = window.location.hash.slice(1);
    if (!activity) return;

    toggle('ul.activities .activity', 'none');
    toggle('ul.activities .activity.' + activity, 'block');
    document.querySelector('.tag-title').textContent = '» ' + activity;
    window.scrollTo(0, 0);
  };

  function toggle(selector, display) {
    var items = document.querySelectorAll(selector);
    for (var i = 0; i < items.length; i++)
      items[i].style.display = display;
  }
})();
