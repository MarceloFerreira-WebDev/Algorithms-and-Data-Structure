const generateRandomId = () => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 19; i++) {
    if ((i + 1) % 5 === 0) {
      result += '-'
    } else {  
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }    
  }
  return result;
};