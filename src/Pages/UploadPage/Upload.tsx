import React, { useEffect, useState } from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
//created components
import { PostCard } from "../../Components/PostCard";

interface Props {}

interface PostData {
  questions: Array<{
    questionText: string;
    answers: {
      0?: {
        timesAnswered: number;
        answerText: string;
      };
      1?: {
        timesAnswered: number;
        answerText: string;
      };
      2?: {
        timesAnswered: number;
        answerText: string;
      };
      3?: {
        timesAnswered: number;
        answerText: string;
      };
    };
  }>;
}

export const Upload: React.FC<Props> = () => {
  const [post, setPost] = useState<Array<PostData> | undefined>(undefined);

  return <div>upload !!</div>;
};
