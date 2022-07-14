import React, { FC, useEffect, useState, useCallback } from 'react';

import ErrorBoundary from '../ErrorBoundary';

import {getTitle, getTextColor, getBackgroundColor, getIcon} from '../../utils';

import {ToastWrapper, Button, ImgBox, TextWrapper, Title, Description, Container, ToastMain} from './Toast.styles';


export interface ToastItemArgs {
    id?: string | number;
    title?: string;
    bgColor?: string;
    animation?: string;
    type?: string;
    position?: string;
    delay?: number;
    autoDelete?: boolean;
    deleteDelay?:  number;
    toastList?: Array<any>;
    description?: string;
    textColor?: string;
    toastMargin?: string;
    onDeleteToast?: any;
}


const Toast: FC<ToastItemArgs> = ({ ...props }) => {
  const {  position, title, description,
    type, textColor, animation, toastMargin,
    bgColor, id, onDeleteToast } = props;

  return  (
    <ErrorBoundary>
      <ToastWrapper animation={animation} bgColor={bgColor} >
        <Container className={position} toastMargin={toastMargin}>
          {/* {list.map((toast: any) => ( */}
          <ToastMain
            // key={`'toast'-${toast.id}`}
            style={{
              backgroundColor: bgColor === '' ? getBackgroundColor(type) : bgColor,
            }}  onDrag={() => onDeleteToast(id)} draggable={true}
          >

            <ImgBox style={{
              color: textColor === '' ? getTextColor(type) : textColor,
            }}>
              <img src={getIcon(type)} />
            </ImgBox>
            <TextWrapper >
              <Title>
                {title !== '' ? title : getTitle(type)}
              </Title>
              <Description style={{
                color: textColor === '' ? getTextColor(type) : textColor,
              }}>{description !== '' ? description : description}
              </Description>
              <Button

                onClick={()=>onDeleteToast(id)}
                style={{
                  color: textColor === '' ? getTextColor(type) : textColor,
                }}
              >
                  X
              </Button>
            </TextWrapper>
          </ToastMain>
          {/* ))} */}
        </Container>
      </ToastWrapper>
    </ErrorBoundary>
  );
};

export default Toast;
