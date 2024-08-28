let datas = [
    {
        id: 1,
        name: "john",
        age: 20,
    },
    {

        id: 2,
        name: "jeeva",
        age: 21,
    },
    {

        id: 3,
        name: "jake",
        age: 23,
    }
]

function findUser(id) {
    let user = datas.find((user) => { return user.id == id });
    return user;
}

let user = findUser(1);
console.log("user:", user);

function findUser1(id) {
    let user = datas.find((user) => { return user.id == id });

    setTimeout(() => {
        return user;
    }, 1000);
}

let user1 = findUser1(1);
console.log("user1:", user1) //it shows undefined..bcoz the return user is in the assynchronous timeout function

//to solve this :

function findUser2(id) {
    return new Promise((resolve, reject) => {
        let user = datas.find((user) => {
            return user.id === id
        });
        setTimeout(() => {
            if (user) {
                resolve(user);

            } else {
                reject("User not found")
            }
        }, 3000)
    })
}

findUser2(3)
    .then((user) => {
        console.log("user:", user);

        let updated_user = { ...user, name: user.name + " Doe" };
        return updated_user;
    })
    .then((updatedUser) => {
        console.log("updatedUser:", updatedUser)
        let updated_user1 = { ...updatedUser, age: updatedUser.age + 5 };
        return updated_user1;
    })

    .then((updatedUser1)=>{
        console.log("updatedUser1 :",updatedUser1);

        return "End";
    })
    .then((message =>{
        console.log("message:",message);
    }))
    .catch((error) =>{
        console.log("Error:",error);
    });




