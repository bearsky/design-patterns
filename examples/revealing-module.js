// ================================================================================== //
// This is very similar to the 'object-interface' approach, except that it ensures all
// methods and variables are kept private until explicitly exposed
// ================================================================================== //

const myRevealingModule = ( () => {

    let privateVar = 'Peter';
    const publicVar  = 'Hello World';
    function privateFunction() {
      console.log('Name: '+ privateVar);
    }

    function publicSetName(name) {
      privateVar = name;
    }
    function publicGetName() {
      privateFunction();
    }

  return {
      setName: publicSetName,
      greeting: publicVar,
      getName: publicGetName
    };
  })();



  myRevealingModule.setName('Mark');
  myRevealingModule.getName();
  // Output == 'Name: Mark'
