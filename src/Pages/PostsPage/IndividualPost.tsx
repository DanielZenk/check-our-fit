import React from "react";
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

export const IndividualPost: React.FC = () => {
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

  const renderGraph = (questionNumber: number) => {
    return (
      <>
        <Typography variant="h6">{data[questionNumber].question}</Typography>
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
            data={data[questionNumber].answers}
            x="answers"
            y="responses"
          />
          <VictoryLabel />
        </VictoryChart>
      </>
    );
  };

  const renderResponses = () => {
    return data.map((question, index) => {
      return (
        <Grid item xs={6}>
          <Card className={classes.card}>
            <Grid container>
              <Grid item xs={8}>
                {renderGraph(index)}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      );
    });
  };

  return <>{renderResponses()}</>;
};
