import React, { useState, useEffect } from "react";
//material components
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core";
//victory components (graph)
import { VictoryBar, VictoryAxis, VictoryChart, VictoryLabel } from "victory";

const styles = makeStyles({
  card: {
    marginLeft: "10px",
    marginTop: "10px",
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
  question: string;
  answers: Array<{
    answers: number;
    responses: number;
    label: number;
  }>;
}

interface Props {
  post: PostData;
}

export const IndividualPost: React.FC<Props> = ({ post }) => {
  const classes = styles();
  const data = [
    {
      question: "what are animals",
      answers: [
        { answers: 1, responses: 13000, label: 13000 },
        { answers: 2, responses: 16500, label: 16500 },
        { answers: 3, responses: 14250, label: 14250 },
        { answers: 4, responses: 19000, label: 19000 },
      ],
    },
    {
      question: "what the frick frack",
      answers: [
        { answers: 1, responses: 13000, label: 13000 },
        { answers: 2, responses: 16500, label: 16500 },
        { answers: 3, responses: 14250, label: 14250 },
        { answers: 4, responses: 19000, label: 19000 },
      ],
    },
    {
      question: "what are animals",
      answers: [
        { answers: 1, responses: 13000, label: 13000 },
        { answers: 2, responses: 16500, label: 16500 },
        { answers: 3, responses: 14250, label: 14250 },
        { answers: 4, responses: 19000, label: 19000 },
      ],
    },
    {
      question: "what the frick frack",
      answers: [
        { answers: 1, responses: 13000, label: 13000 },
        { answers: 2, responses: 16500, label: 16500 },
        { answers: 3, responses: 14250, label: 14250 },
        { answers: 4, responses: 19000, label: 19000 },
      ],
    },
  ];

  const [formattedData, setFormattedData] = useState<
    Array<graphFormat> | undefined
  >(undefined);

  useEffect(() => {
    if (!formattedData) {
      console.log(post);
      const newData: Array<graphFormat> = [];
      post.questions.forEach((question) => {
        let temp: any = {};
        temp.question = question.questionText;
        temp.answers = [];
        Object.values(question.answers).forEach((answer, index) => {
          temp.answers.push({
            answers: index,
            responses: answer?.timesAnswered,
            label: answer?.timesAnswered,
          });
        });
        newData.push(temp);
      });
      console.log(newData);
      setFormattedData(newData);
    }
  });

  const renderGraph = (questionNumber: number) => {
    if (!formattedData) return null;
    return (
      <>
        <Typography variant="h6">
          {formattedData[questionNumber].question}
        </Typography>
        <VictoryChart
          // domainPadding will add space to each side of VictoryBar to
          // prevent it from overlapping the axis
          domainPadding={20}
        >
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Answer 1", "Answer 2", "Answer 3", "Answer 4"]}
          />
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={(x) => `${x}`}
          />
          <VictoryBar
            data={formattedData[questionNumber].answers}
            x="answers"
            y="responses"
          />
          <VictoryLabel />
        </VictoryChart>
      </>
    );
  };

  const renderResponses = () => {
    if (!formattedData) return null;
    return formattedData.map((question, index) => {
      return (
        <Grid item xs={12}>
          <Card className={classes.card}>
            <Grid container>
              <Grid item xs={12}>
                {renderGraph(index)}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      );
    });
  };

  return <>{formattedData ? renderResponses() : null}</>;
};
