import React, { useState, Suspense, useContext } from "react";
//material components
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
//dayjs
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
//created components
import { ImageCarousel } from "./ImageCarousel";
//context

import { UserContext } from "../Context/UserContext";
const Questionnaire = React.lazy(() =>
  import("./Questionnaire").then(({ Questionnaire }) => ({
    default: Questionnaire,
  }))
);

//This component is reused to show a user their post before its made.
// so things like postId created at wouldn't exist yet
interface Props {
  post?: {
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
    postId?: string;
    createdAt?: string;
    totalResponses?: number;
    handle?: string;
    userImage?: string;
    images?: Array<string>;
    email?: string;
  };
}

const styles = makeStyles({
  card: {
    width: "95%",
    margin: "auto",
    marginBottom: "5px",
  },
  expandIcon: {
    marginLeft: "85%",
  },
});

export const PostCard: React.FC<Props> = ({ post }) => {
  const [expanded, toggleExpansion] = useState(false);

  const imagesArray = ["https://picsum.photos/id/1018/1000/600/"];

  const classes = styles();

  const userObj = useContext(UserContext);

  const renderCard = () => {
    if (!post) {
      return null;
    }
    dayjs.extend(relativeTime);
    return (
      <Card className={classes.card}>
        {post.postId ? (
          <CardHeader
            //avatar={<Avatar alt={post.handle} src={post.userImage} />}
            title={`Posted by ${post.handle}`}
            subheader={dayjs(post.createdAt).fromNow()}
          />
        ) : null}

        <CardContent>
          <ImageCarousel images={post.images ? post.images : imagesArray} />
          {userObj.token.length > 2 ? null : (
            <Typography variant="h6">Log in to answer posts!</Typography>
          )}
          {userObj.email.length > 1 && userObj.email === post.email ? (
            <Typography variant="h6">
              You can't answer your own post!
            </Typography>
          ) : null}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            disabled={
              !(userObj.token.length > 2) || userObj.email === post.email
            }
            className={classes.expandIcon}
            onClick={() => toggleExpansion(!expanded)}
          >
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </CardActions>
        <Collapse in={!post.postId || expanded}>
          <CardContent>
            <Suspense fallback={<h3>Questions being loaded...</h3>}>
              <Questionnaire questions={post.questions} postId={post.postId} />
            </Suspense>
          </CardContent>
        </Collapse>
      </Card>
    );
  };

  return <>{renderCard()}</>;
};
