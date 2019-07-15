// ================================================================================== //
// With this construct, our anonymous function has its own evaluation environment
// or “closure”, and then we immediately evaluate it. This lets us hide variables
// from the parent (global) namespace.
// What’s nice about this approach is that is that you can use local variables
// inside this function without accidentally overwriting existing global variables,
// yet still access the global variables
// ================================================================================== //

const someGlobalVar = 'Hello, I am a global variable :)';

(function () {

  const myGrades = [93, 95, 88, 0, 55, 91];

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
}());
