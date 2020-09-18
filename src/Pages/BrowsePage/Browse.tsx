import React, { useEffect, useState } from "react";
//progress circle
import { CircularProgress } from "@material-ui/core";
//created components
import { PostCard } from "../../Components/PostCard";
//styles
import { makeStyles } from "@material-ui/core/styles";
interface Props {}

interface PostData {
  questions: Array<{
    questionText: string;
    totalResponses: number;
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
  postId: string;
  createdAt: string;
  totalResponses: number;
  handle: string;
  userImage: string;
}

const styles = makeStyles({
  content: {
    marginBottom: "100px",
    margninTop: "15px",
  },
  loadingCircle: {
    position: "fixed",
    top: "50%",
    left: "50%",
  },
});

export const Browse: React.FC<Props> = () => {
  const [posts, setPosts] = useState<Array<PostData> | undefined>(undefined);

  const classes = styles();

  useEffect(() => {
    if (!posts) {
      fetch(
        "https://us-central1-fashionable-typescript.cloudfunctions.net/api/posts"
      )
        .then((res) => res.json())
        .then((result) => {
          setPosts(result);
        });
    }
  });

  const renderPosts = () => {
    if (!posts) {
      return <CircularProgress className={classes.loadingCircle} />;
    }
    return posts.map((post) => {
      return <PostCard key={post.postId} post={post} />;
    });
  };

  return <div className={classes.content}>{renderPosts()}</div>;
};
