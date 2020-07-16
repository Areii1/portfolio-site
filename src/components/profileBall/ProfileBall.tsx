import React from "react";
import styled from "styled-components";
import profile from "../../assets/profile.jpg";

type Props = {
  picture: string;
};

export const ProfileBall = (props: Props) => {
  return (
    <Wrapper>
      <ProfileImageWrapper>
        <ProfileImage src={profile} alt="profile" />
      </ProfileImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 350px;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 150px;
    height: 150px;
    border-radius: 150px;
  }
`;

const ProfileImage = styled.img`
  display: inline;
  margin: 0 auto;
  margin-left: -25%;
  height: 100%;
  width: auto;
`;

const ProfileImageWrapper = styled.div`
  width: 315px;
  height: 315px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  @media (max-width: 800px) {
    width: 130px;
    height: 130px;
    border-radius: 130px;
  }
`;
