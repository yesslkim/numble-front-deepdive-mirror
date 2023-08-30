import { Users } from '@/types/users';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { styled } from 'styled-components';

import { MdMoreVert } from 'react-icons/md';

import { Flexbox, Typography } from '@/components/atoms';

import formats from '@/utils/formats';

import { brandColor } from '@/constants/theme';
import { NEXT_IMAGE_BLUR_URL } from '@/constants/products';

function UsersCard({
  id,
  firstName,
  lastName,
  age,
  gender,
  email,
  username,
  image,
  birthDate
}: Users) {
  const router = useRouter();
  return (
    <UserCardWrap align="center" onClick={() => router.push(`/users/${id}`)}>
      <ImageWrap>
        <Image
          src={image}
          alt={`user-${username}-${id}`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={NEXT_IMAGE_BLUR_URL}
        />
      </ImageWrap>
      <Flexbox direction="column" align="flex-start" gap={2}>
        <Flexbox gap={4}>
          <Typography weight="bold">{username}</Typography>
          <Typography color="grey">
            ({lastName} {firstName})
          </Typography>
        </Flexbox>
        <Typography>gender: {gender}</Typography>
        <Typography>age: {age}</Typography>
        <Typography>emale: {email}</Typography>
        <Typography>
          birthDate: {formats.parserDateFormat(`${birthDate} 00:00:00`, '/')}
        </Typography>
      </Flexbox>
      <MoreStyle>
        <MdMoreVert />
      </MoreStyle>
    </UserCardWrap>
  );
}

const UserCardWrap = styled(Flexbox)`
  border: 1px solid ${brandColor.grey};
  border-radius: 8px;
  padding: 5px;
  position: relative;
`;

const ImageWrap = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background: #eeeeee;
  margin-right: 10px;
`;

const MoreStyle = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default UsersCard;
