import styled from 'styled-components';

export const StyledCarouselWrapper = styled.div`
  overflow: hidden;
  padding: 3rem 0 0;
  .dots {
    margin-top: 2rem;
    justify-content: center;
  }

  h1 {
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const StyledCarousel = styled.div`
  display: flex;
  margin: 0 -1rem;
  /* transform: ${({ index, itemsPerView }) => `translateX(-${index*(100/itemsPerView)*itemsPerView}%)`}; */
  transition: all 1s ease; 
  .bit {
    min-width: ${({ itemsPerView }) => `calc(${100/itemsPerView}% - 2rem)`};
    margin: 0 1rem;
    .image-wrap {
      height: 175px;
    }
    .bit-title {
      font-size: 1.125rem
    }
  }
  
`;

