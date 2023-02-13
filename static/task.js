
var atest = document.getElementById("ajax-test");
var spinner = document.getElementById("spinner");
var interval = setInterval(function() {
  $.ajax({
    url: "/test",
    type: 'GET',
    success: function(response) {
      // atest.innerHTML += `<p>${response}</p>`;
      if (response['status'] === 0){
        spinner.style.opacity = 0;
        clearInterval(interval);
      }
      atest.innerText = response['content'];

    },
    error: function(xhr) {
      alert("XHR error");
    }
  });
}, 2000);