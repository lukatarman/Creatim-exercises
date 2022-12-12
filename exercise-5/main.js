// 5. Napiši skripto, ki pravilno izpiše "mousemove" event za vsakega izmed treh gnezdenih divov:

// 	<div id="element1">
// 		<div id="element2">
// 			<div id="element3">
// 			</div>
// 		</div>
// 	</div>

const firstElement = document.getElementById("element1");
const secondElement = document.getElementById("element2");
const thirdElement = document.getElementById("element3");
const elementLocation = document.getElementById("element-location");
const coordinates = document.getElementById("coordinates");

function addSpecificEventListener(element, id, text) {
  element.addEventListener("mousemove", (e) => {
    if (e.target.id === id) {
      elementLocation.innerText = text;
      coordinates.innerText = `X: ${e.clientX}, Y:${e.clientY}`;
    }
  });
}

addSpecificEventListener(firstElement, "element1", "Element 1");
addSpecificEventListener(secondElement, "element2", "Element 2");
addSpecificEventListener(thirdElement, "element3", "Element 3");
