import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Container, Flex, Link, Text, Heading } from 'theme-ui';
import CountDown from 'react-countdown';

const deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
const COUNTDOWN_DATA = {
  title: 'Take control of your credit and identity.',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna aliqua minim Lorem ipsum dolor sit amet consectetur.',
  button: {
    link: '#',
    label: 'Buy Tokens',
  },
};
const Completionist = () => {
  <Text>Times Up!</Text>;
};
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <Box sx={styles.timerWrap}>
        <Box sx={styles.timer}>
          <Text as="span">{days}</Text>
          <Heading as="h3">Days</Heading>
        </Box>
        <Box sx={styles.timer}>
          <Text as="span">{hours}</Text>
          <Heading as="h3">Hours</Heading>
        </Box>
        <Box sx={styles.timer}>
          <Text as="span">{minutes}</Text>
          <Heading as="h3">Minutes</Heading>
        </Box>
        <Box sx={styles.timer}>
          <Text as="span">{seconds}</Text>
          <Heading as="h3">Seconds</Heading>
        </Box>
      </Box>
    );
  }
};
const CountDownBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "countdown.png" }) {
        childImageSharp {
          fluid(maxWidth: 698) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const { title, text, button } = COUNTDOWN_DATA;

  return (
    <Box as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Flex sx={styles.row}>
          <Box sx={styles.content}>
            <Heading as="h2">{title}</Heading>
            <Text as="p">{text}</Text>
            <CountDown date={deadline} renderer={renderer} />
            <Link sx={styles.button} href={button.link}>
              {button.label}
            </Link>
          </Box>
          <Box sx={styles.image}>
            <Box sx={styles.thumbnail}>
              <Img
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt="Countdown Thumbnail"
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CountDownBlock;

const styles = {
  section: {
    pb: ['55px', '65px', null, '90px', '110px', null, '130px', '140px'],
  },
  container: {
    position: 'relative',
  },
  row: {
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  content: {
    maxWidth: ['520px', null, null, '345px', '380px', '440px', '520px'],
    textAlign: ['center', null, null, 'left'],
    mx: [null, 'auto', null, 0],
    h2: {
      fontSize: ['24px', '28px', '32px', null, '36px', '40px', '44px', '48px'],
      lineHeight: [1.4, null, 1.35, null, null, 1.46],
      color: 'heading',
      letterSpacing: '-1px',
      fontWeight: 'body',
      mt: [0, null, null, null, null, null, '-15px'],
    },
    p: {
      color: 'body',
      fontSize: ['15px', null, '16px'],
      lineHeight: [1.9, null, 2.12, null, 2.45],
      mt: ['12px', null, '15px', null, '20px', null, '25px'],
    },
  },
  image: {
    mt: ['45px', null, '50px', 0],
    width: [
      '100%',
      null,
      null,
      'calc(100% - 345px)',
      'calc(100% - 380px)',
      'calc(100% - 440px)',
      'calc(100% - 520px)',
    ],
    textAlign: ['center'],
    pl: [null, null, null, '30px', '70px', null, '50px'],
    img: {
      display: 'flex',
    },
  },
  thumbnail: {
    maxWidth: '698px',
    ml: 'auto',
  },
  timerWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: ['center', null, null, 'left'],
    ml: ['-30px', null, '-40px'],
    mt: ['20px', '25px', '30px', '25px', '30px', '43px'],
  },
  timer: {
    flex: '0 0 auto',
    ml: ['30px', null, '40px'],
    span: {
      lineHeight: 1,
      fontSize: ['22px', null, '28px', '32px', '36px'],
      letterSpacing: '-1px',
      fontWeight: 600,
      color: 'body',
    },
    h3: {
      lineHeight: 1.3,
      color: 'heading',
      fontSize: ['14px', '15px'],
      fontWeight: 'body',
      mt: '5px',
    },
  },
  button: {
    backgroundColor: 'heading_secondary',
    borderRadius: '5px',
    fontSize: ['13px', '14px', '15px'],
    padding: ['14px 20px 13px', '14px 25px 13px', '17px 30px 15px'],
    lineHeight: 1,
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: '#ffffff',
    mt: ['25px', '30px', '35px', '30px', '40px'],
    transition: 'all 300ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
};
