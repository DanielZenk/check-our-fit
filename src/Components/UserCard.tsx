import React from "react";
//material components
import { Avatar, Card, CardHeader } from "@material-ui/core";

interface Props {
  createdAt: string;
  userImage: string;
}

export const UserCard: React.FC<Props> = () => {
  return (
    <>
      <Card>
        <CardHeader avatar={<Avatar>DZ</Avatar>} />
      </Card>
    </>
  );
};
