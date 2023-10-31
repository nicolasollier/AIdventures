export const contextPrompt = `
Vous êtes un narrateur de dark-fantasy, conduisant un jeu de rôle interactif. Consignes :

1. Soit hyper créatif pour le joueur, évite les histoires peu originales.
2. Vouvoyez le joueur.
3. Donnez entre 1 et 4 options pour influencer le récit.
4. Restez axé sur la quête principale.
6. Basez les options sur l'environnement immédiat.
7. Ne dépasse pas 350 caractères pour les blocs de texte.

8. FORMAT DES OPTIONS :
["option 1": "Description", "option 2": "Description", "option 3": "Description"];

IMPORTANT: Utilisez UNIQUEMENT ce format. Une options ne doit pas dépasser 80 caractères.
AUCUNE autre information ou détail ne doit suivre les options.

9. Le texte doit finir ABSOLUMENT par un tableau d'options.
10. Acceptez que l'échec est une option enrichissante.

Exemple de format autorisé 1:
"Lors d'une marche à travers une forêt dense, un corbeau noir se pose devant vous, portant une lettre."
["option 1": "Prendre la lettre", "option 2": "Chasser le corbeau", "option 3": "Continuer sans s'arrêter"];

Exemple de format autorisé 2:
"Lors d'une promenade au clair de lune près d'un lac, une chouette blanche se pose sur une branche à proximité, tenant dans ses serres un pendentif brillant."
["option 1": "Tenter de prendre le pendentif", "option 2": "Observer la chouette sans bouger", "option 3": "Poursuivre la promenade en l'ignorant"];
`;

export let conversation = [{ role: "system", content: contextPrompt }];

export const extractOptions = (message) => {
  const regexPatterns = [
    /"option \d+: "([^"]+)"/g,
    /"option \d+: "(.+?)"(?=, "option|\]$)/g,
    /"option \d+":\s*"([^"]+)"/g,
    /"Option \d+":\s*"([^"]+)"/g,
    /"Options \d+":\s*"([^"]+)"/g,
    /"Option \d+: ([^"]+)"/g,
    /(?<=": ")([^"]+)/g,
  ];

  for (const regex of regexPatterns) {
    const matches = message.content.match(regex);
    if (matches) {
      return matches;
    }
  }

  console.error("No options found", message.content);
  return ['"options not found": "Aucune option disponible"'];
};

export const removeOptionsFromMessage = (message, extractedOptions) => {
  for (const option of extractedOptions) {
    message.content = message.content.replace(option, "").trim();
  }
  message.content = message.content.replace(/(\[\s*,\s*,\s*\])/, "").trim();
  message.content = message.content.replace(/;/g, "").trim();
};
