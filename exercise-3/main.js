// 3. Popravi spodnjo kodo, da se bo alert izpisal le v IE7;

// 	(function() {
// 		alert("Hello World");
// 	})();

function getIeVersion() {
  var userAgent = window.navigator.userAgent;
  var msieIndex = userAgent.indexOf("MSIE");

  if (msieIndex > 0) {
    var indexOfVersionDot = userAgent.indexOf(".", msieIndex);
    var ieVersion = userAgent.substring(msieIndex + 5, indexOfVersionDot);
    return parseInt(ieVersion);
  }

  return 0;
}

(function () {
  if (getIeVersion() === 7) alert("Hello World");
})();
