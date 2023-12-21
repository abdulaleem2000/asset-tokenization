import { useState } from "react";

const FAQItem = ({ id, question, answer }: any) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <li
      onClick={toggleAnswerVisibility}
      style={{ cursor: "pointer", marginBottom: "20px" }}
    >
      <div
        style={{
          fontWeight: "bold",
          color: "#3498db",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
          fontSize: "larger",
          padding: "10px",
        }}
      >
        {question}
      </div>
      {isAnswerVisible && <div style={{ color: "#333" }}>Answer: {answer}</div>}
    </li>
  );
};

export default FAQItem;
