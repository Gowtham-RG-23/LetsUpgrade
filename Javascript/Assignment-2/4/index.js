//Script

var Data = [
  {
    name: "arun",
    age: 20,
    country: "india",
    hobbies: ["playing", "music"],
  },
  {
    name: "babu",
    age: 29,
    country: "usa",
    hobbies: ["indoor games", "music"],
  },
  {
    name: "chand",
    age: 30,
    country: "india",
    hobbies: ["outer games", "music"],
  },
  {
    name: "deepak",
    age: 40,
    country: "srilanka",
    hobbies: ["outer games", "music"],
  },
  {
    name: "ellai",
    age: 45,
    country: "india",
    hobbies: ["outer games", "music"],
  },
];

function age() {
  var ageData = [];
  for (i in Data) {
    if (Data[i].age < 30) {
      ageData.push(Data[i]);
    }
  }
  document.getElementById("showAge").innerHTML = JSON.stringify(ageData);
}
function country() {
  var countryData = [];
  for (i in Data) {
    if (Data[i].country === "india") {
      countryData.push(Data[i]);
    }
  }
  document.getElementById("showCountry").innerHTML = JSON.stringify(
    countryData
  );
}
