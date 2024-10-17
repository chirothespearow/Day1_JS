for(let i = 0; i<11; i++){
    console.log(i);
}

for(let j = 0;j<11;j++){
    if(j%2 != 0) console.log(j,"is odd");
    else console.log(j,"is even");
    
    if(j == 8) break;
}