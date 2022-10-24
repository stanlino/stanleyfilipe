import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;

  display: flex;
  flex-direction: row;
  
  justify-content: center;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    max-width: 500px;
    font-size: 1.25rem;
    padding: 0 16px;
    line-height: 1.75rem;
    flex: 1;

    a {
      color: #0070f3;
      font-weight: 700;

      :hover {
        text-decoration: underline;
      }
    }

    span {
      font-size: 1.5rem;
      display: block;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }

`

export const ImageContainer = styled.div`
  height: 300px;
  
  aspect-ratio: 3/4;

  position: relative;

  overflow: hidden;

  border-radius: 8px;
`