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

    h2 {
      font-size: 1.25rem;
      font-weight: 500;
      margin: 1rem 0;
      color: #ddd;
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
        margin: 1rem 0;
        text-align: left;
        width: 100%;
        font-weight: 100;
        font-size: 1rem;
      }

      strong {
        color: #e67224;
        font-size: 1rem;
      }

      img {
        height: 200px;
        width: 100%;
      }

      pre {
        padding: 1rem;
        border-radius: 8px;
        background: rgba(0,0,0,.5);
        width: 100%;
        white-space: pre-wrap;
        word-wrap: break-word;
        font-size: 15px;

      }

      a {
        color: rgb(98, 98, 230);
        
        :hover {
          text-decoration: underline;
        }
      }
    }

  }
`