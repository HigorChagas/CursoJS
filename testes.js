function recurse(max) {
  if(max === 10) {
    return;
  } 
  max++
  console.log(max);
  recurse(max);
}

recurse(2);