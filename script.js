function navPage($book, mod) {
  var newPage = Number($book.attr("data-actual-page")) + mod;
  var contents = $book.find(".book__content").length
  
  if (newPage <= 0 || newPage > contents) return;
  
  $book.attr("data-actual-page", newPage)
  $book.find(".book__content.--active").removeClass("--active")
  $book.find(".book__content-container .book__content:nth-child(" +  newPage + ")").addClass("--active")
  $book.find(".book__page-indicator").text("Página " + newPage + " de " + contents);
}

$(".book__prev").on("click", function(event) {
  navPage($(event.target.closest(".book")), -1)
})

$(".book__next").on("click", function(event) {
  navPage($(event.target.closest(".book")), 1)
})
