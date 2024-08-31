export default function (imgCollection = [], previousTrigger, nextTrigger) {
  let index = 0;

  previousTrigger.onclick = previous;
  nextTrigger.onclick = next;

  function showImage(position = index) {
    imgCollection[position].style.display = "inline";
    for (let i = 0; i < imgCollection.length; i++) {
      if (i !== position) imgCollection[i].style.display = "none";
    }
  }
  function previous() {
    if (index > 0) {
      index -= 1;
    } else {
      index = imgCollection.length - 1;
    }
    showImage(index);
  }
  function next() {
    if (index < imgCollection.length - 1) {
      index += 1;
    } else {
      index = 0;
    }
    showImage(index);
  }
  function makeDots() {
    const container = document.querySelector("div#container");
    const dotsContainer = document.createElement("div");
    dotsContainer.id = "dots-container";
    container.append(dotsContainer);

    for (let i = 0; i < imgCollection.length; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      dotsContainer.append(dot);
      dot.onclick = function () {
        showImage(i);
        dot.style.backgroundColor = "black";
        const dots = dotsContainer.children;
        for (let i = 0; i < dots.length; i++) {
          if (dots[i] !== dot) dots[i].style.backgroundColor = "white";
        }
      };
    }
    dotsContainer.children[0].style.backgroundColor = "black";
  }

  return { showImage, makeDots };
}
