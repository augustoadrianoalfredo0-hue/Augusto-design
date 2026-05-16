function entrar(){

  let email = document.getElementById("email").value;

  let contacto = document.getElementById("contacto").value;

  if(email !== "" && contacto.startsWith("+258")){

    document.getElementById("loginPage").style.opacity = "0";

    setTimeout(()=>{

      document.getElementById("loginPage").style.display = "none";

      document.getElementById("site").style.display = "block";

      document.getElementById("site").style.animation = "fadeUp 1.5s";

    },1000);

  }

  else{

    alert("Use um contacto de Moçambique começando com +258");

  }

}