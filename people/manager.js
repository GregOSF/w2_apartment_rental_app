function Manager(name, contact) {
  // set name and contact
  this.name = name;
  this.contact = contact;
  this.properties = [];
}

Manager.prototype.addProperty = function(property) {
  // add property to properties array
  this.properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
  // remove property
   this.properties.pop(property);
}