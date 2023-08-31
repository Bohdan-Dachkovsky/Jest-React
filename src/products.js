export default picture = (year, b) => {
  let photobank = [300, 600, 900, 1200, 1500, 1800, 1900];
  for (i = 300; i < year; i++) {
    if (b > 5) return;
    if (year % 2 === 0) {
      return (photo = 10 + b++);
    } else if (year % 2 !== 0) {
      return (photo = 0);
    }
  }
  photobank.push(photo);
  return photobank;
};
const year = document.getElementsByClassName(input.outputYear);
const b = document.getElementsByClassName(input.rarity);
picture(year, b);
