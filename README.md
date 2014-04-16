# Jquery Pagination plugin

jQuery pagination plugin that sucks less.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/vinitkumar/pagination.js/master/dist/pagination.min.js
[max]: https://raw.github.com/vinitkumar/pagination.js/master/dist/pagination.js

In your web page:

Here `{{ page_obj.number }}` is being inserted from a Django template. You can think 
of similar ways to use the plugin when coupled with a RESTful backend.


```html
<script src="jquery.js"></script>
<script src="dist/pagination.min.js"></script>
<script>
$(function() {
  var i = {{ page_obj.number }}+1;
  var total_pages = {{ page_obj.paginator.num_pages }};
  $('.infinite-scroll').paginate({
    url: function(el) {
      return '?page=' + i;
    },
    onrequest: function() {
        if (i < total_pages){
            $(this).append('<div class="loading"></div>');
        };
    },
    onload: function() {
      i = i + 1; //increment till we have the the last page
available
      $('div.loading').remove();
    },
    load_more: function() {
        if (i > total_pages) {
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

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
