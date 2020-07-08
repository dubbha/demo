// Import React
import React from 'react';

// Import emotion to override styles
// https://github.com/FormidableLabs/spectacle#faq
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Appear,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
  CodePane,
  Link
} from 'spectacle';

// Import custom theme instead the default one
// import createTheme from 'spectacle/lib/themes/default';
import createTheme from '../assets/theme';

const imageFileNames = [
  // intro, git, docs
  'croton.png',
  'change.png',
  'deploy.png',
  'nodemailer.png',
  'ethereal.png',
  'demo.png',

  // 'githubTeam.png',
  // 'gitflow.png',
  // 'gitBranchingStrategy.png',
  // 'monorepo.png',
  // 'readme.png',
  // 'wiki.png',
  // 'wikiPR.png',
  // 'wikiReview.png',
  // 'wikiStyle.png',
  // 'wikiEnvs.png',
  // 'createReactApp.png',
  // 'reactNative.png',
  // 'claudia.png',

  // code quality, test/lint, github workflow
  // 'jest.png',
  // 'jestWeb.png',
  // 'jestMobile.png',
  // 'githubWorkflow.png',
  // 'cypress.png',
  // 'cypressRun.png',
  // 'cypressOpen.png',
  // 'stryker.png',
  // 'strykerResults.png',

  // deployment
  // 'awsCodeBuild.png',
  // 'buildProjectLog.png',
  // 's3Bucket.png',
  // 's3StaticHosting.png',
  // 'githubWebhooks.png',
  // 'webhookRequest.png',
  // 'webhookResponse.png',
  // 'backend.png',
  // 'apiGateway.png',
  // 'lambda.png',
  // 'postmanHealthcheck.png',
];
const reqImage = name => ({ [name.split('.')[0]]: require(`../assets/${name}`) });
const images = imageFileNames.reduce((acc, name) => ({ ...acc, ...reqImage(name) }), {});

const sourceFileNames = [
  // 'installCRA.js',
];
const reqSource = name => ({ [name.split('.')[0]]: require(`../assets/code/${name}`) });
const sources = sourceFileNames.reduce((acc, name) => ({ ...acc, ...reqSource(name) }), {});

const videos = {
  // separationOfConcerns: require('../assets/separationOfConcerns.mp4'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: 'black',
    tertiary: '#c11b01',
    quaternary: '#cecece',
    brainDark: '#c11b01',
    brainLight: '#f08920',
    blood: '#bb0a1e',
    bronze: '#cd7f32',
    asphalt: '#222f38',
    fire: '#c2261f',
    gray: '#1F2022',
    cartoon: '#006dc6',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

// Break out of the 1000x700 box
// https://github.com/FormidableLabs/spectacle/issues/500
const FullScreenSlide = styled(Slide)`
  :first-child {
    max-width: 100%;
    max-height: 100%;
    padding: ${(props) => props.padding || 0};
  }
`;

const FullScreenImage = ({
  src,
  align = 'center',
  style = {}
}) => {
  let margin;
  switch (align) {
    case 'left':
      margin = '0 auto 0 0';
      break;
    case 'right':
      margin = '0 0 0 auto';
      break;
    case 'center':
    default:
      margin = '0 auto';
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        ...style
      }}
    >
      <Image
        src={src}
        style={{
          height: '100%',
          margin
        }}
      />
    </div>
  );
};

const Corner = ({ top, right, bottom, left, children }) => (
  <div
    style={{
      position: 'absolute',
      top,
      right,
      bottom,
      left,
      textAlign: (right ? 'right' : (left ? 'left' : 'center')) // eslint-disable-line
    }}
  >
    {children}
  </div>
);

/* eslint-disable react/prop-types */
const FullScreenVideo = ({ name, format = 'webm', loop = null }) => (
  <video
    // controls
    autoPlay
    { ...(loop ? { loop: true } : {}) }
    width="100%"
    height="100%"
    style={{
      position: 'absolute',
      top: 0,
      left: 0
    }}
  >
    <source src={videos[name]} type={`video/${format}`} />
  </video>
);

const Example = ({ name }) => {
  const path = `${name[0].toLowerCase()}${name.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase()}`;
  return (
    <Link href={`http://localhost:3001/${path}`} target="_blank" style={{ fontSize: '4vh' }}>{name}</Link>
  );
};

const Examples = ({ names }) => (
  <>
    <span style={{ fontSize: '4vh' }}>{names.length > 1 ? 'Examples: ' : 'Example: '}</span>
    {names.map((name, index) => (<React.Fragment key={name}>{index ? ', ' : ''}<Example name={name} /></React.Fragment>))}
  </>
);

const styles = {
  brain: {
    color: theme.screen.colors.brainDark,
  },
  brain3D: {
    color: theme.screen.colors.brainDark,
    textShadow: `${theme.screen.colors.brainLight} 0px 1px 0px,
      ${theme.screen.colors.brainLight} 0px 2px 0px,
      ${theme.screen.colors.brainLight} 0px 3px 0px,
      ${theme.screen.colors.brainLight} 0px 4px 0px`
  },
  brain3DLight: {
    color: theme.screen.colors.brainDark,
    textShadow: `${theme.screen.colors.brainLight} 0px 1px 0px,
      ${theme.screen.colors.brainLight} 0px 2px 0px,
      ${theme.screen.colors.brainLight} 0px 3px 0px`
  },
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        showFullscreenControl={false}
        controls={false}
        progress="bar"
      >
        <FullScreenSlide>
          <FullScreenImage src={images.croton} />
        </FullScreenSlide>

        <Slide>
          <Image src={images.change} />
          <List>
            <ListItem><b>OUT</b>: Claudia + Lambda + Api Gateway</ListItem>
            <ListItem><b>IN</b>: EC2</ListItem>
          </List>
        </Slide>

        <FullScreenSlide padding={100}>
          <Heading size={4}>Deployment to EC2</Heading>
          <Image src={images.deploy} />
        </FullScreenSlide>

        <FullScreenSlide padding={100}>
          <Heading size={4}>Sending Emails to Ethereal</Heading>
          <Image src={images.nodemailer} />
          <Image src={images.ethereal} />
        </FullScreenSlide>

        <FullScreenSlide padding={100}>
          <Heading size={4}>AuthN via Back End</Heading>
          <List>
            <ListItem>Local AuthN: passport, JWT</ListItem>
            <ListItem>Social AuthN: passport-facebook</ListItem>
          </List>
        </FullScreenSlide>

        <FullScreenSlide padding={100}>
          <Heading size={4}>Web tech stack:</Heading>
          <List>
            <ListItem style={{ fontSize: '3vh' }}>react-bootstrap</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>redux, react-redux, redux-saga, connected-react-router</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Hooks: useState(), useEffect(), react-redux's useDispatch(), useSelector()</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Testing: @testing/library/react, redux-saga-test-plan for sagas</ListItem>
          </List>
        </FullScreenSlide>

        <Slide>
          <Heading size={4}>Web structure:</Heading>
          <List>
            <ListItem style={{ fontSize: '3vh' }}><b>elements</b> - wrapped react-bootstrap compnents</ListItem>
            <ListItem style={{ fontSize: '3vh' }}><b>components</b> - e.g. LoginForm</ListItem>
            <ListItem style={{ fontSize: '3vh' }}><b>pages</b> - e.g. Login page</ListItem>
          </List>
        </Slide>

        <FullScreenSlide padding={100}>
          <Heading size={4}>User Flow Demo</Heading>
          <Link href="http://croton-web-dev.s3-website.eu-west-2.amazonaws.com/">
            <Image src={images.demo} />
          </Link>
        </FullScreenSlide>

        <FullScreenSlide padding={100}>
          <Heading size={4}>Issues/Tech Debts:</Heading>
          <List>
            <ListItem style={{ fontSize: '3vh' }}>Social login: facebook requires HTTPS (self-signed on back), Google requires TLD (example.com). Move web to https with TLD? Social login from front not back? Share $?</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Email: config sending real email using Croton Gmail account starting from stage env</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>DB/contracts: single DB, mized tables with fields from different flows, DB corruptions, contract, swagger</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>coverage-badges force-pushing to PRs - store to AWS for dev branch</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>core dependencies: investigate using dependencies from core after package build, currently using local deps</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>No time for mobile</ListItem>
          </List>
        </FullScreenSlide>

        {/* <Slide>
          <Heading size={4}>Heading</Heading>
          <List>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
          </List>
        </Slide> */}

        {/* {imageFileNames.slice(0).map(name => (
          <FullScreenSlide key={name}>
            <Image src={images[name.split('.')[0]]} />
          </FullScreenSlide>
        ))} */}

        {/* <Slide>
          <Heading size={4}>Under the Hood</Heading>

          {
            [
              ['https://github.com/dubbha/croton#readme', 'Readme'],
              ['https://github.com/dubbha/croton/wiki', 'Wiki'],
              ['https://github.com/dubbha/croton/actions?query=workflow%3AWEB-CI-coverage-badges', 'GitHub workflows'],
              ['https://eu-west-2.console.aws.amazon.com/codesuite/codebuild/353231730952/projects/direct-build/history?region=eu-west-2', 'CodeBuild project'],
              ['https://s3.console.aws.amazon.com/s3/home?region=us-east-2', 'S3 buckets'],
              ['https://console.aws.amazon.com/apigateway/home?region=us-east-1#/apis/oicqa6ud63/resources/aas7iqo62f/methods/ANY', 'API Gateway'],
              ['https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/crotonLambda?tab=configuration', 'Lambda'],
              ['http://croton-web-dev.s3-website.eu-west-2.amazonaws.com/', 'web@dev'],
              ['http://croton-web-stage.s3-website.eu-west-2.amazonaws.com/', 'web@stage'],
              ['http://croton-web-prod.s3-website.eu-west-2.amazonaws.com/', 'web@prod'],
            ].map(([url, text], i) => <Link href={url} key={url} target="_blank" style={{ fontSize: '4vh', margin: '2vh', opacity: i % 2 ? 0.66 : 1 }}> {text} </Link>)
          }
        </Slide> */}

      </Deck>
    );
  }
}
