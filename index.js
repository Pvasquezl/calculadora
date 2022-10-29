


function substring(texto,inicio,final){
    let nuevo="";
    for(let i=inicio;i<final;i++){
             if(texto.charAt(i)!='+' && texto.charAt(i)!='/' && texto.charAt(i)!='*' || texto.charAt(i)!='^'){
                nuevo+=texto.charAt(i); 
            } 
            
            
    }
    return nuevo;
}

function mensaje(texto){
    let parte1=0;
    let parte2=0;
    let bandera=false;
    let signo=''
    let total=0.00;
    for(let i=0;i<texto.length;i++){
        if(texto.charAt(i)!='+' && texto.charAt(i)!='/' && texto.charAt(i)!='*' && texto.charAt(i)!='^'){
            bandera=true;
            
        }else{
            signo=texto.charAt(i);
        }
 }

 if(bandera){
    parte1=parseFloat(substring(texto,0,texto.indexOf(signo)));
    parte2=parseFloat(substring(texto,texto.indexOf(signo)+1,texto.length));
    switch(signo){
        case '+':
            total=parte1+parte2;
            break;
        case '-':
            total=parte1-parte2;
            break;
        case '*':
            total=parte1*parte2;
            break;
        case '/':
            total=parte1/parte2;
            break;
    }
   
    document.getElementById("screen").placeholder="";
    document.getElementById("screen").placeholder=total;
 }

        
 }
    
        
    



let inc=0;
document.getElementById("screen").placeholder="";
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const fired_button = button.value;
        if(fired_button!='='){
            document.getElementById("screen").placeholder+=fired_button;
            
        }else{
            if(inc>1){
                inc=0;
                document.getElementById("screen").placeholder="";
            }else{
            inc++;
            mensaje(document.getElementById("screen").placeholder);
        }
    }
        
    inc=0; 
    });
});

