import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 2rem;
  }

  .about {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    flex: 2;
    padding: 0 16px;

    h3 {
      margin-bottom: 0.5rem;
    }

    @media (max-width: 720px) {
      padding: 0;
    }
  }
`

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  flex: 1;
  text-align: justify;

  a {
    color: #0070f3;
    font-weight: 700;

    margin: 0 .5rem;

    :hover {
      text-decoration: underline;
    }
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-end;

  img {
    height: 2rem;
    margin-top: 2rem;
  }
`

export const ImageContainer = styled.div`
  height: 300px;
  aspect-ratio: 3/4;
  position: relative;
  overflow: hidden;

  @media (max-width: 720px) {
    width: 100%;
    height: auto;
  }
`