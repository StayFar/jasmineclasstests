import { convertFahrenheitToCelsius } from '../fahrenheittocelsius.js'

describe("Fahrenheit to Celsius Converter", function() {
  it("should convert 212°F to 100°C (boiling point)", function() {
      expect(convertFahrenheitToCelsius(212)).toBe(100);
  });

  it("should convert 32°F to 0°C (freezing point)", function() {
      expect(convertFahrenheitToCelsius(32)).toBe(0);
  });

  it("should convert 70°F to approximately 21.11°C (room temperature)", function() {
      expect(convertFahrenheitToCelsius(70)).toBeCloseTo(21.11, 2);
  });
});