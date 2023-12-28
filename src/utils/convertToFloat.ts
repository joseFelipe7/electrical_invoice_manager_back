export function convertToFloat(numberString:string) {
  const numberWithoutSpecial = numberString.replace(/[^\d.,]/g, '');

  const numberFormat = numberWithoutSpecial.replace(',', '.');

  const numberFloat = parseFloat(numberFormat);

  if (isNaN(numberFloat)) {
    return null;
  }

  return numberFloat;
}