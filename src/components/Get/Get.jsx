import { useEffect, useState } from 'react';
import {
  Section,
  GetWrapper,
  Title,
  List,
  Item,
  Avatar,
  SeeMoreButton,
  UserInfo,
} from './Get.styled';
import Loader from 'components/Loader/Loader';
import { getUsers } from 'services/services/services';
import UserImg from '../../images/svg/photo-cover.svg';

const Get = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isSeeMore, setIsSeeMore] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers(page)
      .then(data => {
        if (!data.users) {
          throw new Error('Nothing found for your request');
        }
        setIsSeeMore(() => page < Math.ceil(data.total_users / 6));

        if (page === 1) {
          setUsers(data.users);
          return;
        }

        setUsers(prevState => [...prevState, ...data.users]);
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [page]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Section id="get">
      <GetWrapper className="post__form ">
        <Title>Working with GET request</Title>
        {isLoading ? (
          <Loader />
        ) : (
          <List className="get__list">
            {users
              .sort(user => user.registration_timestamp)
              .map(({ id, photo, email, name, position, phone }) => {
                return (
                  <Item key={id} className="get__item">
                    <Avatar src={photo || UserImg} alt={name} />
                    <UserInfo>{name}</UserInfo>
                    <div>
                      <UserInfo>{position}</UserInfo>
                      <div className="tooltip">
                        {email}
                        <span className="tooltiptext">{email}</span>
                      </div>
                      <UserInfo>{phone}</UserInfo>
                    </div>
                  </Item>
                );
              })}
          </List>
        )}
        {isSeeMore && (
          <SeeMoreButton type="button" onClick={onLoadMore}>
            Show more
          </SeeMoreButton>
        )}
      </GetWrapper>
    </Section>
  );
};

export default Get;
