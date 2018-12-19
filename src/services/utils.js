// export const ID = () =>{

//     let x = '_' + Math.random().toString(36).substr(2, 24);
//     console.log(x);
// return x    
// } 
    

export const ID = () => {
    var text = "_";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i <11; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text

}