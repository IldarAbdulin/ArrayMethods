//1
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
  
// let arr = [1, 2, 4, 10, 7, 5, 8, 6, 3, 9 ];
// arr.sort(compareNumeric);
// console.log(arr);


//2
// let arr = [ 1, 2, 4, 10, 7, 5, 8, 6, 3, 9 ];
// arr.sort( (a, b) => a - b );
// console.log(arr);

//3
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// alert( arr );


//4
// let names = 'Вася, Петя, Маша';
// let arr = names.split(', ');
// for (let name of arr) {
//   console.log( `Сообщение получит: ${name}.` ); // Сообщение получат: Вася (и другие имена)
// }

//5
// let arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);
// console.log(arr);


//6
// let arr = ['Вася', 'Петя', 'Маша'];
// let str = arr.join('; '); // объединить массив в строку через ;
// console.log( str );


//7
// let arr = [1, 2];

// console.log( arr.concat([3, 4]) );
// console.log( arr.concat([3, 4], [5, 6]) ); 
// console.log( arr.concat([3, 4], 5, 6) );

//8
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
};
  
let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

let soldiers = users.filter(army.canJoin, army);
  
console.log('Всего солдат: '+soldiers.length);
console.log('--Возраста солдат--') // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age);