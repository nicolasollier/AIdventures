import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../../contexts/PlayerContext";
import AttributeBadge from "../../components/badges/attributeBadge/AttributeBadge";
import styles from "./Welcome.module.scss";

const Welcome = () => {
  const navigate = useNavigate();
  const { playerInfos, setPlayerInfos } = useContext(PlayerContext);

  const createConversation = async () => {
    localStorage.setItem("playerInfos", JSON.stringify(playerInfos));
    navigate("/conversation");
  };

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

  const isFormInvalid = () => {
    return (
      playerInfos.name === "" ||
      playerInfos.race === "" ||
      playerInfos.class === "" ||
      playerInfos.alignment === "" ||
      playerInfos.gender === ""
    );
  };

  return (
    <div className={styles.welcome}>
      <div className={styles.welcome__form}>
        <div className={styles.welcome__formControl}>
          <label className={styles.welcome__label}>Nom du personnage</label>
          <input
            type="text"
            className={styles.welcome__input}
            placeholder="Entrez votre nom"
            value={playerInfos.name}
            onChange={(e) =>
              setPlayerInfos({ ...playerInfos, name: e.target.value })
            }
          />
        </div>

        <div className={styles.welcome__formControl}>
          <label className={styles.welcome__label}>Genre</label>
          <div className={styles.welcome__formControl__attrs}>
            {Object.entries(genders).map(([key, value]) => (
              <AttributeBadge
                key={key}
                isActive={playerInfos.gender === value}
                onClick={() =>
                  setPlayerInfos({ ...playerInfos, gender: value })
                }
              >
                {value}
              </AttributeBadge>
            ))}
          </div>
        </div>

        <div className={styles.welcome__formControl}>
          <label className={styles.welcome__label}>Race</label>
          <div className={styles.welcome__formControl__attrs}>
            {Object.entries(races).map(([key, value]) => (
              <AttributeBadge
                key={key}
                isActive={playerInfos.race === value}
                onClick={() => setPlayerInfos({ ...playerInfos, race: value })}
              >
                {value}
              </AttributeBadge>
            ))}
          </div>
        </div>

        <div className={styles.welcome__formControl}>
          <label className={styles.welcome__label}>Classe</label>
          <div className={styles.welcome__formControl__attrs}>
            {Object.entries(classes).map(([key, value]) => (
              <AttributeBadge
                key={key}
                isActive={playerInfos.class === value}
                onClick={() => setPlayerInfos({ ...playerInfos, class: value })}
              >
                {value}
              </AttributeBadge>
            ))}
          </div>
        </div>

        <div className={styles.welcome__formControl}>
          <label className={styles.welcome__label}>Alignements</label>
          <div className={styles.welcome__formControl__attrs_alignment}>
            {Object.entries(alignments).map(([key, value]) => (
              <AttributeBadge
                key={key}
                isActive={playerInfos.alignment === value}
                onClick={() =>
                  setPlayerInfos({ ...playerInfos, alignment: value })
                }
              >
                {value}
              </AttributeBadge>
            ))}
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={isFormInvalid()}
        className={styles.welcome__button}
        onClick={createConversation}
      >
        Commencer l'aventure
      </button>
    </div>
  );
};

export default Welcome;
