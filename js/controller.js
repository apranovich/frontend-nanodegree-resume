let controller = (() => {

  class Controller{
    init(){
      let data = model.getData();
      ui.render(data);
    }
  }

  return new Controller();
  
})();