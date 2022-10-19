import styled from 'styled-components'

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  article {
    max-width: 720px;
    margin: 5rem auto 0;

    h1 {
      font-size: 2.25rem;
      font-weight: 700;
    }

    time {
      font-size: 1rem;
      color: #A8A8B3;
      margin-top: 1.5rem;
      display: block;
    }

    .post-content {
      line-height: 2rem;
      font-size: 1.125rem;
      color: #ddd;

      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        margin: 1.5rem 0;
        text-align: left;
        width: 100%;
      }

      img {
        height: 200px;
        width: 100%;
      }
    }

  }
`