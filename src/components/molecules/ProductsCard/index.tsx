import type { Products } from '@/types/products';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { styled } from 'styled-components';

import { Flexbox, Typography } from '@/components/atoms';

import { NEXT_IMAGE_BLUR_URL } from '@/constants/products';

type ProductsCardProps = Pick<
  Products,
  'thumbnail' | 'brand' | 'description' | 'price' | 'id'
>;

function ProductsCard({
  thumbnail,
  brand,
  description,
  price,
  id
}: ProductsCardProps) {
  const router = useRouter();
  return (
    <CardWrap
      direction="column"
      gap={8}
      onClick={() => router.push(`/products/${id}`)}
    >
      <CardImageWrap>
        <Image
          src={thumbnail}
          alt={`products-card-id-${id}`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={NEXT_IMAGE_BLUR_URL}
        />
      </CardImageWrap>
      <Typography weight="bold">{brand}</Typography>
      <Typography ellipsis color="grey">
        {description}
      </Typography>
      <Typography weight="bold" variant="body1">
        {price}원
      </Typography>
    </CardWrap>
  );
}

const CardWrap = styled(Flexbox)`
  width: 100%;
`;

const CardImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 0.9;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

export default ProductsCard;
