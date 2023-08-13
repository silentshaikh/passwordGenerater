let myPasswrod = document.getElementById("password");
let myIcon = document.getElementById("icon");
let myBtn = document.getElementById("btn");
let upWords = "ABCDEFGHIJKL";
    let lowWords = "abcdefghijkl";
    let number = "12345";
    let passLength = 12;
    let allCollection =upWords+lowWords+number;
myBtn.addEventListener("click",() => {
     let passGene = "";
    passGene += upWords[Math.floor(Math.random()*upWords.length)];
    passGene += lowWords[Math.floor(Math.random()*lowWords.length)];
    passGene += number[Math.floor(Math.random()*number.length)];
    while(passLength > passGene.length){
        passGene += allCollection[Math.floor(Math.random()*allCollection.length)];
    };
    myPasswrod.value = passGene;
});
myIcon.addEventListener("click",() => {
    myPasswrod.select();
    document.execCommand("copy");
})