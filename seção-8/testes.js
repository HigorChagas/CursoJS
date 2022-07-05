function stringClean(s){
    const regex = /[0-9]/g;
    
    console.log(s.replace(regex, ''));
}

stringClean("(E3at m2e2!!)");