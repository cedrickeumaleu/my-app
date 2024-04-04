export const updateUserDataApi = async (userId, newData) => {
  try {
    // Code pour mettre à jour les données utilisateur dans votre API
    // Assurez-vous de remplacer cela par votre logique d'API réelle
    const response = await fetch(`votre-url-api/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error("Failed to update user data");
    }

    const updatedUserData = await response.json();
    return updatedUserData;
  } catch (error) {
    throw new Error(`Error updating user data: ${error.message}`);
  }
};
