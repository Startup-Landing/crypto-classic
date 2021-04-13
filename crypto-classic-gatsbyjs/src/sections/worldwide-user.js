import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Container, Heading, Text, Image } from 'theme-ui';
import flag1 from 'assets/uk-flag.svg';
import flag2 from 'assets/south-africa-flag.svg';
import flag3 from 'assets/spain-flag.svg';

const WORLDWIDE_USER_DATA = {
  title: 'We have more than 3 Bilion worldwide user',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore',
  tagline: 'Licensed gambling jurisdictions',
  posts: [
    {
      icon: flag1,
      label: 'United Kingdom',
    },
    {
      icon: flag2,
      label: 'South Africa',
    },
    {
      icon: flag3,
      label: 'Spain',
    },
  ],
};

const WorldwideUsers = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          fluid(maxWidth: 984) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const { title, text, tagline, posts } = WORLDWIDE_USER_DATA;
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.content}>
          <Heading as="h2">{title}</Heading>
          <Text as="p">{text}</Text>
          <Text as="span">{tagline}</Text>
          <Box sx={styles.flags}>
            {posts.map(({ icon, label }, index) => (
              <Box sx={styles.flag} key={`flag-box-key-${index}`}>
                <Image src={icon} alt="flag icon" />
                <Box as="h3">{label}</Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={styles.map}>
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Map Thumbnail"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default WorldwideUsers;

const styles = {
  section: {
    pb: ['65px', '75px', null, '85px', '115px', null, '135px', '160px'],
  },
  content: {
    textAlign: 'center',
    maxWidth: ['auto', null, '480px', '600px'],
    mx: ['auto'],
    h2: {
      fontSize: ['24px', null, '28px', '30px'],
      lineHeight: [1.4, null, null, 1.6],
      color: 'heading',
      mb: ['12px', null, '15px'],
      mx: [null, 'auto', null, 0],
    },
    p: {
      fontSize: ['15px', null, '16px'],
      lineHeight: [1.9, null, 2.12],
      color: 'body',
      px: [0, null, null, '50px'],
      mb: ['30px', null, '35px', '40px', '45px', '52px'],
    },
    span: {
      fontSize: ['15px', null, '16px'],
      color: 'body',
      fontWeight: 500,
    },
  },
  flags: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    ml: ['-20px', '-30px', null, null, '-40px'],
    mt: ['20px', null, '25px', '30px'],
    mb: ['30px', null, '50px', '60px', '65px', '75px'],
  },
  flag: {
    ml: ['20px', '30px', null, null, '40px'],
    mb: ['15px', null, 0],
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
      width: ['22px', '27px'],
      height: ['22px', '27px'],
    },
    h3: {
      color: 'heading',
      fontSize: ['14px', null, '15px'],
      fontWeight: 400,
    },
  },
  map: {
    textAlign: 'center',
    maxWidth: '984px',
    mx: 'auto',
  },
};
