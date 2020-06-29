module.exports = function () {
  let faker = require("faker");
  let _ = require("lodash");

  return {
    profiles: _.times(15, function (num) {
      return {
        id: num,
        name: faker.company.catchPhraseNoun(),
        gender: faker.helpers.randomize(["Male", "FeMale"]),
        age: faker.random.number(100),
      };
    }),
    zookeeper: _.times(20, (n) => {
      return {
        id: n,
        name: {
          firstname: faker.name.firstName(),
          name: faker.name.lastName(),
        },
        salary: faker.random.number(5000, 20000),
      };
    }),
  };
};
