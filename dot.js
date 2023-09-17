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
<script>
        // Prevent zooming via pinch gesture on touch devices
        document.addEventListener('touchmove', function(event) {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        }, { passive: false });

        // Prevent zooming via Ctrl + Mousewheel on desktop browsers
        window.addEventListener('wheel', function(event) {
            if (event.ctrlKey) {
                event.preventDefault();
            }
        });
    </script>
