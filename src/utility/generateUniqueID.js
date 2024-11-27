exports.generateUniqueID = () => {
  const randomPart = Math.floor(10 + Math.random() * 90).toString();
  const timestampPart = (Date.now() % 1000).toString().padStart(3, "0");
  return randomPart + timestampPart;
};
