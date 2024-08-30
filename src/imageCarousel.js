export default function (imgCollection = []) {
  let index = 0;

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
    }
  }
  function next() {
    if (index < imgCollection.length - 1) {
      index += 1;
      showImage(index);
    }
  }
  return { showImage, previous, next };
}
