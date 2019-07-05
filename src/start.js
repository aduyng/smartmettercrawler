const crawl = require("./crawl");
const saveToFirestore = require("./saveToFirestore");

module.exports = async () => {
  const dailyUsage = await crawl(process.env);
  console.log("daily usage:", dailyUsage);
  await saveToFirestore({ dailyUsage });
  console.log("updated to firestore");
  return true;
};
