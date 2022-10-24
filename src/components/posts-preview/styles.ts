import styled from 'styled-components'

export const Container = styled.div`

  margin: 0 4rem;

  @media (max-width: 720px) {
    margin: 0;
  }

  span {
    font-size: 1.25rem;
    font-weight: 100;
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

    .all-posts {
      flex: 1;
      display: flex;
      flex-direction: column;
      max-width: 100px;
      background-color: rgba(0,0,0,.2);
      border-radius: 8px;
      border: 1px solid transparent;

      cursor: pointer;

      align-items: center;
      justify-content: center;
      transition: all .5s;

      :hover {
        border: 1px solid #0070f3;

        strong {
          color: #0070f3
        }
      }

      @media (max-width: 720px) {
        max-width: 100%;
        min-height: 100px;
      }
    }
  }
`

export const Ancora = styled.a`
  flex: 1;
  cursor: pointer;
  background-color: rgba(0,0,0,.2);
  padding: 12px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  border: 1px solid transparent;

  transition: all .5s;

  p {
    font-weight: 300;
    margin: 1rem 0;
  }

  time {
    align-self: flex-end;
    font-size: 0.75rem;
    color: grey;
  }

  :hover {
    border: 1px solid #0070f3;

    strong {
      color: #0070f3
    }
  }
`