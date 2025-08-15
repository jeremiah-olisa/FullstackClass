//#region Log Shortcut
const doAction = console.log;
//#endregion

// let {variableName} = {value};
let weatherCondition = "Snowy"; // Example weather condition

// #region Weather Condition Check
if (weatherCondition == "rainy") doAction("It's raining, take an umbrella!");
else if (weatherCondition == "sunny") doAction("It's sunny, wear sunglasses!");
else if (weatherCondition == "cloudy")
  doAction("It's cloudy, might rain later.");
else if (weatherCondition == "snowy")
  doAction("It's snowy, wear warm clothes!");
else doAction("Omo, i don't know what you want me to do ");
// #endregion

while (weatherCondition == "Snowy") {
  // This loop will run indefinitely, you can add a break condition if needed
  doAction("Weather check in progress...");
  // Simulate some delay or condition to exit the loop
  // break; // Uncomment this line to exit the loop
}
