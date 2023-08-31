export const picture = (year, b) => {
  let photobank = [300, 600, 900, 1200, 1500, 1800, 1900];
  for (let i = 300; i < year; i++) {
    if (b > 5) return;
    if (year % 2 === 0) {
      let photo = 10 + b++;
      photobank.push(photo);
    } else if (year % 2 !== 0) {
      photobank.push(0);
    }
  }

  return photobank;
};
// const year = document.getElementsByClassName("outputYear");
// const b = document.getElementsByClassName("rarity");
// picture(year, b);
