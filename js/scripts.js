$(document).ready(function () {
  $("#job-search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".jobs-card > div  ").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
$(document).ready(function () {
  $("#cv").click(function (e) {
    e.preventDefault();
    window.location.href = "../shatha adel ali .pdf";
  });
});
