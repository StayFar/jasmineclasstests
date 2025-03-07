import { calculateTotalValue } from '../calctotalvalueofcoins.js'

describe("Coin Value Calculator", function() {
  it("should return 0.00 when all coin counts are 0", function() {
      expect(calculateTotalValue(0, 0, 0, 0, 0)).toBe(0);
  });

  it("should calculate the total value correctly for only toonies", function() {
      expect(calculateTotalValue(0, 0, 0, 0, 5)).toBe(10.00); // 5 toonies (5 * 2.00)
  });

  it("should calculate the total value correctly for only quarters", function() {
      expect(calculateTotalValue(0, 0, 4, 0, 0)).toBeCloseTo(1.00, 2); // 4 quarters (4 * 0.25)
  });

  it("should calculate the total value correctly for only nickels", function() {
      expect(calculateTotalValue(10, 0, 0, 0, 0)).toBeCloseTo(0.50, 2); // 10 nickels (10 * 0.05)
  });
});