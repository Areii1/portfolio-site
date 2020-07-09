import React from "react";
import styled from "styled-components";
import { ProfileDetails } from "../../../Types";

type Props = {
  profileDetails: ProfileDetails;
};

export const DetailsList = (props: Props) => {
  return (
    <List>
      <ListItem>
        <ListItemLabel>email:</ListItemLabel>
        <ListItemText>{props.profileDetails.email}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemLabel>gitlab:</ListItemLabel>
        <ListItemText>
          {`gitlab.com/${props.profileDetails.gitlabUsername}`}
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemLabel>github:</ListItemLabel>
        <ListItemText>
          {`github.com/${props.profileDetails.githubUsername}`}
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemLabel>linkedin:</ListItemLabel>
        <ListItemText>
          {`linkedin.com/in/${props.profileDetails.linkedInPageName}`}
        </ListItemText>
      </ListItem>
    </List>
  );
};

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`;

const ListItem = styled.li`
  display: flex;
  color: white;
  margin: 0.5rem 0;
`;

const ListItemLabel = styled.h6`
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
`;

const ListItemText = styled.h6`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
`;
