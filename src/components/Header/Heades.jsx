import YourSvg from '../../images/svg/logo.svg';
import { Wrapper, ButtomWrapper, HeaderSection } from './Header.styled';


const Header = () => {
  return (
    <HeaderSection>
      <Wrapper className="header-wrapper">
        <img src={YourSvg} alt="Logo" width="104" height="26" />
        <ButtomWrapper>
          <button type="button" onClick={}>
            Users
          </button>
          <button type="button" onClick={}>
            Sign up
          </button>
        </ButtomWrapper>
      </Wrapper>
    </HeaderSection>
  );
};

export default Header;
