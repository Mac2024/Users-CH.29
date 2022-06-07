function saveUser(){
    let val = JSON.stringify(user);
    //localStorage.setItem();
    localStorage.setItem("users",val);
}