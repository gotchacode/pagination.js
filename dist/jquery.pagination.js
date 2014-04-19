/*! Jquery Pagination plugin - v0.1.0 - 2014-04-19
* https://github.com/vinitkumar/pagination.js
* Copyright (c) 2014 vinit Kumar; Licensed MIT */
(function($) {

  $.fn.paginate = function(options) {

    var settings = $.extend({
      'anchor': $('body'), //for body size
      'onrequest': function() {}, // for the request phase
      'onload': function() {}, // what to do when the response in there.
      'margin': 1,
      'loadMore': true, //controls the pagination and stops if there are no more pages to load
    }, options);

    return $.each(this, function(i, el) {
      var onload = $.proxy(settings.onload, el);
      var onrequest = $.proxy(settings.onrequest, el);
      var loadMore = settings.loadMore;

      var scrollHandler = function() {
        //var margin = 0;
        if (settings.anchor.height() - $(window).height() - $(window).scrollTop() <= settings.margin) {
          $('.up-container').show();
          $(window).unbind('scroll.pagination');
          if (loadMore()){ // checks for the condition if the more pages should be loaded.
            loadPage();
          }
        }
      };

      $(window).bind('scroll.pagination', scrollHandler); // bind to the event

      var loadPage = function() {
        onrequest();
        $.ajax({
          'url': options.url($(el)),
          'success': function(data) {
            if ($.trim(data) === '') {
              onload();
              return;
            }
            $(el).append(data);
            onload();
            $(window).bind('scroll.pagination', scrollHandler);
          }
        });
      };
    });
  };

}(jQuery));
