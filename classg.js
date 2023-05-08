class Cv {
    constructor(nom, prenom,annee) {
      this.nom = nom;
      this.prenom = prenom;
      this.formations=[];
      this.competences =[];
      this.loisirs = [];
      this.langues =[];
      this.annee=[];
      this.etablissement=[];
    }
    
    miseajourform(annee,formations,etablissement){
      var i=0
      alert("vous devez saisir des informations suplementaires concernant votre cv ! l'operation est facultative vous pouvez donc l'annuler !")

      for(i=0;i<=2;i++){
       annee=prompt("année de la formation :");
       formations=prompt("saisir formation  :");
       etablissement=prompt("Lieu de la formation :")
       this.formations.push(annee+" : "+formations+" : "+etablissement);
      }
          
      }

      miseajourcomp(competences){
        var i=0
        for(i=0;i<=1;i++){
         competences=prompt("ajoutez competences!")
         this.competences.push(competences);
        }
            
        }
      miseajourloisirs(loisirs){
          var i=0
          for(i=0;i<=1;i++){
           loisirs=prompt("ajoutez loisirs")
           this.loisirs.push(loisirs);
          }
              
        }

        miseajourlang(langues){
          var i=0
          for(i=0;i<=1;i++){
           langues=prompt("ajoutez langues!")
           if(langues===null){
            console.log("ok")
           }
           this.langues.push(langues);
          }
              
          }
}


  
  export { Cv };
  class Utilisateur {
    constructor(nom, email, motDePasse) {
      this.nom = nom;
      this.email = email;
      this.motDePasse = motDePasse;
    }
  
    afficherInfo() {
      return `Nom: ${this.nom}, Email: ${this.email}`;
    }
  }
export {Utilisateur};


class Session {
    constructor(username) {
      this.username = username;
    }
    
    login(login, password) {
      if (login=== "admin" && password === "admin") {
       console.log(login, " + est connecté ");
      } 
      else {
        return false;
      }
    }
  
    logout() {
      console.log("Session ouverte !");
    }
  
    isLoggedIn() {
      return this.username !== null;
    }
  }

export{Session};

class CareerProfile {
    constructor(jobTitle, department, location, qualifications, experience) {
      this.jobTitle = jobTitle;
      this.department = department;
      this.location = location;
      this.qualifications = qualifications;
      this.experience = experience;
    }
 
  
}
class Compte {
  constructor(first_names,sirname,birthdate,full_number,phone,pays) {
    this.first_names=first_names;
    this.sirname=sirname;
    this.birthdate=birthdate;
    this.full_number=full_number;
    this.phone=phone;
    this.pays=pays;
  }

  estValide() {
  
    return true; 
  }

  creer() {
    if (this.estValide()) {
      console.log(`Compte créé avec succès pour ${this.email}`);
    } else {
      console.log("Le compte n'est pas valide");
    }
  }
}

class Recruteur {
  constructor(typeJob, entreprise) {
    this.typeJob=typeJob;
    this.entreprise = entreprise;
  }
  
  publierOffre(poste, salaire) {
    console.log(`[${this.typeJob} - ${this.entreprise}] : Nous recrutons pour le poste de ${poste} avec un salaire de ${salaire} par an.`);
  }
}

class Demandeur {
  constructor(nom, domaine) {
    this.nom = nom;
    this.domaine = domaine;
  }
  
  postuler(poste) {
    
  }
}
class Administrateur extends Utilisateur{
  constructor(connexion){
    this.connexion=true;
  }
}
export{Administrateur};
export{Recruteur};
export{Demandeur};
export{Compte};
export{CareerProfile};

