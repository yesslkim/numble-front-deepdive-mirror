import React from 'react';

import { useParams } from 'next/navigation';

import { Flexbox, Typography } from '@/components/atoms';

import useQueryUserCarts from '@/hooks/useQueryUserCarts';

import formats from '@/utils/formats';

import { brandColor } from '@/constants/theme';

function UserCartsList() {
  const params = useParams();
  const id = Number(params.id);
  const { data: userCartsData } = useQueryUserCarts(id);

  if (!userCartsData) return null;

  return (
    <Flexbox
      direction="column"
      component="ul"
      style={{
        padding: 20
      }}
      gap={10}
    >
      {userCartsData.total &&
        userCartsData.carts[0].products.map((product) => (
          <Flexbox
            component="li"
            key={`user-carts-data-${product.id}`}
            align="center"
            gap={5}
          >
            <Typography>{product.title}</Typography>
            <Typography ml="auto">
              {formats.comma(formats.dallarExchangeKRW(product.price))}원 *
            </Typography>
            <Typography>{product.quantity}</Typography>
          </Flexbox>
        ))}
      <Flexbox
        align="center"
        mt="10px"
        pt="10px"
        gap={5}
        style={{
          borderTop: `1px solid ${brandColor.grey}`
        }}
      >
        <Typography weight="bold">Total</Typography>
        <Typography ml="auto" color="blue">
          {formats.comma(
            formats.dallarExchangeKRW(userCartsData?.carts[0]?.total || 0)
          )}
          원
        </Typography>
        <Typography>count {userCartsData?.carts[0]?.totalQuantity}</Typography>
      </Flexbox>
    </Flexbox>
  );
}

export default UserCartsList;
