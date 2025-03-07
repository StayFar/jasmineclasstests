// 2) Write a function that *convert*s temperatures in **fahrenheit** to **celsius**. Test at least boiling, freezing water temperatures and room temperature (70).

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

export { convertFahrenheitToCelsius }