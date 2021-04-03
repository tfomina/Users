const assert = require("assert");
const User = require("../src/user");

describe("Deleting a user", () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    joe.save().then(() => done());
  });

  it("model instance remove", (done) => {
    joe
      .remove()
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it("class method remove", (done) => {
    // Remove a bunch of records with some given criteria
    User.deleteMany({ name: "Joe" })
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it("class method findOneAndDelete", (done) => {
    User.findOneAndDelete({ name: "Joe" }, { useFindAndModify: false })
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it("class method findByIdAndDelete", (done) => {
    User.findByIdAndDelete(joe._id, { useFindAndModify: false })
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });
});
