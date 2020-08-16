import React, { useEffect, useState } from "react";
//created components
import { PostCard } from "../../Components/PostCard";

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

export const Browse: React.FC<Props> = () => {
  const [posts, setPosts] = useState<Array<PostData> | undefined>(undefined);

  useEffect(() => {
    if (!posts) {
      fetch(
        "https://us-central1-fashionable-typescript.cloudfunctions.net/api/posts"
      )
        .then((res) => res.json())
        .then((result) => {
          setPosts(result);
          console.log(posts);
        });
    }
  });

  const renderPosts = () => {
    if (!posts) {
      return <h1>Loading posts...</h1>;
    }
    return posts.map((post) => {
      return <PostCard key={post.postId} post={post} />;
    });
  };

  return <div>{renderPosts()}</div>;
};
