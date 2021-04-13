import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Container, Flex, Heading, Text, Link, Image } from 'theme-ui';
import icon1 from 'assets/wallet-1.svg';
import icon2 from 'assets/wallet-2.svg';
import icon3 from 'assets/wallet-3.svg';
import button1 from 'assets/wallet-apple.png';
import button2 from 'assets/wallet-google.png';
const OUR_WALLET_DATA = {
  title: 'Our wallet is built-in for the cryptocurrencies customers',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna aliqua minim Lorem ipsum dolor sit amet consectetur.',
  tagLine: '*Windows app coming soon',
  options: [
    {
      icon: icon1,
      label: 'Secure transfers with verified Casinos.',
    },
    {
      icon: icon2,
      label: 'Easily buy and sell CLV within the wallet.',
    },
    {
      icon: icon3,
      label: 'Pay for Gas in CLV.',
    },
  ],
  buttons: [
    {
      icon: button1,
      label: 'App Store',
      link: '#',
    },
    {
      icon: button2,
      label: 'PLay Store',
      link: '#',
    },
  ],
};
const OurWallet = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "our-wallet.png" }) {
        childImageSharp {
          fluid(maxWidth: 615) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const { title, text, tagLine, options, buttons } = OUR_WALLET_DATA;
  return (
    <Box as="section" id="downloads">
      <Container>
        <Flex sx={styles.row}>
          <Box sx={styles.thumbWrap}>
            <Box sx={styles.thumbnail}>
              <Img
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt="App Thumbnail"
              />
            </Box>
          </Box>
          <Box sx={styles.content}>
            <Heading as="h2">{title}</Heading>
            <Text as="p">{text}</Text>
            <Box as="ul" sx={styles.lists}>
              {options.map(({ icon, label }, index) => (
                <Text as="li" key={`list-key-${index}`}>
                  <span>
                    <Image src={icon} alt="icon image" />
                  </span>
                  {label}
                </Text>
              ))}
            </Box>
            <Box sx={styles.buttonWrap}>
              {buttons.map(({ icon, link, label }, index) => (
                <Link
                  sx={styles.button}
                  href={link}
                  key={`button-key-${index}`}
                >
                  <Image src={icon} alt="button icon" />
                  {label}
                </Link>
              ))}
            </Box>
            <Text as="span">{tagLine}</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurWallet;

const styles = {
  row: {
    pb: ['65px', '75px', null, '92px', '115px', null, '135px', '150px'],
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: ['column-reverse', null, null, 'row'],
    px: [0, null, '40px', 0, null, null, null, '40px'],
  },
  thumbWrap: {
    width: [
      '100%',
      null,
      '520px',
      'calc(100% - 360px)',
      'calc(100% - 480px)',
      'calc(100% - 520px)',
    ],
    mt: ['40px', '45px', null, 0],
    textAlign: ['center'],
    mx: [null, null, 'auto', 0],
  },
  thumbnail: {
    maxWidth: '615px',
    mx: 'auto',
  },
  content: {
    maxWidth: ['100%', null, '520px', '360px', '480px', '520px'],
    pl: [0, null, null, '35px', '50px', '80px', '100px', '50px'],
    textAlign: ['center', null, null, 'left'],
    mx: [null, null, 'auto', 0],
    h2: {
      color: 'heading',
      letterSpacing: '-1.2px',
      fontSize: ['24px', '28px', '32px', null, '36px', '40px', '44px', '48px'],
      lineHeight: [1.4, null, 1.35, null, null, 1.25],
      fontWeight: 'body',
      fontFamily: 'archivo',
    },
    p: {
      fontSize: ['15px', null, '16px'],
      lineHeight: [1.9, null, 2.12],
      color: 'body',
      mt: ['12px', '15px'],
      mb: ['18px', '22px', '25px', '20px', '25px', '30px', '40px'],
    },
    span: {
      color: 'text_secondary',
      fontSize: '14px',
    },
  },
  lists: {
    m: 0,
    p: 0,
    listStyle: 'none',
    mb: ['25px', null, '32px', null, '40px', '45px'],
    maxWidth: ['320px', '370px', null, '100%'],
    mx: 'auto',
    li: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      lineHeight: '1.75',
      fontSize: ['14px', null, '15px', null, '16px'],
      color: 'body',
      mb: [3, null, null, null, '20px'],
      span: {
        display: 'flex',
        flexShrink: 0,
        width: ['40px', null, null, null, '50px'],
        lineHeight: '35px',
      },
    },
  },
  buttonWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, 'flex-start'],
    ml: [-2, null, '-15px'],
    mb: [2, 3, null, null, null, '22px'],
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 700,
    backgroundColor: '#161718',
    fontFamily: 'DM Sans',
    borderRadius: '5px',
    padding: ['11px 20px', null, '13px 27px', '11px 20px', '13px 27px'],
    fontSize: ['14px', null, '15px', '14px', '15px'],
    transition: 'all 300ms ease',
    ml: [2, null, 3],
    '>img': {
      mr: '10px',
    },
    '&:hover': {
      opacity: 0.8,
    },
  },
};
