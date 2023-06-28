export default class Utils {
  static createString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static randPassword(upperCases: number, lowerCases: number, numbers: number) {
    const chars = [
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ', // upper case,
      'abcdefghijklmnopqrstuvwxyz', // lower case
      '0123456789', // numbers
    ];

    return [upperCases, lowerCases, numbers]
      .map(function (len, i) {
        return Array(len)
          .fill(chars[i])
          .map(function (x) {
            return x[Math.floor(Math.random() * x.length)];
          })
          .join('');
      })
      .concat()
      .join('')
      .split('')
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join('');
  }
}
