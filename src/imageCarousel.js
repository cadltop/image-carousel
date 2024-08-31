export default function (
  container,
  imgCollection,
  previousTrigger,
  nextTrigger,
) {
  let index = 0;

  const dotsContainer = document.createElement("div");
  dotsContainer.id = "dots-container";
  const dots = dotsContainer.children;
  container.append(dotsContainer);

  makeDots();
  showImageAndFillDot();

  previousTrigger.onclick = previous;
  nextTrigger.onclick = next;

  setInterval(next, 5000);

  function showImageAndFillDot(position = index) {
    setElementStyle(imgCollection, "display", position, "inline", "none");
    setElementStyle(dots, "backgroundColor", position, "black", "white");

    function setElementStyle(
      elementList,
      styleRule,
      elementPosition,
      selectedValue,
      siblingsValue,
    ) {
      index = elementPosition;
      elementList[elementPosition].style[styleRule] = selectedValue;
      for (let i = 0; i < elementList.length; i++) {
        if (i !== elementPosition)
          elementList[i].style[styleRule] = siblingsValue;
      }
    }
  }
  function makeDots() {
    for (let i = 0; i < imgCollection.length; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      dotsContainer.append(dot);
      dot.onclick = function () {
        showImageAndFillDot(i);
      };
    }
  }

  function previous() {
    if (index > 0) {
      index -= 1;
    } else {
      index = imgCollection.length - 1;
    }
    showImageAndFillDot(index);
  }
  function next() {
    if (index < imgCollection.length - 1) {
      index += 1;
    } else {
      index = 0;
    }
    showImageAndFillDot(index);
  }
}
