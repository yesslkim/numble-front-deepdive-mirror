'use client';

import type { Products } from '@/types/products';

import { Fragment } from 'react';

import styled from 'styled-components';

import { ProductsCard } from '@/components/molecules';
import { Progressbar } from '@/components/atoms';

import useQueryProducts from '@/hooks/useQueryProducts';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

import formats from '@/utils/formats';

function ProductsList() {
  const { getInfinitData } = useQueryProducts();
  const { lastItemRef } = useInfiniteScroll({
    hasNextPage: getInfinitData.hasNextPage,
    fetchNextPage: getInfinitData.fetchNextPage
  });

  return (
    <>
      <Progressbar />
      <ProductListWrap>
        {getInfinitData.data?.pages.map(({ products }, index) => {
          return (
            <Fragment key={`product-list-page-${index}`}>
              {products?.map((product: Products) => (
                <Fragment key={`products-list-${product.id}`}>
                  <ProductsCard
                    thumbnail={product.thumbnail}
                    brand={product.brand}
                    price={formats.comma(
                      formats.dallarExchangeKRW(product.price)
                    )}
                    description={product.description}
                    id={product.id}
                  />
                </Fragment>
              ))}
              <div ref={lastItemRef}></div>
              <div></div>
            </Fragment>
          );
        })}
      </ProductListWrap>
    </>
  );
}

const ProductListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 100px 10px 90px;
  & > div {
    width: 50%;
    padding: 5px;
  }
`;

export default ProductsList;
