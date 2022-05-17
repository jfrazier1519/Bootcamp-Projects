
//Run function as an anonymous function to refactor and save space
//module.exports can be shorted to exports via Node shortcuts
exports.getDate = function() {
  //Make variable today with constructor function Date
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
  //Make variable today with constructor function Date
  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
}
