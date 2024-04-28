let current_users: string[] =["shahbaz","admin","momi","muneeb","yasir"];
let new_users: string[] =["shahbaz","mustafa","murtaza","user7","admin","user9"];

new_users.forEach((newUser) => {
    if(current_users.some(
       (current_Users) => current_Users.toLowerCase() === newUser.toLowerCase()
    )){
        console.log(`${newUser} will need to enter a new username.`);
    }else{
        console.log(`${newUser} is available.`)
    }
})
