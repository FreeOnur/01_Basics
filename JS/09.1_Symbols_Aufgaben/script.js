let countMax = 40;


for (let i = 0; i < countMax; i++) {
    
    if(i%5==0) {
        console.log("Foo");
        continue;
    }
    if(i%7==0) {
        console.log("Bar");
        continue;
    }
    console.log(i);
    
}
