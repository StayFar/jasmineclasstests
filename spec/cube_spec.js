import { convertHeightToVolume } from '../cube.js'

describe("Cube Volume Calculator", function() {
  it("should return 8 cubic meters for height = 2 meters", function() {
      expect(convertHeightToVolume(2)).toBe(8);
  });

  it("should return 27 cubic meters for height = 3 meters", function() {
      expect(convertHeightToVolume(3)).toBe(27);
  });

  it("should return 64 cubic meters for height = 4 meters", function() {
      expect(convertHeightToVolume(4)).toBe(64);
  });

  it("should throw an error for negative height", function() {
      expect(() => convertHeightToVolume(-2)).toThrowError("Height must be a positive number.");
  });

  it("should throw an error for height = 0", function() {
      expect(() => convertHeightToVolume(0)).toThrowError("Height must be a positive number.");
  });
});