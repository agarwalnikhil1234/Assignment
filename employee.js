let employee = {fName: "Test", lname: "User", age : "25", company: "Test Company"}

function concatName() {
    return employee.fName +" "+ employee.lname;
  }
  employee.fullName = concatName();
  delete employee.fName;
  delete employee.lname;