$(document). bind("contextmenu",function(e){ return false; });

$(document).ready(function () {
  var ambit = $(document);


  ambit.on('copy paste cut', function (e) {
    e.preventDefault();
    return false;
  });
});

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
});
