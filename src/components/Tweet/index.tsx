import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>São Paulo FC</strong>
            <span>@SaoPauloFC</span>
            <Dot />
            <time>23 de mai</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Final campeonato paulista 2021 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              10,257
            </Status>
            <Status>
              <RetweetIcon />
              1.273
            </Status>
            <Status>
              <LikeIcon />
              23,778
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
