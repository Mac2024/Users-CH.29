//object constructor
function User(email,password,fname,lname,age, address){
    this.email= email;
    this.password= password;
    this.firstName= fname;
    this.lastName= lname;
    this.age= age;
    this.address = address;
    
}

function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    //add validation for email,pass,fname,lname
    if(user.email.length==0){
        valid=false;
        console.log("Please add an email");
        $("input").addClass("input-error");
    }
    if(user.password.length==0){
        valid=false;
        console.log("Please add a password");
        $("input").addClass("input-error");
    }
    if(user.fName.length==0){
        valid=false;
        console.log("Please add your first name");
        $("input").addClass("input-error");
    }
    if(user.lName.length==0){
        valid=false;
        console.log("Please add your last name");
        $("input").addClass("input-error");
    }
    if(user.age.length==0){
        valid=false;
        console.log("Please add a password");
        $("input").addClass("input-error");
    }
    if(user.address.length==0){
        valid=false;
        console.log("Please add a password");
        $("input").addClass("input-error");
    }
        return valid;
}
//register function
function register(){
    let userName = $("#txtEmail").val();
    let userPass = $("#txtPassword").val();
    let userFirstName =$("txtFirstName").val();
    let userLastName = $("txtLastName").val();
    let userAge = $("txtAge").val();
    let userAddress = $("txtAddress").val();
    
    
    //creating the obj
    let newUser = new User(userName, userPass, userFirstName,userLastName, userAge, userAddress);
    
    if(isValid(newUser)==true){
        //console.log(newUser);
        saveUser(newUser); //thin fn is in the StoreManager
    //clear the inputs
    $("input").val("");
    }
}

function init(){
    console.log("Register");
    //hook events
    $("#btnRegister").click(register);
    $("#txtLastName").keyPress(function(e){
        console.log(e.key);
        if(e.key=="Enter"){
            register();
        }
    });
}

window.onload=init;