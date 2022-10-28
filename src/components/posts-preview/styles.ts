import styled from 'styled-components'

export const Container = styled.div`

  margin: 0;

  @media (max-width: 720px) {
    margin: 0;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 100;

    @media (max-width: 720px) {
      font-size: 1rem;
      text-align: center;
    }
  }

  .posts {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 720px) {
      flex-direction: column;
    }

    a {
      flex: 1;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      background-color: rgba(0,0,0,.2);
      transition: all .5s;
      border: 1px solid transparent;

      strong {
        transition: all .5s;
      }

      :hover {
        border: 1px solid #0070f3;

        strong {
          color: #0070f3
        }
      }
    }

    .post {
      padding: 12px;
      display: flex;
      flex-direction: column;

      p {
        font-weight: 300;
        margin: 1rem 0;
        flex: 1;
      }

      time {
        align-self: flex-end;
        font-size: 0.75rem;
        color: grey;
      }
    }

    .all-posts {
      max-width: 100px;

      align-items: center;
      justify-content: center;

      @media (max-width: 720px) {
        max-width: 100%;
        min-height: 50px;
        flex-direction: row;
        gap: 1rem;
      }
    }
  }
`