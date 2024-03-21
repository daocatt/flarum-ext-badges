export default function hextorgba(hexcolor: string | null, opacity: number | 1): string {
  // return if hexcolor is undefined or shorter than 4 characters, shortest hex form is #333;
  // decided against regex hex color validation for performance considerations
  if (!hexcolor || hexcolor.length < 4) {
    return '';
  }

  let hexnumbers = hexcolor.replace('#', '');

  if (hexnumbers.length === 3) {
    hexnumbers += hexnumbers;
  }

  const r = parseInt(hexnumbers.slice(0, 2), 16);
  const g = parseInt(hexnumbers.slice(2, 4), 16);
  const b = parseInt(hexnumbers.slice(4, 6), 16);

  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
}
