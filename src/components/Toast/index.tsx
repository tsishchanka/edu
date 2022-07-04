import React, { FC, useEffect, useState } from 'react';

import ErrorBoundary from '../ErrorBoundary';

import {ToastWrapper, Button, ImgBox, TextWrapper, Title, Description, Container, ToastMain} from './Toast.styles';


export interface ToastItemArgs {
    title?: string;
    bgColor?: string;
    animation?: string;
    type: 'warning' | 'success' | 'info' | 'error';
    position?: string;
    delay: number;
    autoDelete?: boolean;
    deleteDelay?:  number;
    toastList: Array<any>;
    description?: string;
    textColor?: string;
    toastMargin?: string;
}


const Toast: FC<ToastItemArgs> = ({ ...props}) => {
  const { toastList, position, title, description,
    autoDelete, deleteDelay, textColor, animation,
    toastMargin, bgColor } = props;
  const [list, setList] = useState([toastList]);
  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        handleDeleteToast(toastList[0].id);
      }
    }, deleteDelay);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, deleteDelay, list]);


  const handleDeleteToast = (id: string) => {
    const newToastList = list.filter((toast: any) => toast.id !== id);
    setList([...newToastList]);
  };

  return  (
    <ErrorBoundary>
      <ToastWrapper animation={animation} bgColor={bgColor} >
        <Container className={position} toastMargin={toastMargin}>
          {list.map((toast: any) => (
            <ToastMain
              key={`'toast'-${toast.id}`}
              style={{
                backgroundColor: bgColor === '' ? toast.bgColor : bgColor,
              }}  onDrag={() => handleDeleteToast(toast.id)} draggable={true}
            >

              <ImgBox style={{
                color: textColor === '' ? toast.textColor : textColor,
              }}>
                <img src={toast.icon} />
              </ImgBox>
              <TextWrapper >
                <Title>
                  {title !== '' ? title : toast.title}
                </Title>
                <Description style={{
                  color: textColor === '' ? toast.textColor : textColor,
                }}>{description !== '' ? description : toast.description}
                </Description>
                <Button

                  onClick={() => handleDeleteToast(toast.id)}
                  style={{
                    color: textColor === '' ? toast.textColor : textColor,
                  }}
                >
                  X
                </Button>
              </TextWrapper>
            </ToastMain>
          ))}
        </Container>
      </ToastWrapper>
    </ErrorBoundary>
  );
};

export default Toast;
