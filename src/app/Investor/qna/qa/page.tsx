// pages/qa/[id].js
"use client";
import { useRouter } from "next/router";
import { qaData } from "../../../../models/chat/questions";

const QuestionDetail = () => {
  //const router = useRouter();
  //const { id } = router.query;

  //parseInt(id);
  //const question = qaData.find((qa) => qa.id === parseInt(id, 10));
  const question = qaData[0];

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div>
      <h1>{question.question}</h1>
      <p>{question.answer}</p>
    </div>
  );
};

export default QuestionDetail;
