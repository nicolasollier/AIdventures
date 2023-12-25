import React, { useEffect, useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import ActionBar from "../../components/layout/ActionBar";
import { initConversation } from "../../utils/localApi";
import { ConversationContext } from "../../contexts/ConversationContext";
import { PlayerContext } from "../../contexts/PlayerContext";
import styles from "./Chatbox.module.scss";

const Chatbox = () => {
  const { conversation, setConversation } = useContext(ConversationContext);
  const { playerInfos } = useContext(PlayerContext);
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);

    initConversation(playerInfos).then((data) => {
      setConversation(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  return (
    <div className={styles.chatbox}>
      <div className={styles.chatbox__messages}>
        {conversation
          .filter((message) => message.role !== "system")
          .map((message, index) => (
            <div
              key={index}
              className={`${styles.chatbox__message} ${
                message.role === "user" ? styles.user : styles.other
              }`}
            >
              <motion.div
                className={`${styles.chatbox__bubble} ${
                  message.role === "user"
                    ? styles.chatbox__bubbleUser
                    : styles.chatbox__bubbleOther
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1, ease: "easeIn" }}
              >
                <p className={styles.chatbox__text}>
                  {message.role === "user"
                    ? `Vous: ${message.content}`
                    : message.content}
                </p>
              </motion.div>
            </div>
          ))}
        <div ref={messagesEndRef} />
      </div>

      <ActionBar
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        conversation={conversation}
        setConversation={setConversation}
      />
    </div>
  );
};

export default Chatbox;
