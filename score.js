// fichier contenant ce qui concerne le score

let Score = 0;
let NombreQuestion = 0;
let Reussite;


// bloc fonction CalculScore

{
    function CalculScore(Scoref, NombreQuestionf, Reussitef) {
        let MessageScore = "Votre score est de " + Scoref + " sur " + NombreQuestionf + " questions, vous avez " + (Reussitef * 100).toFixed(2) + " % de réussite";
        return MessageScore;
    }
}


// bloc fonction CalculReussite

{
    function CalculReussite(Scoref2, NombreQuestionf2) {
        return Scoref2 / NombreQuestionf2;
    }
}