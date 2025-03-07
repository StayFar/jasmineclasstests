// 4) Write a function that *calculate*s **total cost of a gym membership**. A member gets a discount according to the number of friends they sign up.
// 0 friends: 0% discount
// 1 friend: 5% discount
// 2 friends: 10% discount
// 3 or more friends: 15% discount
// Parameters:
// cost - a gym membership base cost (float > 0)
// friends - number of friends signed up (int >= 0)
// Make sure to test with, 1, 2, 3 and 4 friends.

function calculateGymMembershipCost(cost, friends) {
    if (cost <= 0) {
        throw new Error("Cost must be a positive number.");
    }
    if (friends < 0) {
        throw new Error("Number of friends must be zero or greater.");
    }

    let discount = 0;
    if (friends === 1) discount = 0.05;
    else if (friends === 2) discount = 0.10;
    else if (friends >= 3) discount = 0.15;

    return cost * (1 - discount);
}

export { calculateGymMembershipCost }