import React from "react";
import styled from "styled-components";
import { ProfileDetails } from "../../../Types";
import { Lan } from "../../../pages/index";
import { EmailIcon } from "../../icons/EmailIcon";
import { LocationIcon } from "../../icons/LocationIcon";
import { GitlabIcon } from "../../icons/GitlabIcon";
import { GithubIcon } from "../../icons/GithubIcon";
import { LinkedInIcon } from "../../icons/LinkedIn";

type Props = {
  profileDetails: ProfileDetails;
  language: Lan;
};

export const DetailsList = (props: Props) => {
  const iconSize = 25;
  return (
    <List>
      <ListItem>
        <ListItemLabel>
          <LocationIcon fillColor="white" size={iconSize} />
        </ListItemLabel>
        <ListItemLink
          href={props.profileDetails.location.mapsLink}
          title={props.profileDetails.location.mapsLink}
          target="_blank"
        >
          {`${props.profileDetails.location.city} / ${props.profileDetails.location.district}`}
        </ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLabel>
          <EmailIcon fillColor="white" size={iconSize} />
        </ListItemLabel>
        <ListItemLink
          href={`mailto:${props.profileDetails.email}`}
          title={props.profileDetails.email}
          target="_blank"
        >
          {props.profileDetails.email}
        </ListItemLink>
      </ListItem>
      {props.profileDetails.gitlabUsername && (
        <ListItem>
          <ListItemLabel>
            <GitlabIcon fillColor="white" size={iconSize} />
          </ListItemLabel>
          <ListItemLink
            href={`https://gitlab.com/${props.profileDetails.gitlabUsername}`}
            title={`https://gitlab.com/${props.profileDetails.gitlabUsername}`}
            target="_blank"
          >
            {props.profileDetails.gitlabUsername}
          </ListItemLink>
        </ListItem>
      )}
      <ListItem>
        <ListItemLabel>
          <GithubIcon fillColor="white" size={iconSize} />
        </ListItemLabel>
        <ListItemLink
          href={`https://github.com/${props.profileDetails.githubUsername}`}
          title={`https://github.com/${props.profileDetails.githubUsername}`}
          target="_blank"
        >
          {props.profileDetails.githubUsername}
        </ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLabel>
          <LinkedInIcon fillColor="white" size={iconSize} />
        </ListItemLabel>
        <ListItemLink
          href={`https://www.linkedin.com/in/${props.profileDetails.linkedInPageName}`}
          title={`https://www.linkedin.com/in/${props.profileDetails.linkedInPageName}`}
          target="_blank"
        >
          {props.profileDetails.linkedInPageName}
        </ListItemLink>
      </ListItem>
    </List>
  );
};

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-top: var(--space-6);
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: initial;
  color: white;
  margin: var(--space-2) 0;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: var(--space-5) 0;
  }
`;

const ListItemLabel = styled.div`
  margin: 0 var(--space-6) 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    margin: 0;
  }
`;

const ListItemLink = styled.a`
  margin: 0;
  font-size: var(--font-size-4);
  font-weight: 300;
  color: white;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
