const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


function generateKey(length, characters) {
    let key = '';
    let charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charactersLength);
      key += characters[randomIndex];
    }
  
    return key;
  }
  

  const generatedkey = generateKey(16, characters);
  console.log(generatedkey); 