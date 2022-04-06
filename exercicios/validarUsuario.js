function CodelandUsernameValidation(str) { 

    const primeiraString = /[a-zA-Z]/g
    const segundaString = /[a-zA-Z0-9\-\_]$/

    if(str.length < 4 || str.length > 25 || str.charAt(str.length - 1).includes('_')) {
      return false;
    }

    if(str.charAt(0).match(primeiraString) || str.includes(segundaString)) {
        return true;
    }

    return str; 
  
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation('oiii_ii'));