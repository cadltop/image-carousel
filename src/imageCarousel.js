export default function (imgCollection = [], previousTrigger, nextTrigger) {
  let index = 0;

  const container = document.querySelector("div#container");
  const dotsContainer = document.createElement("div");
  dotsContainer.id = "dots-container";
  container.append(dotsContainer);

  previousTrigger.onclick = previous;
  nextTrigger.onclick = next;

  function showImage(position = index) {
    imgCollection[position].style.display = "inline";
    for (let i = 0; i < imgCollection.length; i++) {
      if (i !== position) imgCollection[i].style.display = "none";
    }
  }
  function fillDot(position = index) {
    const dots = dotsContainer.children;
    dots[position].style.backgroundColor = "black";
    for (let i = 0; i < dots.length; i++) {
      if (dots[i] !== dots[position]) dots[i].style.backgroundColor = "white";
    }
  }

  function previous() {
    if (index > 0) {
      index -= 1;
    } else {
      index = imgCollection.length - 1;
    }
    showImage(index);
    fillDot(index);
  }
  function next() {
    if (index < imgCollection.length - 1) {
      index += 1;
    } else {
      index = 0;
    }
    showImage(index);
    fillDot(index);
  }

  function makeDots() {
    for (let i = 0; i < imgCollection.length; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      dotsContainer.append(dot);
      dot.onclick = function () {
        showImage(i);
        fillDot(i);
      };
    }
  }
  return { showImage, makeDots, fillDot };
}
