console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');


for(let i=0; i<6; i++){
    console.log(i)
} //end for loop

let index = 0
const count = 5
while (index<=count){
    console.log('while loop:', index)
    index++
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

for(i=3; i<=5; i++){
    console.log(i)
}//end for loop

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

for(i=1; i<=10; i++){
    if(i % 2=== 0){
        console.log('even number', i)
    }
    else{
        console.log('odd number', i)
    }
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for(i=5; i>=0; i--){
    console.log('count down', i)
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

for(one of stars){
    console.log('individual star', one)
}

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
//see above

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

let eachStar = 0
while(eachStar<=stars.length){
    console.log('Each stars using while:', stars[eachStar]);
    eachStar++
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let n = 0
let max = 5
while(n<=max){
    console.log('count 0-5 using while:', n)
    n++
}//end count using while

for(let i=0; i<=5; i++){
    console.log("count from 0-5", i)
}//end count using for loop

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let x = 10
let min = 5

while(x>=min){
    console.log("count from 10-5 using while:", x)
    x--
}//end count using while

for(x=10; x>=5; x--){
    console.log('count down 10-5 using for', x)
} //end count using for