#pagination.js

jQuery pagination plugin

It is a simple pagination plugin used in Socialschools to provide
infinite scroll feature. It works perfectly and loads pages until we
have loaded the last page.


## Usage

It is very simple to use, Just bind the pagination the the class you
want to add the features to:

```js
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
```
The above examples uses the page object from the django backend, this could be achieved in any other frameworks easily.



## Installation:

Just use the `pagination.js` file in combination with jQuery.


## Contributors:

Vinit Kumar [@vinitkumar](http://github.com/vinitkumar)



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/vinitkumar/pagination.js/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

