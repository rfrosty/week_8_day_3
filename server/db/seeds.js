use hotel;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Sophia",
    emailAddress: "sophia@whatever.com",
    checkInStatus: "true"
  },
  {
    name: "Iain",
    emailAddress: "iain@nowhere.com",
    checkInStatus: "false"
  },
  {
    name: "Ryan",
    emailAddress: "ryan@elsewhere.com",
    checkInStatus: "true"
  }
]);
