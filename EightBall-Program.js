let userName = 'Lauren';

userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

let userQuestion = 'Can we all just get along?';
console.log(`${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (eightBall) {

  case 'randomNumber === 0':
    console.log('The eight ball answered: It is certain');
    break;
  case 'randomNumber === 1':
    console.log('The eight ball answered: It is decidedly so');
    break;
  case 'randomNumber === 2':
    console.log('The eight ball answered: Reply hazy try again');
    break;
    case 'randomNumber === 3':
    console.log('The eight ball answered: Cannot predict now');
    break;
     case 'randomNumber === 4':
    console.log('The eight ball answered: Do not count on it');
    break;
     case 'randomNumber === 5':
    console.log('The eight ball answered: My sources say n');
    break;
     case 'randomNumber === 6':
    console.log('The eight ball answered: Outlook not so good');
    break;
     case 'randomNumber === 7':
    console.log('The eight ball answered: Signs point to yes');
    break;
  default:
    console.log('The eight ball is broken');
    break;
}
//if (randomNumber == 0) {
//console.log('The eight ball answered: It is certain');
//} else if (randomNumber == 1) {
//console.log('The eight ball answered: It is decidedly so');
//} else if (randomNumber == 2) {
//console.log('The eight ball answered: Reply hazy try again');
//} else if (randomNumber == 3) {
//console.log('The eight ball answered: Cannot predict now');
//} else if (randomNumber == 4) {
//console.log('The eight ball answered: Do not count on it');
//} else if (randomNumber == 5) {
////console.log('The eight ball answered: My sources say no');
//} else if (randomNumber === 6) {
//console.log('The eight ball answered: Outlook not so good');
//} else if (randomNumber == 7) {
//console.log('The eight ball answered: Signs point to yes');
//} else {
//console.log('The eight ball is broken')
//};
console.log(`The eight ball answered: ${eightBall}`);
