enum Gender{
    MALE = 'MALE',
    FEMALE = 'FEMALE'
};
// let favoriteFood: any[];
// favoriteFood = ['vegetable', true,]
const person:{
    name: string;
    age: number;
    hobby: string[];
    error: [number, string];
    gender: Gender;
    favoriteFood: any[]
} = {
    name: 'herve',
    age: 24,
    hobby: ['coding', 'trading'],
    error: [404,'Not Found'],
    gender: Gender.MALE,
    favoriteFood:['patato','rice',2,true]
}

console.log(person)