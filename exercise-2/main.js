// 2. Popravi spodnjo kodo, da bo index pravilno izpisan vsako iteracijo z 200ms zamikom:

// 	(function() {
// 		var index,
// 		length = 20;
// 		for (index = 0; index < this.length; index++) {
// 			setTimeout(function() {
// 				console.log(index);
// 			}, 200);
// 		}
// 	})();

(async function () {
  var index;
  length = 20;
  for (index = 0; index < this.length; index++) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 200)
    );
    console.log(index);
  }
})();
