# Jquery Pagination plugin

jQuery pagination plugin that sucks less.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/vinitkumar/pagination.js/master/dist/jquery.pagination.min.js
[max]: https://raw.githubusercontent.com/vinitkumar/pagination.js/master/dist/jquery.pagination.js

In your web page:

Here `{{ page_obj.number }}` is being inserted from a Django template. You can think 
of similar ways to use the plugin when coupled with a RESTful backend.


```html
<script src="jquery.js"></script>
<script src="dist/pagination.min.js"></script>
<script>
$(function() {
  var i = {{ page_obj.number }}+1;
  var totalPages = {{ page_obj.paginator.num_pages }};
  $('.infinite-scroll').paginate({
    url: function(el) {
      return '?page=' + i;
    },
    onrequest: function() {
        if (i < totalPages){
            $(this).append('<div class="loading"></div>');
        };
    },
    onload: function() {
      i = i + 1; //increment till we have the the last page
available
      $('div.loading').remove();
    },
    loadMore: function() {
        if (i > totalPages) {
            return false;
        } else {
            return true;
        }
    }
  });
});
</script>
```

## Documentation
_(Coming soon)_

## Contributors

Pratik Vyas (@pdvyas)
Vinit Kumar (@vinitkumar)

## Release History
_(Nothing yet)_
