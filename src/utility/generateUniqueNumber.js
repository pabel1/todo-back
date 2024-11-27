exports.generateUniqueNumber = () => {
  const randomNumber = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  let number = randomNumber(6);
  let timestamp = Date.now().toString();

  while (number.length < 10) {
    let randomIndex = Math.floor(Math.random() * timestamp.length);
    let digit = timestamp.charAt(randomIndex);
    if (!number.includes(digit)) {
      number += digit;
    }
  }

  return number;
};
