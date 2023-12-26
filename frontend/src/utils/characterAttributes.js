const races = {
  elfe: "Elfe",
  nain: "Nain",
  humain: "Humain",
  orque: "Orc",
};

const classes = {
  guerrier: "Guerrier",
  mage: "Mage",
  voleur: "Voleur",
  prêtre: "Prêtre",
};

const alignments = {
  bon: "Bon",
  neutre: "Neutre",
  mauvais: "Mauvais",
};

const genders = {
  femme: "Femme",
  homme: "Homme",
};

const raceEquipmentWarlockMap = {
  orc: "une cotte de maille et un bouclier, une hache de guerre",
  nain: "une cotte de maille et un bouclier, un marteau gravé",
  elfe: "une cotte de maille et un bouclier, une lance",
  humain: "une cotte de maille et un bouclier, une épée longue",
};

const raceEquipmentMageMap = {
  orc: "un crane magique, une toge, un baton de mage",
  nain: "une sacoche de pierres runiques, une toge, un baton de mage",
  elfe: "une racine de l'arbre monde, une toge, un baton de mage",
  humain: "un orbe de verre, une toge, un baton de mage",
};

const raceEquipmentThiefMap = {
  orc: "une masse à pointe, une armure de cuir, un kit de crochetage",
  nain: "une masse gravée, une armure de cuir, un kit de crochetage",
  elfe: "une dague elfique, une armure de cuir, un kit de crochetage",
  humain: "une rapière, une armure de cuir, un kit de crochetage",
};

const raceEquipmentPriestMap = {
  orc: "une toge, un baton de prêtre, un totem sacré",
  nain: "une toge, un baton de prêtre, une sacoche de braises sacrées",
  elfe: "une toge, un baton de prêtre, une fleur de l'arbre monde",
  humain: "une toge, un baton de prêtre, un calice sacré",
};

const definePlayerStartingKit = (setPlayerInfos, playerInfos) => {
  const lowerCasePlayerInfos = Object.fromEntries(
    Object.entries(playerInfos).map(([key, value]) => [
      key,
      typeof value === "string" ? value.toLowerCase() : value,
    ])
  );

  const { race, class: playerClass, alignment, gender } = lowerCasePlayerInfos;
  console.log(race, playerClass, alignment, gender);

  if (playerClass === "guerrier") {
    const defaultEquipment =
      "une cotte de maille et un bouclier, une épée longue";

    setPlayerInfos({
      ...lowerCasePlayerInfos,
      equipment: raceEquipmentWarlockMap[race] || defaultEquipment,
    });
  }

  if (playerClass === "mage") {
    const defaultEquipment = "un bâton de mage, une toge";

    setPlayerInfos({
      ...lowerCasePlayerInfos,
      equipment: raceEquipmentMageMap[race] || defaultEquipment,
    });
  }

  if (playerClass === "voleur") {
    const defaultEquipment =
      "deux dague, une armure de cuir, un kit de crochetage";

    setPlayerInfos({
      ...lowerCasePlayerInfos,
      equipment: raceEquipmentThiefMap[race] || defaultEquipment,
    });
  }

  if (playerClass === "prêtre") {
    const defaultEquipment = "un bâton de prêtre, une toge, un livre sacré";

    setPlayerInfos({
      ...lowerCasePlayerInfos,
      equipment: raceEquipmentPriestMap[race] || defaultEquipment,
    });
  }
};

export { races, classes, alignments, genders, definePlayerStartingKit };
