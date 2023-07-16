import {
  ItemUserInfoContainer,
  ItemUserProfile,
  ItemUserInfoText,
} from '../style';
const ItemUserInfo = () => {
  return (
    <ItemUserInfoContainer>
      <ItemUserProfile>
        <img src="https://i.pinimg.com/564x/e8/5a/a8/e85aa8db825d3ceff3e7cecaa99b940d.jpg" />
      </ItemUserProfile>
      <ItemUserInfoText>
        <h5>김민트</h5>
        <p>강남구 논현동</p>
      </ItemUserInfoText>
    </ItemUserInfoContainer>
  );
};

export default ItemUserInfo;
