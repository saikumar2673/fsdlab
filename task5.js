const temperatureConverter = {
    toCelsius: function(f) {
        return ((f - 32) * 5) / 9;
    },
    toFahrenheit: function(c) {
        return (c * 9) / 5 + 32;
    }
};

function convertTemperature() {
    const choice = prompt("Choose a conversion:\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit");

    if (choice === "1") {
        const f = parseFloat(prompt("Enter temp. in Fahrenheit:"));
      
            const c = temperatureConverter.toCelsius(f);
            console.log(`${f}°F is equal to ${c.toFixed(2)}°C.`);
        
    } else if (choice === "2") {
        const c = parseFloat(prompt("Enter temperature in Celsius:"));
        
            const f = temperatureConverter.toFahrenheit(c);
            console.log(`${c}°C is equal to ${f.toFixed(2)}°F.`);
        
    } else {
        console.log("Invalid choice. Please select 1 or 2.");
    }
}

convertTemperature();
