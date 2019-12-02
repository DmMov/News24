import styled from 'styled-components';

export const ImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    vertical-align: middle;
  }
`;