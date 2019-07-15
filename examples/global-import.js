// ================================================================================== //
// The benefit of this approach over 'anonymous-closures' is that you declare the global
// variables upfront, making it crystal clear to people reading your code.
// ================================================================================== //

const someGlobalVar = 'Hello, I am a global variable :)';
const myGrades = [93, 95, 88, 0, 55, 91];

(function (myGrades) {

  const average = () => {
    const total = myGrades.reduce( (accumulator, item) => {
      return accumulator + item}, 0);

    return 'Your average grade is ' + total / myGrades.length + '.';
  }

  const failing = () => {
    const failingGrades = myGrades.filter( (item) => {
      return item < 70;});

    return 'You failed ' + failingGrades.length + ' times.';
  }

  console.log(average());
  // Your average grade is 70.33333333333333.
  console.log(failing());
  // 'You failed 2 times.'
  console.log(someGlobalVar);
  // 'Hello, I am a global variable :)'
}(myGrades));
