


function submit(){
        let num1= parseFloat(document.getElementById("input1").value);
        let num2=parseFloat(document.getElementById("input2").value);
        const total =document.getElementById( "operators").value;

        if(total == '+'){
            document.getElementById("result").value= num1+num2;
            
        }
        else if(total == "-"){
            document.getElementById("result").value = num1-num2;


        }
        else if(total == "*"){
            document.getElementById("result").value= num1*num2;

        }

        else if(total == "%"){
            document.getElementById("result").value= num1%num2;

        }
        else if(total == "/"){
            document.getElementById("result").value= num1/num2;

        }
        else if (total == "."){
            document.getElementById("result").value= num1.num2;

        }
        else{
            alert("entera valid symbool");
        }
    }

        function delect(){
          let var1=document.getElementById("input1").value=" ";
          let var2=document.getElementById("input2").value=" ";
          let var3=document.getElementById("operators").value=" ";
          let var4=document.getElementById("result").value=" ";


        }