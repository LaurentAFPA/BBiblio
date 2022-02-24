// Tableau de données des vainqueurs des dernières années
const winners=
[
        (vainqueurmeilleurromanfr2018= {
            premCouv:"Couverture du meilleur roman français 2018",
            biographie:"Biographie de l'auteur du meilleur roman français 2018",
            resume:"Résumé du meilleur roman français 2018",
            photoAuteur:"Portrait de l'auteur du meilleur roman français 2018",
        }),
        (vainqueurmeilleurromanetr2018= {
            premCouv:"Couverture du meilleur roman étranger 2018",
            biographie:"Biographie de l'auteur du meilleur roman étranger 2018",
            resume:"Résumé du meilleur roman étranger 2018",
            photoAuteur:"Portrait de l'auteur du meilleur roman étranger 2018",
        }),
        (vainqueurmeilleurdoc2018= {
            premCouv:"Couverture du meilleur documentaire 2018",
            biographie:"Biographie de l'auteur du meilleur documentaire 2018",
            resume:"Résumé du meilleur documentaire 2018",
            photoAuteur:"Portrait de l'auteur du meilleur documentaire 2018",
        }),
        (vainqueurmeilleurebio2018= {
            premCouv:"Couverture de la meilleure biographie 2018",
            biographie:"Biographie de l'auteur de la meilleure biographie 2018",
            resume:"Résumé de la meilleure biographie 2018",
            photoAuteur:"Portrait de l'auteur de la meilleure biographie 2018",
        }),
        (vainqueurmeilleurromanfr2019= {
            premCouv:"Couverture du meilleur roman français 2019",
            biographie:"Biographie de l'auteur du meilleur roman français 2019",
            resume:"Résumé du meilleur roman français 2019",
            photoAuteur:"Portrait de l'auteur du meilleur roman français 2019",
        }),
        (vainqueurmeilleurromanetr2019= {
            premCouv:"Couverture du meilleur roman étranger 2019",
            biographie:"Biographie de l'auteur du meilleur roman étranger 2019",
            resume:"Résumé du meilleur roman étranger 2019",
            photoAuteur:"Portrait de l'auteur du meilleur roman étranger 2019",
        }),
        (vainqueurmeilleurdoc2019= {
            premCouv:"Couverture du meilleur documentaire 2019",
            biographie:"Biographie de l'auteur du meilleur documentaire 2019",
            resume:"Résumé du meilleur documentaire 2019",
            photoAuteur:"Portrait de l'auteur du meilleur documentaire 2019",
        }),
        (vainqueurmeilleurebio2019= {
            premCouv:"Couverture de la meilleure biographie 2019",
            biographie:"Biographie de l'auteur de la meilleure biographie 2019",
            resume:"Résumé de la meilleure biographie 2019",
            photoAuteur:"Portrait de l'auteur de la meilleure biographie 2019",
        }),
        (vainqueurmeilleurromanfr2020= {
            premCouv:"Couverture du meilleur roman français 2020",
            biographie:"Biographie de l'auteur du meilleur roman français 2020",
            resume:"Résumé du meilleur roman français 2020",
            photoAuteur:"Portrait de l'auteur du meilleur roman français 2020",
        }),
        (vainqueurmeilleurromanetr2020= {
            premCouv:"Couverture du meilleur roman étranger 2020",
            biographie:"Biographie de l'auteur du meilleur roman étranger 2020",
            resume:"Résumé du meilleur roman étranger 2020",
            photoAuteur:"Portrait de l'auteur du meilleur roman étranger 2020",
        }),
        (vainqueurmeilleurdoc2020= {
            premCouv:"Couverture du meilleur documentaire 2020",
            biographie:"Biographie de l'auteur du meilleur documentaire 2020",
            resume:"Résumé du meilleur documentaire 2020",
            photoAuteur:"Portrait de l'auteur du meilleur documentaire 2020",
        }),
        (vainqueurmeilleurebio2020= {
            premCouv:"Couverture de la meilleure biographie 2020",
            biographie:"Biographie de l'auteur de la meilleure biographie 2020",
            resume:"Résumé de la meilleure biographie 2020",
            photoAuteur:"Portrait de l'auteur de la meilleure biographie 2020",
        }),
        (vainqueurmeilleurromanfr2021= {
            premCouv:"Couverture du meilleur roman français 2021",
            biographie:"Biographie de l'auteur du meilleur roman français 2021",
            resume:"Résumé du meilleur roman français 2021",
            photoAuteur:"Portrait de l'auteur du meilleur roman français 2021",
        }),
        (vainqueurmeilleurromanetr2021= {
            premCouv:"Couverture du meilleur roman étranger 2021",
            biographie:"Biographie de l'auteur du meilleur roman étranger 2021",
            resume:"Résumé du meilleur roman étranger 2021",
            photoAuteur:"Portrait de l'auteur du meilleur roman étranger 2021",
        }),
        (vainqueurmeilleurdoc2021= {
            premCouv:"Couverture du meilleur documentaire 2021",
            biographie:"Biographie de l'auteur du meilleur documentaire 2021",
            resume:"Résumé du meilleur documentaire 2021",
            photoAuteur:"Portrait de l'auteur du meilleur documentaire 2021",
        }),
        (vainqueurmeilleurebio2021= {
            premCouv:"Couverture de la meilleure biographie 2021",
            biographie:"Biographie de l'auteur de la meilleure biographie 2021",
            resume:"Résumé de la meilleure biographie 2021",
            photoAuteur:"Portrait de l'auteur de la meilleure biographie 2021",
        }),
];

// Pour avoir des données affichées dès l'ouverture
window.onload=function démarrage()
{
    vicCat="a";
    vicYear="1";
    affichage();
}

// Lecteur du bouton catégorie
document.getElementById("vicCat").addEventListener("change", function()
{
    vicCat=document.getElementById("vicCat").value;
    affichage();
});

// Lecteur du bouton année
document.getElementById("vicYear").addEventListener("change", function()
{
vicYear=document.getElementById("vicYear").value;
affichage();
});

// Affiche les données en fonction de la catégorie et de la date entrées par l'utilisateur
function affichage()
{
    if(vicCat=="a" && vicYear=="1")
    {
        document.getElementById("bookcover").innerHTML=winners[0].premCouv;
        document.getElementById("biogContent").innerHTML=winners[0].biographie;
        document.getElementById("bookSum").innerHTML=winners[0].resume;
        document.getElementById("authorPic").innerHTML=winners[0].photoAuteur;
    }
    if(vicCat=="b" && vicYear=="1")
    {
        document.getElementById("bookcover").innerHTML=winners[1].premCouv;
        document.getElementById("biogContent").innerHTML=winners[1].biographie;
        document.getElementById("bookSum").innerHTML=winners[1].resume;
        document.getElementById("authorPic").innerHTML=winners[1].photoAuteur;
    }
    if(vicCat=="c" && vicYear=="1")
    {
        document.getElementById("bookcover").innerHTML=winners[2].premCouv;
        document.getElementById("biogContent").innerHTML=winners[2].biographie;
        document.getElementById("bookSum").innerHTML=winners[2].resume;
        document.getElementById("authorPic").innerHTML=winners[2].photoAuteur;
    }
    if(vicCat=="d" && vicYear=="1")
    {
        document.getElementById("bookcover").innerHTML=winners[3].premCouv;
        document.getElementById("biogContent").innerHTML=winners[3].biographie;
        document.getElementById("bookSum").innerHTML=winners[3].resume;
        document.getElementById("authorPic").innerHTML=winners[3].photoAuteur;
    }
    if(vicCat=="a" && vicYear=="2")
    {
        document.getElementById("bookcover").innerHTML=winners[4].premCouv;
        document.getElementById("biogContent").innerHTML=winners[4].biographie;
        document.getElementById("bookSum").innerHTML=winners[4].resume;
        document.getElementById("authorPic").innerHTML=winners[4].photoAuteur;
    }
    if(vicCat=="b" && vicYear=="2")
    {
        document.getElementById("bookcover").innerHTML=winners[5].premCouv;
        document.getElementById("biogContent").innerHTML=winners[5].biographie;
        document.getElementById("bookSum").innerHTML=winners[5].resume;
        document.getElementById("authorPic").innerHTML=winners[5].photoAuteur;
    }
    if(vicCat=="c" && vicYear=="2")
    {
        document.getElementById("bookcover").innerHTML=winners[6].premCouv;
        document.getElementById("biogContent").innerHTML=winners[6].biographie;
        document.getElementById("bookSum").innerHTML=winners[6].resume;
        document.getElementById("authorPic").innerHTML=winners[6].photoAuteur;
    }
    if(vicCat=="d" && vicYear=="2")
    {
        document.getElementById("bookcover").innerHTML=winners[7].premCouv;
        document.getElementById("biogContent").innerHTML=winners[7].biographie;
        document.getElementById("bookSum").innerHTML=winners[7].resume;
        document.getElementById("authorPic").innerHTML=winners[7].photoAuteur;
    }
    if(vicCat=="a" && vicYear=="3")
    {
        document.getElementById("bookcover").innerHTML=winners[8].premCouv;
        document.getElementById("biogContent").innerHTML=winners[8].biographie;
        document.getElementById("bookSum").innerHTML=winners[8].resume;
        document.getElementById("authorPic").innerHTML=winners[8].photoAuteur;
    }
    if(vicCat=="b" && vicYear=="3")
    {
        document.getElementById("bookcover").innerHTML=winners[9].premCouv;
        document.getElementById("biogContent").innerHTML=winners[9].biographie;
        document.getElementById("bookSum").innerHTML=winners[9].resume;
        document.getElementById("authorPic").innerHTML=winners[9].photoAuteur;
    }
    if(vicCat=="c" && vicYear=="3")
    {
        document.getElementById("bookcover").innerHTML=winners[10].premCouv;
        document.getElementById("biogContent").innerHTML=winners[10].biographie;
        document.getElementById("bookSum").innerHTML=winners[10].resume;
        document.getElementById("authorPic").innerHTML=winners[10].photoAuteur;
    }
    if(vicCat=="d" && vicYear=="3")
    {
        document.getElementById("bookcover").innerHTML=winners[11].premCouv;
        document.getElementById("biogContent").innerHTML=winners[11].biographie;
        document.getElementById("bookSum").innerHTML=winners[11].resume;
        document.getElementById("authorPic").innerHTML=winners[11].photoAuteur;
    }
    if(vicCat=="a" && vicYear=="4")
    {
        document.getElementById("bookcover").innerHTML=winners[12].premCouv;
        document.getElementById("biogContent").innerHTML=winners[12].biographie;
        document.getElementById("bookSum").innerHTML=winners[12].resume;
        document.getElementById("authorPic").innerHTML=winners[12].photoAuteur;
    }
    if(vicCat=="b" && vicYear=="4")
    {
        document.getElementById("bookcover").innerHTML=winners[13].premCouv;
        document.getElementById("biogContent").innerHTML=winners[13].biographie;
        document.getElementById("bookSum").innerHTML=winners[13].resume;
        document.getElementById("authorPic").innerHTML=winners[13].photoAuteur;
    }
    if(vicCat=="c" && vicYear=="4")
    {
        document.getElementById("bookcover").innerHTML=winners[14].premCouv;
        document.getElementById("biogContent").innerHTML=winners[14].biographie;
        document.getElementById("bookSum").innerHTML=winners[14].resume;
        document.getElementById("authorPic").innerHTML=winners[14].photoAuteur;
    }
    if(vicCat=="d" && vicYear=="4")
    {
        document.getElementById("bookcover").innerHTML=winners[15].premCouv;
        document.getElementById("biogContent").innerHTML=winners[15].biographie;
        document.getElementById("bookSum").innerHTML=winners[15].resume;
        document.getElementById("authorPic").innerHTML=winners[15].photoAuteur;
    }
};