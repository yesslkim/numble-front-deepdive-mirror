import { useParams } from 'next/navigation';

import { Flexbox, Typography } from '@/components/atoms';

import useQueryUserPosts from '@/hooks/useQueryUserPosts';

import { BOTTOM_NAV_HEIGHT, brandColor } from '@/constants/theme';

function UserCartsList() {
  const params = useParams();
  const id = Number(params.id);

  const { data: userPostsData } = useQueryUserPosts(id);

  if (!userPostsData?.total) return null;

  return (
    <Flexbox
      component="ul"
      direction="column"
      gap={20}
      pl="20px"
      pr="20px"
      pb={`${BOTTOM_NAV_HEIGHT}px`}
    >
      {userPostsData.posts.map((post) => (
        <li key={`user-posts-${post.id}`}>
          <Typography weight="bold" variant="h3" mb="10px" color="black">
            {post.title}
          </Typography>
          <Typography>{post.body}</Typography>
          <Flexbox align="center" gap={10} mt="10px">
            {post.tags.map((tag) => (
              <Typography
                key={`user-posts-tag-${post.id}-${tag}`}
                style={{
                  background: brandColor.green,
                  padding: '4px 6px',
                  borderRadius: 8
                }}
                color="white"
              >
                {tag}
              </Typography>
            ))}
          </Flexbox>
        </li>
      ))}
    </Flexbox>
  );
}

export default UserCartsList;
