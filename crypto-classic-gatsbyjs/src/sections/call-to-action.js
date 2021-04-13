import React from 'react';
import { Box, Container, Heading, Text, Link } from 'theme-ui';
const CALL_TO_ACTION_DATA = {
  title: 'Want to talk to our Support team?',
  text:
    'Discover how team can help you power-up your influencer photo marketing program.',
  button: {
    link: '#',
    label: 'Ask you Question',
  },
};
const CallToAction = () => {
  const { title, text, button } = CALL_TO_ACTION_DATA;
  return (
    <Box as="section" id="contact" sx={styles.section}>
      <Container>
        <Heading as="h2">{title}</Heading>
        <Text as="p">{text}</Text>
        <Link sx={styles.button} href={button.link}>
          {button.label}
        </Link>
      </Container>
    </Box>
  );
};

export default CallToAction;

const styles = {
  section: {
    pb: ['70px', null, '80px', null, '95px', null, '110px'],
    pt: ['65px', null, '75px', null, '85px', null, '95px'],
    backgroundColor: 'heading_secondary',
    textAlign: 'center',
    h2: {
      fontFamily: 'archivo',
      fontSize: ['24px', '28px', '32px', '36px', null, '40px'],
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#EDF5FF',
      letterSpacing: '-1px',
      mb: ['12px', null, '15px', null, '20px'],
    },
    p: {
      fontSize: ['15px', null, '16px', null, '18px'],
      lineHeight: [1.9, null, 2],
      color: '#ffffff',
      maxWidth: '505px',
      mx: 'auto',
      mb: ['25px', null, '30px', '35px', null, '45px'],
    },
  },
  button: {
    color: 'heading_secondary',
    letterSpacing: ' -0.16px',
    fontSize: ['13px', '14px', '15px'],
    padding: ['14px 20px 13px', '14px 25px 13px', '17px 25px 15px'],
    lineHeight: 1,
    fontWeight: 700,
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    display: 'inline-flex',
    alignItems: 'center',
  },
};
