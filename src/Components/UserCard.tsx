import React, { useState } from "react";
//material components
import { Avatar, Card, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  createdAt: string;
  userImage: string;
}

const styles = makeStyles({
  root: {
    width: 250,
  },
  appbar: {
    backgroundColor: "#9b0a0a",
    color: "white",
    textAlign: "center",
    width: "100%",
  },
  menuButton: {
    marginRight: "2px",
    marginLeft: "5px",
    width: "35px",
  },
});

export const UserCard: React.FC<Props> = () => {
  return (
    <>
      <Card>
        <CardHeader avatar={<Avatar>DZ</Avatar>} />
      </Card>
    </>
  );
};
