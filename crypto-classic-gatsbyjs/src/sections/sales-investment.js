import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Container, Flex, Heading, Text, Link } from 'theme-ui';
const SALES_INVESTMENT_DATA = {
  title: 'Total Investment sale from last year transaction',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna aliqua minim Lorem ipsum dolor sit amet consectetur.',
  button: {
    link: '#',
    label: 'Learn More',
  },
};

const SalesInvestment = () => {
  const { title, text, button } = SALES_INVESTMENT_DATA;
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "graph.png" }) {
        childImageSharp {
          fluid(maxWidth: 617) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Box as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Flex sx={styles.flex}>
          <Box sx={styles.image}>
            <Box sx={styles.thumbnail}>
              <Img
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt="Investment Thumbnail"
              />
            </Box>
          </Box>
          <Box sx={styles.content}>
            <Heading as="h2">{title}</Heading>
            <Text as="p">{text}</Text>
            <Link sx={styles.button} href={button.link}>
              {button.label}
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default SalesInvestment;

const styles = {
  section: {
    pb: [
      '45px',
      '50px',
      null,
      '90px',
      '100px',
      null,
      '120px',
      '140px',
      '150px',
    ],
  },
  container: {
    position: 'relative',
  },
  flex: {
    display: 'flex',
    gap: 0,
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: ['column-reverse', null, null, 'row'],
  },
  image: {
    width: [
      '100%',
      null,
      null,
      'calc(100% - 395px)',
      'calc(100% - 475px)',
      null,
      'calc(100% - 600px)',
    ],
    mt: ['30px'],
    textAlign: ['center', null, null, 'left'],
    img: {
      mx: ['auto', null, null, null, '0'],
      display: 'flex',
    },
  },
  thumbnail: {
    maxWidth: '617px',
  },
  content: {
    textAlign: ['center', null, null, 'left'],
    flex: ['0 0 100%', null, null, null, '0 0 50%'],
    pl: ['0', null, null, '40px', '50px'],
    mx: [null, null, null, 'auto', '0'],
    maxWidth: [null, null, null, '395px', '475px', null, '600px'],
    h2: {
      fontSize: ['24px', '28px', '32px', null, '36px', '40px', '44px', '48px'],
      lineHeight: [1.4, null, null, 1.46],
      color: 'heading',
      letterSpacing: '-1px',
      fontWeight: 'body',
    },
    p: {
      color: 'text',
      fontSize: ['15px', null, '16px'],
      lineHeight: [1.9, null, 2.5],
      maxWidth: '465px',
      mt: ['12px', null, null, null, '20px', null, '25px'],
      mb: ['22px', '30px', null, null, null, '40px'],
      mx: ['auto', null, null, null, '0'],
    },
  },
  button: {
    backgroundColor: '#EEF1F4',
    borderRadius: '5px',
    fontSize: ['13px', '14px', '15px'],
    padding: ['14px 20px 13px', '14px 25px 13px', '17px 25px 15px'],
    fontWeight: 700,
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: 'rgba(2,7,62,.7)',
    transition: 'all 300ms ease',
    '&:hover': {
      backgroundColor: '#161718',
      color: '#ffffff',
    },
  },
};
