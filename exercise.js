// # Exercise 23

// Print in the console the price of the room according to the following scheme:

// * Prince for Basic Room --> 50€
// * Price for Junior Suite Room --> 80€
// * Price for Master Suite  --> 100€

// Use the Switch statement.
// options: "Basic" "Junior" "Master"
let roomType = "Master";

switch (roomType) {
  case "Basic":
    console.log("50€");
    break;

  case "Junior":
    console.log("80€");
    break;

  case "Master":
    console.log("100€");
    break;

  default:
    console.log("Room not available");
}
