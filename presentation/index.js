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
  Link,
  SlideSet,
} from 'spectacle';

// Import custom theme instead the default one
// import createTheme from 'spectacle/lib/themes/default';
import createTheme from '../assets/theme';

const imageFileNames = [
  'summer.png',
  'robot.png',
  'lhd.png',
  'claudia.png',
  'claudiaMoiseevna.png',
  '5hours.png',
  'rofl.png',
  'tracker.png',
  'pinch.png',
  'sad.jpg',
  'team.png',
  'photos.jpg',
  'monsterUnicorn.jpg',
  'gardenerKiller.jpg',

  // server
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',

  // mobile
  'mobile7.gif',
  'mobile8.gif',

  // 'cert.png',
  // 'croton.png',
  // 'change.png',
  // 'deploy.png',
  // 'nodemailer.png',
  // 'ethereal.png',
  // 'demo.png',

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
  mobile1: require('../assets/mobile1.webm'),
  mobile3: require('../assets/mobile3.webm'),
  mobile41: require('../assets/mobile41.webm'),
  mobile42: require('../assets/mobile42.webm'),
  mobile5: require('../assets/mobile5.webm'),
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
    grassDarkest: '#175718',
    grassDark: '#2f8611',
    grass: '#7ec850',
    grassLight: '#95e083',
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
          margin,
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

const Center = ({ top, bottom, children }) => (
  (top || bottom)
    ? (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          top,
          bottom,
          textAlign: 'center',
        }}
      >
        {children}
      </div>
    )
    : (
      <div
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    )
);


const Aside = ({ left, right, children }) => (
  <div
    style={{
      ...right ? { marginRight: right } : { marginLeft: left },
      textAlign: (right ? 'right' : 'left')
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
      left: 0,
    }}
  >
    <source src={videos[name]} type={`video/${format}`} />
  </video>
);

const Video = ({ name, format = 'webm', loop = null, height = null, width = null, style = {} }) => (
  <video
    // controls
    autoPlay
    { ...(loop ? { loop: true } : {}) }
    width={width}
    height={height}
    style={style}
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
  grass: {
    color: theme.screen.colors.grass,
  },
  grassLight: {
    color: theme.screen.colors.grassLight,
  },
  grassDark: {
    color: theme.screen.colors.grassDark,
  },
  grassDarkest: {
    color: theme.screen.colors.grassDarkest,
  },
  grass3D: {
    color: theme.screen.colors.grassDark,
    textShadow: `${theme.screen.colors.grassLight} 0px 1px 0px,
      ${theme.screen.colors.grassLight} 0px 2px 0px,
      ${theme.screen.colors.grassLight} 0px 3px 0px,
      ${theme.screen.colors.grassLight} 0px 4px 0px`
  },
  grass3DLight: {
    color: theme.screen.colors.grassDark,
    textShadow: `${theme.screen.colors.grassLight} 0px 1px 0px,
      ${theme.screen.colors.grassLight} 0px 2px 0px,
      ${theme.screen.colors.grassLight} 0px 3px 0px`
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
        <FullScreenImage src={images.summer} style={{ backgroundColor: 'black' }} />

        <Slide>
          <Heading>Команда</Heading>
        </Slide>
        <FullScreenSlide>
          <Image src={images.team} />
        </FullScreenSlide>

        <Slide>
          <Heading>Ограничения: Время</Heading>
        </Slide>

        <FullScreenSlide>
          <Image src={images['5hours']} />
          <Appear>
            <Image
              src={images.rofl}
              style={{
                position: 'absolute',
                margin: 0,
                top: 'calc(50% + 130px)',
                left: 'calc(50% + 190px)',
              }}
            />
          </Appear>
        </FullScreenSlide>
        <FullScreenSlide>
          <Image src={images.tracker} />
          <Appear>
            <Image
              src={images.pinch}
              style={{
                position: 'absolute',
                margin: 0,
                top: 'calc(50% + 330px)',
                left: 'calc(50% + 700px)',
              }}
            />
          </Appear>
        </FullScreenSlide>
        <FullScreenImage src={images.lhd} />

        <Slide>
          <Heading>Ограничения: Пространство</Heading>
        </Slide>

        <Slide>
          <Heading>Процессы</Heading>
        </Slide>

        <FullScreenSlide bgImage={images.sad}>
          <Corner left="20vh" top="20vh">
            <Heading>Проблема</Heading>
          </Corner>
        </FullScreenSlide>
        <FullScreenImage src={images.robot} />


        <FullScreenSlide>
          <Image src={images.claudia}/>
          <Appear>
            <Image
              src={images.claudiaMoiseevna}
              style={{
                position: 'absolute',
                margin: 0,
                top: 'calc(50% - 318px)',
                left: 'calc(50% - 318px)',
              }}
            />
          </Appear>
        </FullScreenSlide>

        {/* Server */}
        <FullScreenSlide>
          <Heading>Server</Heading>
          <Appear style={{ marginTop: '20px' }}>
            <Heading size={5} style={{ color: 'white', lineHeight: '2' }}>Что завелось без проблем - <span style={{ textDecoration: 'line-through' }}>всё</span> почти всё</Heading>
          </Appear>
        </FullScreenSlide>

        <FullScreenSlide>
          <Heading>Проблема раз, деплой</Heading>
        </FullScreenSlide>

        <SlideSet>
          <FullScreenSlide style={{ backgroundColor: 'white' }}>
            <Image src={images['1']} />
          </FullScreenSlide>
          <FullScreenSlide>
            <Image src={images['2']} />
          </FullScreenSlide>
          <FullScreenSlide>
            <Image src={images['3']} />
          </FullScreenSlide>
          <FullScreenSlide>
            <Image src={images['4']} />
          </FullScreenSlide>
        </SlideSet>

        <FullScreenSlide>
          <Heading>Проблема два, миграции</Heading>
        </FullScreenSlide>

        <SlideSet>
          <FullScreenSlide>
            <Image src={images['5']} />
          </FullScreenSlide>
          <FullScreenSlide>
            <Image src={images['6']} />
          </FullScreenSlide>
          <FullScreenSlide>
            <Image src={images['7']} />
          </FullScreenSlide>
        </SlideSet>

        <FullScreenSlide>
          <Heading>Проблема три, сервис воркеры</Heading>
        </FullScreenSlide>

        <SlideSet>
          <FullScreenSlide>
            <Image src={images['8']} />
          </FullScreenSlide>
          <FullScreenSlide>
            <Image src={images['9']} />
          </FullScreenSlide>
          <FullScreenSlide>
            <Image src={images['10']} />
          </FullScreenSlide>
          <FullScreenSlide>
            <Image src={images['11']} />
          </FullScreenSlide>
        </SlideSet>

        {/* Mobile */}
        <SlideSet style={{ backgroundColor: '#161616' }}>
          <FullScreenSlide>
            <Corner top="10vh" left="10vh">
              <Heading style={{ marginBottom: '4vh' }}>Mobile</Heading>
              <Heading size={5} style={{ color: 'white', lineHeight: '2' }}>Коротко о проекте?</Heading>
              <Appear>
                <Heading size={5} style={{ color: 'white', lineHeight: '2' }}>Было круто!</Heading>
              </Appear>
            </Corner>
            <Aside right="10vw">
              <Video name="mobile1" loop height="1000px"/>
            </Aside>
          </FullScreenSlide>
          <FullScreenSlide>
            <Corner top="10vh" left="10vh">
              <Heading size={4} style={{ marginBottom: '8vh' }}>Задача</Heading>
              <List style={{ color: 'white', fontWeight: 700, lineHeight: '1.5', listStyle: 'disc outside none', marginLeft: '2.5vw' }}>
                <Appear><ListItem>Просто развернуть проект</ListItem></Appear>
                <Appear><ListItem>Просто догнать ребят</ListItem></Appear>
                <Appear><ListItem>Просто запилить рабочий прототип для мобайла</ListItem></Appear>
              </List>
              <Appear>
                <Heading size={4} style={{ marginTop: '8vh', color: 'white' }}>Но...</Heading>
              </Appear>
            </Corner>
          </FullScreenSlide>
          <FullScreenSlide>
            <Corner top="10vh" left="10vh">
              <div style={{ width: '55vw' }}>
                <Heading size={4} style={{ marginBottom: '8vh' }}>#1 Активация email</Heading>
                <Appear>
                  <div>
                    <Heading size={5} style={{ color: 'white', marginBottom: '2vh' }}>Проблема</Heading>
                    <Text style={{ color: 'white' }}>5 шагов, 2-3 приложения</Text>
                  </div>
                </Appear>
                <Appear>
                  <div>
                    <Heading size={5} style={{ color: 'white', margin: '8vh 0 2vh' }}>Решение</Heading>
                    <Text style={{ color: 'white' }}>Нотифай с кодом активации</Text>
                  </div>
                </Appear>
                <Appear>
                  <div>
                    <Heading size={5} style={{ color: 'white', margin: '8vh 0 2vh' }}>Результат</Heading>
                    <Text style={{ color: 'white' }}>3 шага, 1 приложение</Text>
                  </div>
                </Appear>
              </div>
            </Corner>
            <Aside right="10vw">
              <Video name="mobile3" loop height="1000px"/>
            </Aside>
          </FullScreenSlide>
          <FullScreenSlide>
            <Corner top="10vh" left="10vh">
              <Heading size={4} style={{ marginBottom: '8vh' }}>#2 Кроссплатформенность</Heading>
              <Appear>
                <div>
                  <Heading size={5} style={{ color: 'white', marginBottom: '2vh' }}>Проблема</Heading>
                  <Text style={{ color: 'white' }}>Внешние отличия компонентов</Text>
                </div>
              </Appear>
              <Appear>
                <div>
                  <Heading size={5} style={{ color: 'white', margin: '8vh 0 2vh' }}>Решение</Heading>
                  <List style={{ color: 'white', listStyle: 'disc outside none', marginLeft: '2.5vw', lineHeight: '1.5' }}>
                    <ListItem>Сравнивать</ListItem>
                    <ListItem>Поправлять</ListItem>
                    <ListItem>Сравнивать</ListItem>
                  </List>
                </div>
              </Appear>
              <Appear>
                <div>
                  <Heading size={5} style={{ color: 'white', margin: '8vh 0 2vh' }}>Результат</Heading>
                  <Appear>
                    <div style={{ position: 'absolute', left: 0 }}>
                      <Text style={{ color: 'white', lineHeight: '1.5' }}>Компоненты выглядят похоже...</Text>
                    </div>
                  </Appear>
                  <Appear>
                    <div style={{ position: 'absolute', left: 0, background: '#161616' }}>
                      <Text style={{ color: 'white', lineHeight: '1.5' }}>Но начинаешь искать UX/UI-дизайнера</Text>
                    </div>
                  </Appear>
                </div>
              </Appear>
            </Corner>
            <div style={{ position: 'absolute', top: '25vh', right: 0, width: '50%', height: '75vh', overflow: 'hidden' }}>
              <div position="relative">
                <Corner right="28vw" top="-30px">
                  <Video name="mobile42" loop height="650px"/>
                </Corner>
                <Corner right="5vw" top="3vh">
                  <Video name="mobile41" loop height="650px"/>
                </Corner>
              </div>
            </div>
          </FullScreenSlide>
          <FullScreenSlide>
            <Corner top="10vh" left="10vh">
              <div style={{ width: '50vw', height: '90vh' }}>
                <Heading size={4} style={{ marginBottom: '8vh' }}>#3 Интеграция с RRule</Heading>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Appear>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#161616'}}>
                      <Heading size={5} style={{ color: 'white', marginBottom: '2vh' }}>Проблема</Heading>
                      <List style={{ color: 'white', listStyle: 'disc outside none', marginLeft: '2.5vw', lineHeight: '1.5' }}>
                        <ListItem>Подавать расписания в одном формате с веб-частью</ListItem>
                        <ListItem>Нет компонента React RRule Generator для React Native</ListItem>
                      </List>
                    </div>
                  </Appear>
                  <Appear>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#161616'}}>
                      <Heading size={5} style={{ color: 'white', marginBottom: '2vh' }}>Решение</Heading>
                      <List style={{ color: 'white', listStyle: 'disc outside none', marginLeft: '2.5vw', lineHeight: '1.5' }}>
                        <ListItem>Смотрим как работает RRule Generator</ListItem>
                        <ListItem>Создаем компоненты с нужным функционалом</ListItem>
                      </List>
                      <Appear>
                        <div>
                          <Heading size={5} style={{ color: 'white', margin: '8vh 0 2vh' }}>Результат</Heading>
                          <List style={{ color: 'white', listStyle: 'disc outside none', marginLeft: '2.5vw', lineHeight: '1.5' }}>
                            <ListItem>Одинаковые форматы</ListItem>
                            <ListItem>Нет проблем с расписанием</ListItem>
                          </List>
                        </div>
                      </Appear>
                    </div>
                  </Appear>
                </div>
              </div>
            </Corner>
            <Aside right="5vw">
              <Video name="mobile5" loop height="1000px"/>
            </Aside>
          </FullScreenSlide>
          <FullScreenSlide>
            <Corner top="10vh" left="10vh">
              <div style={{ width: '55vw' }}>
                <Heading size={4} style={{ marginBottom: '8vh' }}>#4 Формирование рамок</Heading>
                <div style={{ position: "relative", height: "90vh" }}>
                  <Appear>
                    <div style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%", background: "#161616"}}>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <Heading size={5} style={{ color: 'white', marginBottom: '2vh' }}>Проблема</Heading>
                        <List style={{ color: 'white', listStyle: 'disc outside none', marginLeft: '2.5vw', lineHeight: '1.5' }}>
                          <ListItem>3 месяца на всё, 2 – на мобайл</ListItem>
                          <ListItem>Желание обязательно что-то улучшить</ListItem>
                          <ListItem>Решение понять сколько мы реально можем сделать за выделенное время</ListItem>
                        </List>
                        <Corner top="-16.3vh" right="-56.7vh">
                          <Image src={images.mobile7} style={{ width: '25vw' }} />
                        </Corner>
                      </div>
                    </div>
                  </Appear>
                  <Appear>
                    <div style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%", background: "#161616" }}>
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <Heading size={5} style={{ color: 'white', marginBottom: '2vh' }}>Решение</Heading>
                        <List style={{ color: 'white', listStyle: 'disc outside none', marginLeft: '2.5vw', lineHeight: '1.5' }}>
                          <ListItem>Разделять базовый функционал от новых фич</ListItem>
                          <ListItem>Совместное решение честно остановиться</ListItem>
                        </List>
                        <Appear>
                          <div>
                            <Heading size={5} style={{ color: 'white', margin: '8vh 0 2vh' }}>Результат</Heading>
                            <List style={{ color: 'white', listStyle: 'disc outside none', marginLeft: '2.5vw', lineHeight: '1.5' }}>
                              <ListItem>Общение и веселье в команде</ListItem>
                              <ListItem>Опыт быстрого освоения нового</ListItem>
                              <ListItem>Азарт</ListItem>
                              <ListItem>Рабочий прототип продукта, который каждый может подпилить под себя</ListItem>
                            </List>
                            <Corner top="-16.3vh" right="-56.7vh">
                              <Image src={images.mobile8} style={{ width: '25vw' }} />
                            </Corner>
                          </div>
                        </Appear>
                      </div>
                    </div>
                  </Appear>
                </div>
              </div>
            </Corner>
          </FullScreenSlide>
        </SlideSet>
        <FullScreenSlide>
          <Center>
            <Heading style={styles.grass3D}>≠</Heading>
          </Center>
          <Image src={images.monsterUnicorn} />
        </FullScreenSlide>
        <FullScreenSlide>
          <Center>
            <Heading style={styles.grass3D}>≠</Heading>
          </Center>
          <Image src={images.gardenerKiller} />
        </FullScreenSlide>
        <FullScreenSlide>
          <Corner left="55px" top="55px">
            <Heading style={styles.grass3D}>Всё будет Кротон!</Heading>
          </Corner>
          <Image src={images.photos} />
          <Corner right="60px" bottom="60px">
            <Link href="https://t.me/growingPrivateAvocado">https://t.me/growingPrivateAvocado</Link>
          </Corner>
        </FullScreenSlide>


        {/* <FullScreenSlide style={{ backgroundColor: 'white' }}>
          <Heading size={4}>Sprint #2</Heading>
        </FullScreenSlide>

        <FullScreenSlide style={{ backgroundColor: 'white' }}>
          <Heading size={4}>TLD & HTTPS</Heading>
          <Image src={images.cert} />
        </FullScreenSlide>

        <FullScreenSlide padding={350} style={{ backgroundColor: 'white' }}>
          <Heading size={4}>TLD & HTTPS</Heading>
          <List>
            <ListItem><Link href="http://croton.cf:8080/">http://croton.cf:8080/</Link> -- web@http</ListItem>
            <ListItem><Link href="https://croton.cf:4430/">https://croton.cf:4430/</Link> -- web@https</ListItem>
            <ListItem><Link href="http://croton.cf:8081/">http://croton.cf:8081/</Link> -- stage@http</ListItem>
            <ListItem><Link href="https://croton.cf:4431/">https://croton.cf:4431/</Link> -- stage@https</ListItem>
            <ListItem><Link href="http://croton.cf/">http://croton.cf/</Link> -- prod@http</ListItem>
            <ListItem><Link href="https://croton.cf/">https://croton.cf/</Link> -- prod@https</ListItem>
          </List>
        </FullScreenSlide>

        <FullScreenSlide padding={350} style={{ backgroundColor: 'white' }}>
          <Heading size={4}>Technicals</Heading>
          <List>
            <ListItem style={{ fontSize: '3vh' }}>DB Migrations</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Validation: move to custom hook</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Badges CI move to AWS</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Split DBs for envs</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Move axios api calls to separate service, update tests</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Separate package.json command to run web with a local backend</ListItem>

          </List>
        </FullScreenSlide>

        <FullScreenSlide padding={350} style={{ backgroundColor: 'white' }}>
          <Heading size={4}>Bugs Fixed:</Heading>
          <List>
            <ListItem style={{ fontSize: '3vh' }}>Unable to update profile right after email confirm</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Error on email confirm due to re-rendering</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Fix bug in RN tests</ListItem>
          </List>
        </FullScreenSlide>

        <FullScreenSlide padding={400} style={{ backgroundColor: 'white' }}>
          <Heading size={4}>User Flows:</Heading>
          <List>
            <ListItem style={{ fontSize: '3vh' }}>Login with Facebook</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Login with Google</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Show user profile</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Change user profile</ListItem>
            <ListItem style={{ fontSize: '3vh' }}>Reset user email</ListItem>
          </List>
        </FullScreenSlide>

        <FullScreenSlide padding={100} style={{ backgroundColor: 'white' }}>
          <Heading size={4}>User Flow Demo</Heading>
          <Link href="https://croton.cf:4430/">
            <Image src={images.demo} />
          </Link>
        </FullScreenSlide>

        <FullScreenSlide padding={100} style={{ backgroundColor: 'white' }}>
          <Heading size={4}>Mobile!</Heading>
        </FullScreenSlide> */}


{/* 















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

 */}


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
