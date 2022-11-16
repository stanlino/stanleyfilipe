import styled from 'styled-components';

export const Container = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.25rem;
    font-weight: 100;

    @media (max-width: 720px) {
      font-size: 1rem;
      text-align: center;
    }
  }

  .projects {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media (max-width: 720px) {
      flex-direction: column;
    }

    a {
      height: 200px;
      max-width: 300px;
      aspect-ratio: 16/9;
      flex: 1;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: all 0.5s;
      border: 1px solid transparent;
      border-radius: 4px;

      align-items: center;
      justify-content: center;

      position: relative;
      overflow: hidden;

      img {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: all 0.5s;
      }

      .info {
        position: absolute;
        z-index: 2;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        transition: all 0.5s;
        color: transparent;

        strong {
          font-size: 1.25rem;
          font-weight: 100;
        }

        p {
          font-size: 0.75rem;
          font-weight: 100;
          margin: 0.5rem 0;
        }

        span {
          font-size: 0.75rem;
          font-weight: 100;
          
        }

        .techs {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          margin: 1rem;

          span {
            font-size: 0.75rem;
            font-weight: 100;
            
            padding: 0.25rem;
            border-radius: 0.25rem;
            border: 1px solid transparent;
          }
        }
      }

      :hover {
        img {
          transform: scale(1.1);
          filter: blur(5px) brightness(0.2);
        }

        .info {
          color: #fff;

          .techs {
            span {
              border: 1px solid #fff;            
            }
          }
        }
      }

      @media (max-width: 720px) {
        max-width: 100%;
        aspect-ratio: 16/12;

        img {
          transform: scale(1.1);
          filter: blur(20px) brightness(0.5);
        }

        .info {
          color: #fff;
          gap: 0.5rem;

          .techs {
            span {
              border: 1px solid #fff;            
            }
          }
        }

      }
    }

  }

`;