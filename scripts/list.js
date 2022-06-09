function displayUsers(usersArray){
    let row;
    //travel the array (for)
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
        console.log(user);
        
        // create the row = `<>${} <>`
        row=`
            <tr>
                <td>${user.fName}</td>
                <td>${user.lName}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
            </tr>
         `;
        $("#users").append(row); 
    }
    
    
    //append the row to the table
}

function init(){
    console.log("Listing users");
    let users = readUsers();//getting the array
    
    //<-----is an array---->
    displayUsers(users);
}
window.onload=init;