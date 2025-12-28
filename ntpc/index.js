// Set the date we're counting down to
// var countDownDate = new Date("May 31, 2020 00:00:01").getTime();

// Update the count down every 1 second
// var x = setInterval(function() {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Output the result in an element with id="demo"
//     document.getElementById("countdown_launch").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

//     // If the count down is over, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("countdown_launch").innerHTML = "EXPIRED";
//     }
// }, 1000);

// Smooth Scroll
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(document).ready(function () {
  $(".vertical-tabs-steps .nav-link, .horizontal-tabs-steps .nav-link").click(
    function () {
      $(this)
        .parent()
        .prevAll()
        .children(
          ".vertical-tabs-steps .nav-link, .horizontal-tabs-steps .nav-link"
        )
        .addClass("checked-steps");

      $(this)
        .parent()
        .nextAll()
        .children(
          ".vertical-tabs-steps .nav-link, .horizontal-tabs-steps .nav-link"
        )
        .removeClass("checked-steps");

      $(this).removeClass("checked-steps");
      $(this).parent().removeClass("complete-step");
      $(this).parent().nextAll().removeClass("complete-step");

      $(
        ".horizontal-tabs-steps .nav-link.checked-steps, .vertical-tabs-steps .nav-link.checked-steps"
      )
        .parent()
        .addClass("complete-step");
    }
  );
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// RANGE SLIDER

// RangeSlider Workaround
// const comission = document.querySelector('#comission input');
// const comissionLabel = document.getElementById('comissionLabel');
// const comissionLabelPrefix = comissionLabel.innerHTML;
// const comissionRange = document.createElement('label');

// comissionRange.id = 'rangeLimits';
// comissionRange.className = 'row';
// comissionRange.innerHTML = `<span class="col-6 text-left px-0">${comission.getAttribute('min')}</span><span class="col-6 text-right px-0">${comission.getAttribute('max')}</span>`;
// document.querySelector('#comission').appendChild(comissionRange);

// comissionLabel.innerHTML = `${comissionLabelPrefix}${comission.value}`;

// comission.addEventListener('input', function() {
//     comissionLabel.innerHTML = `${comissionLabelPrefix}${Number(comission.value)}`;
// }, false);

// HTML PART
// <div class="px-1">
//     <div id="comission" class="col-sm-12 px-0">
//         <label>
//             <p class="text-success">Value: <span id="comissionLabel"></span>/10
//             </p>
//         </label>
//         <input class="custom-range px-0" type="range" min="0" max="10" step="1">
//     </div>
// </div>
