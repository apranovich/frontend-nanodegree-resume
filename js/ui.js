let ui = (() => {
  
  let header = $("#header");
  let contacts = $("#topContacts");

  let createHeader = (bio) => {
    const {name, role, contacts: {mobile, email, location}} = bio;
    
    header.prepend(
      HTMLheaderName.replace("%data%", name), 
      HTMLheaderRole.replace("%data%", role)
    );
    
    contacts
      .append(HTMLmobile.replace("%data%", mobile))
      .append(HTMLemail.replace("%data%", mobile))
      .append(HTMLlocation.replace("%data%", location));
  };

  class UI {
    render(data) {
      createHeader(data.bio);
    }
  }

  return new UI();

})();