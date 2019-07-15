const singleton = (() => {

    let instance;

    function init(){
      let name;

      this.setName = (name) => {
         this.name = name;
      }

      this.getName = () => {
        return this.name;
      }

      return{
        setName:setName,
        getName:getName
      }

    }

    function getInstance(){
      if (!instance) { instance = init() }
      return instance;
    }

    return {
      getInstance:getInstance
    }

  })();


  const one = singleton.getInstance();
  const two = singleton.getInstance();

  //the two instances are same
  console.log(one == two);
  //true

  one.setName('Mark');
  console.log(two.getName());
  //"Mark"
