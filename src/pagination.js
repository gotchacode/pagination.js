
/* jshint indent:2 */
(function($) {
  $.fn.paginate = function(options) {

    var settings = $.extend({
      'anchor': $('body'), //for body size
      'onrequest': function() {}, // for the request phase
      'onload': function() {}, // what to do when the response in there.
      'margin': 1,
      'load_more': true, //controls the pagination and stops if there are no more pages to load
    }, options);

    return $.each(this, function(i, el) {
      var onload = $.proxy(settings.onload, el);
      var onrequest = $.proxy(settings.onrequest, el);
      var load_more = settings.load_more;

      var scroll_handler = function() {
        var margin = 0;
        if (settings.anchor.height() - $(window).height() - $(window).scrollTop() <= settings.margin) {
          $('.up-container').show();
          $(window).unbind('scroll.pagination');
          if (load_more()){ // checks for the condition if the more pages should be loaded.
            load_page();
          }
        }
      };

      $(window).bind('scroll.pagination', scroll_handler); // bind to the event

      var load_page = function() {
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
            $(window).bind('scroll.pagination', scroll_handler);
          }
        });
      };
    });
  };
})(jQuery);
