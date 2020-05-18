import React, { useState } from "react";
//material components
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
//created components
import { ImageCarousel } from "./ImageCarousel";
import { Questionnaire } from "./Questionnaire";

interface Props {
  post?: {
    questions: Array<{
      questionText: string;
      totalResponses: number;
      answers?: object;
    }>;
    postId: string;
    createdAt: string;
    totalResponses: number;
    handle: string;
    userImage: string;
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

  const imagesArray = [
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1018/1000/600/",
  ];

  const classes = styles();

  const renderCard = () => {
    if (!post) {
      return null;
    }
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar alt={post.handle} src={post.userImage} />}
          title="Need to add title"
          subheader={post.createdAt}
        />
        <CardContent>
          <ImageCarousel images={imagesArray} />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={classes.expandIcon}
            onClick={() => toggleExpansion(!expanded)}
          >
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </CardActions>
        <Collapse in={expanded}>
          <CardContent>
            <Questionnaire questions={post.questions} />
          </CardContent>
        </Collapse>
      </Card>
    );
  };

  return <>{renderCard()}</>;
};
