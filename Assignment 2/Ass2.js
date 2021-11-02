// Function alert Message
function alert()
{    
    alert("Hello User");
}
 // Function combinations 
 function combinations(string) {
    list = new Array();
    for(i=0 ; i<string.length ; i++) {
        for(j=i+1 ; j<string.length+1 ; j++) {
            list.push(string.slice(i, j));  
        }
    }
    return list;
}
// Display on Browser
      // Exe 1 
      document.getElementById("comb").innerHTML=combinations("chat");
      // Exe 2 
//document.write(combinations("chat"));
