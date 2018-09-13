$("li").on("click", function() {
  var self = $(this);
  $(".active").removeClass("active");
  self.addClass("active");
  self.closest("ul").attr("data-mouse", self.data("mouse") + " mouse");
  $(".mouse")
    .removeAttr("class")
    .addClass("mouse " + self.data("mouse"));
});
