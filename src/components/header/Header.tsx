import React from "react"
import styled from "styled-components"
import headerBg from "../../assets/header.jpg";

const Wrapper = styled.header`
  height: 600px;
  overflow: hidden;
  position: relative;
`

const ImageWrapper = styled.div`
  height: 700px;
  width: 110vw;
  margin: -70px;
  filter: blur(10px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${headerBg});
`

const Headline = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  color: white;
  margin: 0;
`

const SecondaryHeadline = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin: 0;
  color: #94a3ba;
`

const TitlesWrapper = styled.div`
  position: absolute;
  top: calc(50% - 70px);
  left: calc(50% - 400px);
`

type PropTypes = {
  name: string
  jobTitle: string
}

export const Header = (props: PropTypes) => {
  return (
    <Wrapper>
      <ImageWrapper></ImageWrapper>
      <TitlesWrapper>
        <Headline>{props.name}</Headline>
        <SecondaryHeadline>{props.jobTitle}</SecondaryHeadline>
      </TitlesWrapper>
    </Wrapper>
  )
}
