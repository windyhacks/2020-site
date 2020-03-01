import React from 'react'
import styled from 'styled-components'
import { Container, theme } from '@hackclub/design-system'
import data from '../data.json'

const Base = styled(Container).attrs({ maxWidth: 72 })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  a {
    line-height: 0;
    width: 100%;
  }
  img {
    object-fit: contain;
    object-position: left;
    max-height: 5rem;
  }
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
    &:first-of-type {
      grid-gap: ${theme.space[4]}px;
    }
  }
  &:last-of-type {
    ${theme.mediaQueries.lg} {
      grid-template-columns: repeat(4, 1fr);
    }
    img {
      max-height: 4rem;
    }
  }
`

const Sponsors = ({ section = 'sponsors', ...props }) => (
  <Base {...props}>
    {data[section].map(sponsor => (
      <a href={`${sponsor.link}`} target="_blank" key={sponsor.image}>
        <img
          alt={sponsor.name}
          src={require(`../../static/sponsors/${sponsor.image}`)}
        />
      </a>
    ))}
  </Base>
)

export default Sponsors
