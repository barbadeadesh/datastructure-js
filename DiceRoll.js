let dictionary = new Map([]);
let num = 0;
let key = 1;
let count = 0;
while (count < 10 ){
        num = Math.floor(Math.random()*(7-1)+1 );    //Dice number between 1 to 10
        dictionary.set(num,key);                     
        key++;
        count++;
}
for(let [key, value] of dictionary)
console.log("Key : " +key +" values : " +value)