import React, { useState, useEffect } from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core";
//victory components (graph)
//nivo pie chart
import { ResponsivePie, PieDatum } from "@nivo/pie";

const styles = makeStyles({
  card: {
    width: "95%",
    margin: "auto",
    marginTop: "15px",
    height: "100%",
  },
  cardContainer: {
    height: "300px",
  },
});

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

interface graphFormat {
  id: string;
  label: string;
  value: number;
  color: string;
}

interface Props {
  post: PostData;
}

export const IndividualPost: React.FC<Props> = ({ post }) => {
  const classes = styles();

  const [formattedData, setFormattedData] = useState<
    Array<PieDatum[]> | undefined
  >(undefined);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  useEffect(() => {
    if (!formattedData) {
      console.log(post);
      const newData: Array<PieDatum[]> = [];
      post.questions.forEach((question, qIndex) => {
        newData[qIndex] = [];
        Object.values(question.answers).forEach((answer, index) => {
          let temp: any = {};
          temp.id = answer?.answerText;
          temp.label = answer?.answerText;
          temp.value = answer?.timesAnswered;
          temp.color = `hsl(${getRandomInt(300)}, ${getRandomInt(
            100
          )}%, ${getRandomInt(100)}%)`;
          newData[qIndex].push(temp);
        });
      });
      console.log(newData);
      setFormattedData(newData);
    }
  });

  const renderGraph = (questionNumber: number) => {
    if (!formattedData) return null;
    return (
      <>
        <ResponsivePie
          data={formattedData[questionNumber]}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: "nivo" }}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: "color" }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </>
    );
  };

  const renderResponses = () => {
    if (!formattedData) return null;
    return formattedData.map((question, index) => {
      return (
        <Grid item xs={12}>
          <div className={classes.cardContainer}>
            <Card raised className={classes.card}>
              <Typography variant="h6">
                {post.questions[index].questionText}
              </Typography>
              {renderGraph(index)}
            </Card>
          </div>
        </Grid>
      );
    });
  };

  return <>{formattedData ? renderResponses() : null}</>;
};
