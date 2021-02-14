/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const breakfastCereals = {
  quantity: 500,
  flavour: "honey",
  shape: "hoops",
  vitamins: true,
  open: false,
  openPack: function () {
    this.open = true;
  },
};

console.log(breakfastCereals);

const capybara = {
  species: "capybara",
  name: "Penny",
  weight: 60,
  bodyshape: "chonk",
  hungry: true,
  emotion: "relaxed",
  feed: function () {
    this.hungry = false;
    this.weight++;
  },
  pet: function () {
    this.emotion = "huppy";
  },
};

const pelican = {
  species: "pelican",
  name: "Stimky",
  weight: 20,
  hungry: true,
  emotion: "belligerant",
};

const pond = {
  waterDepth: 1,
  waterStatus: "clear",
  inhabitants: [capybara, pelican],
};

console.log("Pond", pond);
