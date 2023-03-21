
##fetch posts
<script type="text/javascript"> 
fetch("list-items.html") 
.then(stream => stream.text()) 
.then(text => document.getElementById("container").innerHTML = text); 
</script> 
<div id="container"></div>






##fetch top 10 posts
<!-- index.html -->
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>Top 10 Posts</h1>
    <div id="posts" class="row"></div>
  </div>
  <script>
    // Fetch posts/list.html using AJAX
    $.get("posts/list.html", function(data) {
      // Parse the HTML string into a jQuery object
      var $list = $(data);
      // Find all the list items
      var $items = $list.find("li");
      // Loop through the first 10 items
      for (var i = 0; i < 10; i++) {
        // Get the item text and link
        var text = $items.eq(i).text();
        var link = $items.eq(i).find("a").attr("href");
        // Create a card element with Bootstrap classes
        var $card = $("<div class='card col-md-4'>");
        var $cardBody = $("<div class='card-body'>");
        var $cardTitle = $("<h5 class='card-title'>").text(text);
        var $cardLink = $("<a class='btn btn-primary'>").attr("href", link).text("Read More");
        // Append the card elements together
        $cardBody.append($cardTitle).append($cardLink);
        $card.append($cardBody);
        // Append the card to the posts container
        $("#posts").append($card);
      }
    });
  </script>
</body>
</html>




<!-- posts/list.html -->
<html>
<head></head>
<body>
  <ul>
    <li><a href="post1.html">Post 1</a></li>
    <li><a href="post2.html">Post 2</a></li>
    <li><a href="post3.html">Post 3</a></li>
    <!-- more list items -->
  </ul>  
</body>  
</html>


## same as above with no bootstrap

<!-- index.html -->
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <div class="container">
    <h1>Top 10 Posts</h1>
    <ul id="posts"></ul>
  </div>
  <script>
    // Fetch posts/list.html using AJAX
    $.get("posts/list.html", function(data) {
      // Parse the HTML string into a jQuery object
      var $list = $(data);
      // Find all the list items
      var $items = $list.find("li");
      // Loop through the first 10 items
      for (var i = 0; i < 10; i++) {
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
  </script>
</body>
</html>

<!-- posts/list.html -->
<html>
<head></head>
<body>
  <ul>
    <li><a href="post1.html">Post 1</a></li>
    <li><a href="post2.html">Post 2</a></li>
    <li><a href="post3.html">Post 3</a></li>
    <!-- more list items -->
  </ul>  
</body>  
</html>
