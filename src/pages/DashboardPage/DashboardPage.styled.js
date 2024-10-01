import styled from 'styled-components';

export const size = {
    mobile: '@media screen and (min-width: 320px)',
    tablet: '@media screen and (min-width: 768px)',
    desktop: '@media screen and (min-width: 1280px)',
  };

 export const MainWrap = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
//   background-color: rgba(255, 255, 255, 0.4);
//   backdrop-filter: blur(50px);
  flex-grow: 1;

  ${size.tablet} {
    // margin-top: 32px;
    padding: 32px 32px;
    justify-content: start;
  }
  ${size.desktop} {
    padding: 0;
    flex-direction: row;
    position: relative;
  }
`;
export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  ${size.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* justify-content: start; */
  }

  ${size.desktop} {
    display: flex;
    padding-right: 69px;
    padding-top: 40px;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    border-right: 2px solid #e7e5f2;
    box-shadow: 1px 0px 0px rgba(255, 255, 255, 0.6);
    
  }
`;
export const TabWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;

  ${size.tablet}{
      margin-top: 0px;
  }
  ${size.desktop} {
    padding-left: 69px;
    padding-top: 40px;
  }
`;
export const MobSidebar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const HomeTabWrap = styled.div`
  margin-top:32px;
`;

export const CurrencyWrap = styled.div`
    margin: 28px 0 0 0;
    ${size.tablet}{
        margin: 0 0 0 20px;
      }
    ${size.desktop}{
        margin: 32px 0 0 0;
    }
    `
export const TabletBalanceWrap = styled.div`
  margin-top: 28px;
`;

export const ButtonWrap = styled.div`
    position: fixed;
    right: 40px;
    bottom: 40px;
    `;