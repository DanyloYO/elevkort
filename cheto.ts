interface User {
    name: string
    age?: number
}
function printUserName(user: User) {
    if(user.age !== undefined){
        console.log(user.name + ":" + user.age )
    }
    console.log(user.name)
}

function getNames(names:string[]){
    for(let i = 0; i < names.length; i++){
        console.log(names[i])
    }
}
function getLast<T>(items: T[]): T {
    return items[items.length - 1 ]
} 
