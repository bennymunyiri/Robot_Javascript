const users = [
    { id: 1, name: 'Alice', active: true, points: 120 },
    { id: 2, name: 'Bob', active: false, points: 80 },
    { id: 3, name: 'Charlie', active: true, points: 200 },
    { id: 4, name: 'David', active: true, points: 90 },
    { id: 5, name: 'Eva', active: false, points: 150 }
];

const activeUsersWithHighPoints = users.filter((user) => {
    return user.active && user.points >= 100;
});

console.log(activeUsersWithHighPoints);