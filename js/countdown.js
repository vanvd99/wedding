var countDownDate = new Date("Jan 1, 2023 11:00:00").getTime();
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days =
    Math.floor(distance / (1000 * 60 * 60 * 24)) < 10
      ? "0" + Math.floor(distance / (1000 * 60 * 60 * 24))
      : Math.floor(distance / (1000 * 60 * 60 * 24));

  var hours =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10
      ? "0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes =
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) < 10
      ? "0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var seconds =
    Math.floor((distance % (1000 * 60)) / 1000) < 10
      ? "0" + Math.floor((distance % (1000 * 60)) / 1000)
      : Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + " giây ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "HAPPY WEDDING";
  }
}, 1000);
