import styled from "styled-components";

export const Text = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 1.75rem;
  text-align: center;
  width: 100%;

  strong {
    color: #0070f3;
  }

  em {
    color: #e67224;
  }

  @media (min-width: 720px) {
    font-size: 3rem;
  }
`