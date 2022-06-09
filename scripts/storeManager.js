function saveUser(user){
    let val = JSON.stringify(user);
    //localStorage.setItem();
    localStorage.setItem("users",val);
}