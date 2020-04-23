import 'jquery';
import './styles.css';

// user logic

$(document).ready(function() {
  $("form#space").submit(function(event) {
    event.preventDefault();
  });
})