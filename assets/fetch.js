 // Fetch posts/list.html using AJAX
 $.get("posts/list.html", function(data) {
  // Parse the HTML string into a jQuery object
  var $list = $(data);
  // Find all the list items
  var $items = $list.find("li");
  // Loop through the first 10 items
  for (var i = 0; i < 5; i++) {
    // Get the item text and link
    var text = $items.eq(i).text();
    var link = $items.eq(i).find("a").attr("href");
    // Create a list item element with the text and link
    var $li = $("<li>");
    var $a = $("<a>").attr("href", link).text(text);
    // Append the link to the list item
    $li.append($a);
    // Append the list item to the posts container
    $("#posts").append($li);
  }
});