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
      showImage(index);
    } else {
      index = imgCollection.length - 1;
      showImage(index);
    }
  }
  function next() {
    if (index < imgCollection.length - 1) {
      index += 1;
      showImage(index);
    } else {
      index = 0;
      showImage(index);
    }
  }
  return { showImage };
}
