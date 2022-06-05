//object constructor
function User(email,password,fname,lname,age, address, phoneNum,payment, color){
    this.email= email;
    this.password= password;
    this.firstName= fname;
    this.lastName= lname;
    this.age= age;
    this.address = address;
    this.phoneNumber= PhoneNumber;
}
//register function
function register(){
    let userName = $("#txtEmail").val();
    let userPass = $("#txtPassword").val();
    let userFirstName =$("txtFirstName").val();
    let userLastName = $("txtLastName").val();
    let userAge = $("txtAge").val();
    let userAddress = $("txtAddress").val();
    let userPhoneNumber = $("txtPhoneNumber").val();
    
    console.log(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhoneNumber);
    //creating the obj
    let newUser = new User(userName, userPass, userFirstName,userLastName, userAge, userAddress,userPhoneNumber);
    //clear the inputs
    $('input').val("");
    console.log(newUser);
}

function init(){
    console.log("Register");
    //hook events
    $("#btnRegister").click(register);
}

window.onload=init;