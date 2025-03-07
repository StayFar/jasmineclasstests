// 1)  Write a **function** that *calculate*s the **total value** of a **set of coins** in **dollars**.
// Each coin is worth:
// nickel:  $0.05
// dime:    $0.10
// quarter: $0.25
// loonie:  $1.00
// toonie:  $2.00
// Parameters:
// nickels - number of nickels
// dimes - number of dimes
// quarters - number of quarters
// loonies - number of loonies
// toonies - number of toonies
// Returns:
// total - total value of coins in dollars
// Write at least 3 tests. Don't forget to test 0.

function calculateTotalValue(nickels, dimes, quarters, loonies, toonies) {
    const nickelValue = 0.05;
    const dimeValue = 0.10;
    const quarterValue = 0.25;
    const loonieValue = 1.00;
    const toonieValue = 2.00;

    return (nickels * nickelValue) + 
           (dimes * dimeValue) + 
           (quarters * quarterValue) + 
           (loonies * loonieValue) + 
           (toonies * toonieValue);
}

export { calculateTotalValue }