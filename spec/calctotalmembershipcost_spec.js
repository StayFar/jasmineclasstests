import { calculateGymMembershipCost } from '../calctotalmembershipcost.js'

describe("Gym Membership Cost Calculator", function() {
  it("should apply a 5% discount when 1 friend signs up", function() {
      expect(calculateGymMembershipCost(100, 1)).toBeCloseTo(95, 2);
  });

  it("should apply a 10% discount when 2 friends sign up", function() {
      expect(calculateGymMembershipCost(100, 2)).toBeCloseTo(90, 2);
  });

  it("should apply a 15% discount when 3 friends sign up", function() {
      expect(calculateGymMembershipCost(100, 3)).toBeCloseTo(85, 2);
  });

  it("should apply a 15% discount when 4 friends sign up", function() {
      expect(calculateGymMembershipCost(100, 4)).toBeCloseTo(85, 2);
  });
});