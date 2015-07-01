function Property(address) {
  // set address
  this.address = address;
  this.units = [];
}

Property.prototype.setManager = function(manager) {
  // set property manager
  this.manager = manager;
};

Property.prototype.getManager = function() {
  // return property manager
  this.manager;
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant to unit, but first check to make sure
  // property has a manager and tenant has 2 references
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit
}; 

Property.prototype.availableUnits = function(){
  // return num of units available
};

Property.prototype.rentedUnits = function(){
  // return num of rented units
};