import { determineEarthquakeDamage } from '../damagebyearthquake.js'

describe("A suite of tests for determineEarthquakeDamage function", function() {
  it('tests for intensity < 5 (Little or no damage)', function() {
    let result = determineEarthquakeDamage(4.5);
    expect(result).toEqual("Little or no damage");
  });

  it('tests for intensity >= 5 and < 5.5 (Some damage)', function() {
    let result = determineEarthquakeDamage(5);
    expect(result).toEqual("Some damage");
  });

  it('tests for intensity >= 5.5 and < 6.5 (Serious damage)', function() {
    let result = determineEarthquakeDamage(6);
    expect(result).toEqual("Serious damage: walls may crack or fall");
  });

  it('tests for intensity >= 6.5 and < 7.5 (Disaster)', function() {
    let result = determineEarthquakeDamage(7);
    expect(result).toEqual("Disaster: buildings may collapse");
  });

  it('tests for intensity >= 7.5 (Catastrophe)', function() {
    let result = determineEarthquakeDamage(8);
    expect(result).toEqual("Catastrophe: most buildings destroyed");
  });
});