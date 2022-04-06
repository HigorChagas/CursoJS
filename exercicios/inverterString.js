function reverseString(str) {

    const stringArray = str.split('');
    const reverseArray = stringArray.reverse();
    const joinArray = reverseArray.join('');

    console.log(joinArray);
  }
  
  reverseString("hello");