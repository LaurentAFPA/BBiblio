var patternA=/[a-z]+/;
var patternB=/[A-Z]+/;
var patternC=/[0-9]+/;




document.getElementById("login").focus();


//Fonctions pour vérifier que l'ID et mot de passe de première connection sont respectés
document.getElementsByClassName("connection")[0].addEventListener("click", function()
{
    connection();
});

function connection()
{
    var login=document.getElementById("login").value;
    var password=document.getElementById("password").value;
    if(login!="Auteur"&&login!="Editeur"&&login!="Juré")
    {
        alert("Identifiant incorrect")
    }
    else if(password!="MPA"&&password!="MPE"&&password!="MPJ")
    {
        alert("Mot de passe incorrect")
    }
    else if(login=="Auteur"&&password=="MPA")
    {
        var userStatus="author";
        window.location.href="profilAuteurEdit.html";
    }
    else if(login=="Editeur"&&password=="MPE")
    {
        var userStatus="editor";
        window.location.href="profilAuteurEdit.html";
    }
    else if(login=="Juré"&&password=="MPJ")
    {
        var userStatus="juror";
        window.location.href="profilJure.html";
    }
    // return(userStatus);
}

// CI DESSOUS: Filtre efficace pour les exigences du nouveau mot de passe

// function checkNPW()
// {
//     if(document.getElementById("password").value.length<3)
//     {
//         alert("trop court");
//     }
//     else if(patternA.test(document.getElementById("password").value)==false)
// 	{
// 		alert("manque minuscule");
//         // return;
// 	}
//     else if(patternB.test(document.getElementById("password").value)==false)
// 	{
// 		alert("manque majuscule");
//         // return;
// 	}
//    else if(patternC.test(document.getElementById("password").value)==false)
// 	{
// 		alert("manque chiffre");
//         // return;
// 	}
//     else{
//         alert("mot de passe ok")
//     }
// }



// CI DESSOUS: Tentative de maintien de statut d'une page à l'autre (à revoir).

// window.onload=function loggedIn()
// {
//     console.log(userStatus)
//     if (userStatus=="author"||userStatus=="editor"||userStatus=="juror")
//     {
//         document.getElementsByClassName("headMenu")[0].hidden="true";

//         // // Create element:
//         // const para = document.createElement("a");
//         // para.innerHTML = "This is a paragraph.";

//         // // Append to another element:
//         // document.getElementById("myDIV").appendChild(para);
//     }
// }
