let tex="", i=0;
let ban=false;
    const num=document.querySelectorAll("#data-numero");
    const opera=document.querySelectorAll("#data-operacion");
    const operandor=document.querySelectorAll("#data-operador");
    
    //numeros
    num.forEach(boton=>{
        if(!boton)return
        boton.addEventListener("click", function(){
           agregarNumeros(boton.innerText);
        }); 
    });

    //operadores 
    operandor.forEach(boton=>{
        if(!boton)return
        boton.addEventListener("click", function(){
            agregaroperadores(boton.innerText);
        });  
    });
    //borrar y igual
    opera.forEach(boton=>{
        if(!boton)return
        boton.addEventListener("click", function(){
            if(boton.innerText == "="){
                document.getElementById("campo").value="";
                document.getElementById("resultado").value;
            }else if(boton.innerText == "C"){
                document.getElementById("campo").value="";
                document.getElementById("resultado").value="";
                tex="";
                i=0;
            }
        });
    });

    function agregarNumeros(nu){
      if(nu==="." && ban==false && tex != "" && tex!=undefined){
        tex=document.getElementById("campo").value+=nu;
        ban=true;
      }else if(nu != "."){
        tex=document.getElementById("campo").value+=nu;
      }
        calcular();
    }

    function agregaroperadores(op){
        if(tex==undefined || tex ==""){
            tex=document.getElementById("campo").value="";
        }else{
           
                tex=document.getElementById("campo").value+=op;
                ban=false;
                i++; 
        }
    }
  
  function calcular(){ 
      try {
        operacion=eval(tex);
      } catch (error) {
        console.log(error.message);
      }
      
        if(i>=1){
            document.getElementById("resultado").value=operacion;    
        }
        
  }