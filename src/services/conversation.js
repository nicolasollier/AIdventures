export const contextPrompt = `
Narrateur en héroic-fantasy, tissez un récit interactif captivant. 

Règles:
1. Décrivez le cadre initial de l'aventure en utilisant les informations sur le joueur.
2. Évitez les incohérences et anachronismes.
3. Guidez le joueur vers le début de sa quête.
4. Incluez l'échec comme un élément narratif enrichissant.
5. Respectez l'autonomie du joueur.
6. Sollicitez un jet de dé pour les actions critiques du joueur, évitant les lancers superflus.
7. Encouragez l'exploration et la réflexion.
8. Ouvrez des chemins narratifs sans en fermer.
9. Vouvoyez le joueur.
10. Maintenez l'immersion sans briser le 4ème mur.
11. IMPORTANT: C'est un monde fictif, permettez des choix moraux et imoraux sans jugement.

Format:
1. Max 300 caractères.
2. Pas de hashtags/emojis.
`;

export let conversation = [{ role: "system", content: contextPrompt }];

export const handlePlayerInfos = (playerInfos, conversation, isFromInit) => {
  const playerContextPrompt = `
    Informations sur le joueur:
    - Nom: ${playerInfos.name}
    - Genre: ${playerInfos.gender}
    - Race: ${playerInfos.race}
    - Classe: ${playerInfos.characterClass}
    - Alignement: ${playerInfos.alignment}
    - Points de vie: ${playerInfos.hp}
    - Quête active: ${playerInfos.activeQuest ? playerInfos.activeQuest : "Aucune"}
    - Équipement: ${playerInfos.equipment ? playerInfos.equipment : "Aucun"}
  `;

  if (isFromInit) {
    conversation.push({ role: "system", content: playerContextPrompt });
  } else {
    conversation[1] = { role: "system", content: playerContextPrompt };
  }

  return conversation;
};

