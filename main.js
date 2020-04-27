let raceNumber = Math.floor(Math.random() * 1000);
const earlyRunner = false;
const age = 22;
if (age > 18 && earlyRunner) {
  raceNumber += 1000
}
if (age > 18 && earlyRunner) {
  console.log(`Runner number ${raceNumber}, Your race is starting 9:30 AM`);
} else if (age > 18) {
  console.log(`Runner number ${raceNumber}, Your race is starting 11:00 AM`);  
} else if (age < 18) {
  console.log(`Runner number ${raceNumber}, Your race is starting 12:30 AM`)
} else {
  console.log('See the registration desk')
}
  
