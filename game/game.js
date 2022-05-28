var text = document.getElementById("countdown");
var end;
var now = Date.now;
const duration = 60000; //60s

function go() {
  end = now() + duration;
  window.requestAnimationFrame(displayTime);
}

function displayTime() {
  var c = end - now();
  if (c > 0) {
    window.requestAnimationFrame(displayTime);
    text.textContent = msToTime(c);
  } else {
    window.location.href = "../start/start.html";
    chrome.action.setPopup({ popup: "../start/start.html" });
  }
}

function msToTime(s) {
  function pad(n, z) {
    z = z || 2;
    return ("00" + n).slice(-z);
  }

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;

  return pad(secs) + "." + pad(ms, 3);
}

console.log(msToTime(55018));

go();
