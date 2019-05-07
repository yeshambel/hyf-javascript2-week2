// *****************************************<1>***********************************
let numbers = [1, 2, 3, 4];
let newNumbers = numbers.filter((value) => value % 2 !== 0)
    .map((value) => value * 2);
console.log(newNumbers);
// ****************************************<2>************************************

let monday = [{
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [{
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);
let sum = 0;
let value = tasks.map((task) => task.duration / 60)
    .filter((duration) => duration >= 2)
    .map((duration) => duration * 10)
value.forEach((total) => {
    sum += total;
})
console.log(sum.toFixed(3) + "€");