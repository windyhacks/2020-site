import React from 'react'
import styled from 'styled-components'
import { Box, Container, Heading, Text } from '@hackclub/design-system'
import { theme } from '../theme'
import data from '../data.json'

const List = styled(Text.withComponent('ol'))`
  list-style: none;
`

const Event = styled(Text.withComponent('li')).attrs({
  fontSize: [3, 4],
  pl: 0,
  mb: 2
})`
  line-height: 1.5;
  strong {
    display: block;
  }
`

const Schedule = styled(Container).attrs({
  px: 3,
  my: [4, 5],
  maxWidth: 64,
  color: theme.colors.black
})`
  ${theme.mediaQueries.md} {
    column-count: 2;
    column-gap: ${theme.space[3]}px;
    > div {
      break-inside: avoid;
    }
  }
`

const Name = styled(Text.span)`
  font-family: ${theme.serif};
`

export default () => (
  <Schedule>
    {data.schedule.map(day => (
      <Box mt={[4, 0]} px={[2, 0]}>
        <Heading.h3 fontSize={4} my={0} children={day.date} />
        <List mt={3}>
          {day.events.map(event => (
            <Event>
              <strong children={event.time} />
              <span role="img" aria-label={event.name}>
                {event.emoji}
              </span>{' '}
              <Name>{event.name}</Name>
            </Event>
          ))}
        </List>
      </Box>
    ))}
  </Schedule>
)
