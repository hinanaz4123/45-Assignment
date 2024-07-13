let personName :string = '';

let lowercase :string = personName.toLowerCase() ;
let uppercase :string = personName.toUpperCase() ;

let titlecase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(personName !== null && personName !==''){
    console.log(`Hello ${personName}, Here are you name in :
        LowerCase: ${lowercase}
        UpperCase: ${uppercase}
        TitleCase: ${titlecase}`)
}
else{
    console.log(`please fill your name !`)
}