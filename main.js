/* Objectif : créer un site qui entraîne à l'écriture, avec des mots ou phrases générés aléatoirement

 --- TODO : faire un algorithme de génération de phrase avec une logique
 --- FIXME :

 Author : Triliaxy


 Décomposition du code :

 - Ce qui concerne les scores est dans score.js
 - La fonction pour générer les mots aléatoires est dans mot-aleatoires.js
 - La fonction principale, le mode 2 et le l'appel de la fonction principale sont dans ce fichier

 */


let ChoixMode = prompt("Vous souhaitez des mots ( entrez 1 ) ou des suites de mots ( entrez 2 ) ?");

prompt("Appuyez sur annuler pendant l'entraînement pour l'arrêter, et appuyer sur ok pour commencer l'entraînement");


// Fonction pour générer une phrase aléatoire

async function FonctionPhraseAleatoire() {
    let mots = [];
    for (let i = 0; i < 5; i++) { // Générer 5 mots aléatoires
        let mot = await GenererMotAleatoire();
        if (mot) {
            mots.push(mot);
        }
    }
    return mots.join(' '); // Retourner la phrase
}


// Fonction principale asynchrone

async function demarrerEntrainement() {
    let MotUtilisateur = 0;

    if (ChoixMode === "1") {
        while (MotUtilisateur !== null) {
            let MotAleatoire = await GenererMotAleatoire();
            if (MotAleatoire) {
                MotUtilisateur = prompt("entrez le mot \"" + MotAleatoire + "\"");
                if (MotUtilisateur === null) {
                    break;
                } else {
                    NombreQuestion++;
                    if (MotUtilisateur.trim().toLowerCase() === MotAleatoire.trim().toLowerCase()) {
                        Score++;
                    }
                }
            } else {
                console.log("Aucun mot n'a été récupéré, réessayer.");
                break;
            }
        }

        if (NombreQuestion > 0) {
            Reussite = CalculReussite(Score, NombreQuestion);
        } else {
            Reussite = 0;
        }

        let MessageScoreFinal = CalculScore(Score, NombreQuestion, Reussite);
        console.log(MessageScoreFinal);
        prompt(MessageScoreFinal);

    } else if (ChoixMode === "2") {
        while (MotUtilisateur !== null) {
            let PhraseAleatoire = await FonctionPhraseAleatoire(); // Utiliser await ici
            if (PhraseAleatoire) {
                MotUtilisateur = prompt("entrez la phrase \"" + PhraseAleatoire + "\"");
                if (MotUtilisateur === null) {
                    break;
                } else {
                    NombreQuestion++;
                    if (MotUtilisateur.trim().toLowerCase() === PhraseAleatoire.trim().toLowerCase()) {
                        Score++;
                    }
                }
            } else {
                console.log("Aucune phrase n'a été récupérée, réessayer.");
                break;
            }
        }

        Reussite = CalculReussite(Score, NombreQuestion);
        let MessageScoreFinal = CalculScore(Score, NombreQuestion, Reussite);
        console.log(MessageScoreFinal);
        prompt(MessageScoreFinal);

    } else {
        console.log("erreur, l'utilisateur a entré \"" + ChoixMode + "\", qui n'était pas compris dans les choix");
    }
}


// Démarrer l'entraînement
demarrerEntrainement();
