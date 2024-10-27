// fonction pour générer un mot aléatoire

async function GenererMotAleatoire() {
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word?number=1&lang=fr');

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des mots');
        }

        const mots = await response.json();
        console.log("Mot généré :", mots[0]); // pour le debug
        return mots[0];
    } catch (error) {
        console.error(error);
        return null; // En cas d'erreur, retourne null
    }
}