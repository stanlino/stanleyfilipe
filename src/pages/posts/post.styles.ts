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
      font-size: 1.2rem;
      font-weight: 500;
      margin: 1rem 0;
      color: #e67224;
      
    }

    time {
      font-size: 1rem;
      color: #A8A8B3;
      margin: 1rem 0;
      display: block;
    }
  }

  footer {
    height: 100px;
    max-width: 720px;
    margin: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    time, span {
      font-size: 1rem;
      color: #A8A8B3;
      margin: 1rem 0;
      display: block;
    }
  }
`

export const PostContent = styled.div`
  line-height: 2rem;
  font-size: 1.125rem;
  color: #ddd;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 1rem;
    text-align: justify;
    width: 100%;
    font-weight: 100;
    font-size: 1rem;
  }

  pre + p {
    margin-top: 1rem;
  }

  strong {
    color: #e67224;
    font-size: 1rem;
  }

  img {
    height: 200px;
    width: 100%;
    
    background-color: rgba(0,0,0,0.5);
    border-radius: 8px;
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
`