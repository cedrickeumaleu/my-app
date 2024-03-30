const BASE_URL = "http://localhost:3001/api/v1";

// Fonction pour récupérer les données des utilisateurs depuis l'API
export async function getUserData() {
  try {
    // Récupérer les données
    const response = await fetch(`${BASE_URL}/user/signup`);
    const data = await response.json();
    console.log("Données de l'utilisateur :", data);

    if (data) {
      return data;
    } else {
      console.log("Aucune donnée utilisateur trouvée");
      return null;
    }

    // Vous pouvez également utiliser les données récupérées pour afficher ou utiliser
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
}
