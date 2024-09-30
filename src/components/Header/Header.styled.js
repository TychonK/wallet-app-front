import styled from 'styled-components';

export const size = {
  mobile: '@media screen and (min-width: 320px)',
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1280px)',
};

export const MainHeader = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${({ theme }) => theme.headers};

  ${size.tablet} {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  // align-items: center;

  // align-items: ${props => props.align || 'center'};
  margin-left: 10px;
  font-size: 18px;
  line-height: 1.47;
  color: ${props => props.color || 'var(--color-gray)'};

  ${size.tablet} {
    margin-left: 20px;
  }
`;

export const LogoutBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: baseline;

  font-family: 'Circe', 'Segoe UI', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  text-transform: capitalize;

  color: ${props => props.color || 'var(--color-gray)'};
  background-color: ${({ theme }) => theme.headers};
  border: none;
  border-radius: 5px;
  margin: 0 0 0 12px;
  padding: 2px 10px;

  transition: color 250ms var(--cubic-bezier),
  background-color 250ms var(--cubic-bezier);

  ${size.tablet} {
    &:hover,
    &:focus-within {
      color: var(--color-white);
      background-color: var(--color-primary);
    }
  }
`;

export const ExitIcon = styled.svg`
  transform: translateY(4px);

  width: 18px;
  height: 18px;
  margin-right: ${props => props.mRight || '8px'};

  transition: color 250ms var(--cubic-bezier);

  @media screen and (max-width: 767px) {
    &:hover,
    &:focus-within {
      color: var(--color-primary);
    }
  }
`;

export const UserName = styled.p`
  ${size.tablet} {
    transform: translateY(3px);
    padding: 0px 16px 0 0;
    border-right: 1px solid;
  }
`;

export const Logout = styled.span``;
