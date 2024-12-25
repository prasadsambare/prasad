

function getvalue(){  
    const x = document.getElementById("text").value;   
    const length = x.length;
    const symbol = "@"; 
    const name = "gmail.com"; 
    const full =  x+ length+symbol+name; 
    const gamil = full.toLowerCase();
    let massage = document.getElementById("msg"); 
console.log(massage);

massage.innerText= "Your Gmail: "+gamil;
    

}  

