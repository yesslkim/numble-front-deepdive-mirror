'use client';
import { Products } from '@/types/products';

import type { ChangeEvent, MouseEvent } from 'react';
import { useState } from 'react';

import { useParams } from 'next/navigation';
import Image from 'next/image';

import { styled } from 'styled-components';

import { useMutation } from '@tanstack/react-query';

import { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiMessageAdd } from '@react-icons/all-files/bi/BiMessageAdd';

import { Button, Flexbox, Typography } from '@/components/atoms';

import useQueryProductDetail from '@/hooks/useQueryProductDetail';

import formats from '@/utils/formats';

import { putEditProduct } from '@/api/products';

import { TOPBAR_HEIGHT } from '@/constants/theme';
import { NEXT_IMAGE_BLUR_URL } from '@/constants/products';

function ProductDetail() {
  const params = useParams();
  const { data, inavalidateQuery } = useQueryProductDetail(Number(params.id));

  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState<Products>();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  const { mutate } = useMutation(putEditProduct);

  const handleClickEdit = () => {
    if (data) {
      setTitle(data.title);
      setPrice(Number(data.price));
    }
    setIsEdit(true);
  };

  const handleClickSubmit = () => {
    mutate(
      {
        productId: Number(params.id),
        params: {
          title,
          price
        }
      },
      {
        onSuccess(responseData) {
          setEditData(responseData);
          inavalidateQuery();
          setIsEdit(false);
        }
      }
    );
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    setPrice(Number(onlyNumber));
  };

  const handleClickViewDetail = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    alert('이미지 상세보기');
  };

  const handleSlide = (
    swiper: SwiperType,
    e: globalThis.MouseEvent | TouchEvent | PointerEvent
  ) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON') return;
    swiper.slideNext();
  };

  if (!data) return;

  return (
    <div
      style={{
        height: '100dvh',
        paddingTop: TOPBAR_HEIGHT
      }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onClick={handleSlide}
        loop={true}
      >
        {(editData?.images || data.images || []).map((url) => (
          <SwiperSlide key={`thumbnail-image-${url}`}>
            <ImageWrap>
              <Image
                src={url}
                alt="image"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={NEXT_IMAGE_BLUR_URL}
              />
              <Button
                onClick={handleClickViewDetail}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0
                }}
                variant="filled"
                color="white"
                size="large"
                endIcon={<BiMessageAdd />}
              >
                이미지 상세보기
              </Button>
            </ImageWrap>
          </SwiperSlide>
        ))}
      </Swiper>
      <ProductDetailInfo>
        {isEdit ? (
          <>
            <div>
              <Typography weight="bold">TITLE</Typography>
              <input type="text" value={title} onChange={handleChangeTitle} />
            </div>
            <div
              style={{
                marginTop: 10
              }}
            >
              <Typography weight="bold">PRICE</Typography>
              <Flexbox>
                <Typography>$</Typography>
                <input
                  inputMode="numeric"
                  type="text"
                  pattern="\d*"
                  onChange={handleChangePrice}
                  value={price}
                  placeholder="$"
                />
              </Flexbox>
            </div>
          </>
        ) : (
          <>
            <Typography weight="bold">
              {editData?.brand.toUpperCase() || data.brand.toUpperCase()}
            </Typography>
            <Flexbox align="flex-start" gap={8} mt="10px">
              <Typography variant="h4">
                {editData?.title || data.title}
              </Typography>
              <Typography
                color="grey"
                style={{
                  minWidth: 'fit-content'
                }}
              >
                (재고 {editData?.stock || data.stock}개)
              </Typography>
            </Flexbox>
            <Typography variant="h2">
              {formats.comma(
                formats.dallarExchangeKRW(editData?.price || data.price)
              )}
              원
            </Typography>
            <Typography>{editData?.description || data.description}</Typography>
          </>
        )}
      </ProductDetailInfo>
      <Button
        size="large"
        variant="filled"
        mt="auto"
        onClick={isEdit ? handleClickSubmit : handleClickEdit}
      >
        {isEdit ? '완료' : '수정'}
      </Button>
    </div>
  );
}

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const ProductDetailInfo = styled.section`
  margin-top: 20px;
  padding: 0 20px;
`;

export default ProductDetail;
