import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Heading,
  Text,
  Link as A
} from '@hackclub/design-system'
import { theme } from '../theme'
import { Link } from 'gatsby'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Headline from '../components/Headline'
import Layout from '../components/Layout'
import Leadership from '../components/Leadership'
import Photo from '../components/Photo'
import Schedule from '../components/Schedule'
// import Sponsors from '../components/Sponsors'
// import Judging from '../components/Judging'
import Video from '../components/Video'

const Lead = styled(Container.withComponent(Text)).attrs({
  color: 'black',
  fontSize: [3, 4],
  mt: 3,
  mb: 4
})``

const Ultralead = styled(Text).attrs({ fontSize: [5, 6, 7] })`
  color: ${theme.colors.primary};
  line-height: 1.125;
  font-family: ${theme.font};
  font-weight: bold !important;
  letter-spacing: -0.03em;
  max-width: 56rem;
`

const Grid = styled(Container).attrs({ maxWidth: 72 })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  width: 100%;
  ${theme.mediaQueries.sm} {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: ${theme.space[4]}px;
  }
`
const Question = ({ name, body, ...props }) => (
  <Card {...props}>
    <Heading.h3 fontSize={4} mt={0} mb={2} children={name} />
    <Text fontSize={2} color="black" my={0} children={body} />
  </Card>
)

const linkAttrs = {
  hoverline: true,
  chevronRight: true,
  fontSize: 3,
  mt: 3,
  bold: true
}
const LinkOut = styled(A).attrs(linkAttrs)`
  display: block;
`
LinkOut.span = styled(Text.span).attrs(linkAttrs)``
LinkOut.link = styled(A.withComponent(Link)).attrs(linkAttrs)``
A.link = styled(A.withComponent(Link))``

export default () => (
  <Layout>
    <Header />
    <Box.section bg="primaryWash" id="lead">
      <Container
        maxWidth={72}
        width={1}
        px={3}
        pt={[4, 5]}
        pb={[5, 6]}
        color="black"
      >
        <Ultralead>
          A city of incredible potential faces a crisis of opportunity.
          <Text.span py={3} width={1} style={{ display: 'block' }} />
          <Text.span color="alt">We the students</Text.span>, in order to
          welcome our peers into the wonderful world of technology, are
          organizing{' '}
          <Text.span color="alt">Windy&nbsp;City&nbsp;Hacks</Text.span>.
        </Ultralead>
      </Container>
    </Box.section>
    <Box.section>
      <Container maxWidth={72} width={1} p={3} pt={[5, 6]} color="black">
        <Container maxWidth={48} mx={0}>
          <Headline color="alt">Welcome to the “hackathon.”</Headline>
          <Lead>
            Windy City Hacks is a 24-hour event where 200 programmers, artists,
            designers, & other high schoolers from across the Midwest will come
            to together to build apps & games. We’ll provide workshops,
            mentorship, free meals & drinks, and places to sleep. The next
            morning, judges will pick the best projects to demo and win prizes.
          </Lead>
        </Container>
        <Grid>
          <Card>
            <Heading.h3 fontSize={[4, 5]} my={0}>
              Building on years of building&nbsp;opportunity.
            </Heading.h3>
            <Text fontSize={3} mt={[2, 3]}>
              We ran the inaugural Windy City Hacks in June 2019, but our team
              has organized a combined 12+ events, including MAHacks,
              Hack Pennsylvania, and helped run Hack Chicago, Hack the Fog, &
              more, reaching 1,000+ students.
            </Text>
            <LinkOut href="https://windyhacks.com">
              See last year’s Windy City Hacks
            </LinkOut>
          </Card>
          <Video aria-label="High school students coding at Hack Chicago 2018">
            <source src="/2018/hacking.mp4" type="video/mp4" />
          </Video>
          <Photo
            aria-label="High school students working together at Hack Pennsylvania 2020"
            src="/photos/hackpenn_team.jpg"
          />
          <Card>
            <Heading.h3 fontSize={[4, 5]} my={0}>
              A place for everyone.
            </Heading.h3>
            <Text fontSize={3} mt={[2, 3]}>
              Underrepresented students are systematically discouraged from
              pursuing tech. Windy City Hacks provides a supportive community
              for women, minorities, & LGBTQ+ students, and gives them the
              resources to make amazing things. No matter who you are, you’re
              welcome here—and you’ll surprise yourself by what you can
              accomplish.{' '}
              <span role="img" aria-label="Blue heart emoji">
                💙
              </span>
            </Text>
          </Card>
        </Grid>
      </Container>
    </Box.section>
    <Box.section id="faq">
      <Container maxWidth={72} width={1} px={3} pt={[4, 5]} color="black">
        <Headline mb={4}>FAQ</Headline>
        <Grid>
          <Question
            name="How much does it cost?"
            body="Nothing! Registration and attendance are 100% free, with meals, drinks, swag, & workshops included."
          />
          <Question
            name="Who can participate?"
            body="Any current student grades 8–12. If you’re under/over that age, send us a chat message (in the bottom right corner) & we’ll see what we can do."
          />
          <Question
            name="Hacking‽ Is that safe?"
            body="Hold up! No, we’re not “hacking” servers or databases. The word is being constructively re-defined as building things—apps, games, websites, etc. At Windy City Hacks, it’s all safe, supervised, & entirely educational."
          />
          <Question
            name="What can I make?"
            body="Anything! A website, app, game, hardware hack, you name it. Judges will rate projects on creativity, technical skill demonstrated, polish, and utility."
          />
          <Question
            name="What if I’m new to coding?"
            body="At Windy City Hacks, complete beginners are not only welcome, but expected! Learn as you go with our intro workshops & mentors."
          />
          <Question
            name="What if I can already code?"
            body="Windy City Hacks is for you, too! We welcome (and have prizes for) absolute beginners, experts, & everyone in between."
          />
          <Question
            name="Do I need a team?"
            body="Nope! You’ll have an opportunity to meet fellow hackers and make teams of up to 5—find some new friends, bring yours, or work alone."
          />
          <Question
            name="What should I bring?"
            body="Plan to bring a student ID, computer (any kind), chargers, anything for your hack (e.g. hardware), toiletries, & a sleeping bag (if you plan on sleeping)."
          />
          <Question
            name="Where will I sleep?"
            body="We will provide quiet places to sleep at the event, and turn lights off after the midnight snack. We’ll make sure you’re able to get some sleep if you need it!"
          />
          <Question
            name="Who runs this? Is it supervised?"
            body={
              <>
                We’re independently-organized by high schoolers, sponsored via
                an international nonprofit called{' '}
                <A href="https://hackclub.com" color="alt" underline>
                  Hack Club
                </A>
                . It’s fully supervised by 20+ adult mentors & chaperones.
              </>
            }
          />
        </Grid>
      </Container>
    </Box.section>
    <Box.section id="schedule">
      <Container maxWidth={72} width={1} px={3} py={[5, 6]}>
        <Headline color="alt">Schedule</Headline>
        <Schedule />
      </Container>
    </Box.section>
    <Box.section id="sponsors">
      <Container maxWidth={72} width={1} px={3} py={[5, 6]}>
        <Headline color="alt">Sponsors</Headline>
        <Lead maxWidth={48} mx={0}>
          Want to sponsor Windy City Hacks & help hundreds of students
          experience the magic of code?{' '}
          <A
            href="mailto:matthew@windyhacks.com"
            color={theme.colors.primary}
            className="sans"
            hoverline
            chevronRight
            ml={2}
          >
            Let’s chat
          </A>
        </Lead>
        {/*
        <Sponsors section="sponsors" />
        <Headline
          color={theme.colors.slate}
          fontSize={[3, 4]}
          caps
          mt={[4, 5]}
          pb={[3, 4]}
        >
          Additional support from
        </Headline>
        <Sponsors section="additionalSupport" />
        */}
      </Container>
    </Box.section>
    {/* <Judging /> */}
    <Leadership />
    <Footer />
  </Layout>
)
