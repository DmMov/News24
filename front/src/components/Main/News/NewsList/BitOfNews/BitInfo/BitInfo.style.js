import styled from 'styled-components';

export const StyledBitInfo = styled.div`
  padding: 2rem;
  .bit-category {
    display: block;
    color: #4299e1;
    font-size: .75rem;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: .5rem;
    &:hover {
      text-decoration: underline;
    }
  }
  .bit-title {
    font-size: 1.5rem;
    line-height: 1.25;
  }
  .bit-text {
    color: rgba(0, 0, 0, .6);
    &:first-letter {
      text-transform: uppercase;
    }
  }
  .read-more-link {
    font-size: .875rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    color: currentColor;
    display: flex;
    margin-top: 1rem;
    align-items: center;
    .arrow-icon {
      margin-left: 4px;
      font-size: 1.1rem;
    }
    &:hover {
      color: #4299e1;
    }
  }
  .bit-details {
    display: flex;
    font-size: .875rem;
    padding: 1rem 0;
    color: rgba(0, 0, 0, .38);
    .dot-icon {
      font-size: .25rem;
      margin: 0 8px;
    }
    .bit-views-box {
      display: flex;
      align-items: center;
    }
    .stat-icon {
      font-size: 1rem;
      margin-right: 3px
    }
  }
`;