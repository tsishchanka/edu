import React from 'react';

import {getProperty } from '../utils';
import {ToastsWrapper} from '../components/Toast/ToastsWrapper';
import Toast from '../components/Toast';

export type ToastListItems = Array<ToastItem>;

export interface ToastItem {
    toastId?: string;
    title?: string;
    bgColor?: string;
    animation?: string;
    textColor?: string;
    type?: string;
    position?: string;
    delay?: number;
    toastList?: ToastListItems;
    autoDelete?: boolean;
    deleteDelay?:  number;
    description?: string;
    toastMargin?: string;
}

let toastList: ToastListItems = [];

class ToastClass  {


  toastList: ToastListItems;
  constructor(toastList: ToastListItems) {
    this.toastList =  toastList;
  }

  getToast(description: string, properties: ToastItem) {

    if (toastList.length < 3)
      toastList = [...toastList, getProperty(properties)];
    console.log('story getToast', toastList);
    // toastList = [getProperty(properties)];
    return (
      <ToastsWrapper>
        <Toast
          toastList={toastList}
          position={properties.position}
          autoDelete={properties.autoDelete}
          deleteDelay={properties.delay}
          animation={properties.animation}
          toastMargin={properties.toastMargin}
          title={properties.title}
          type={properties.type}
          description={description}
          delay={properties.delay}
          bgColor={properties.bgColor}
          textColor={properties.textColor}
        />
      </ToastsWrapper>
    );
  }

}

export const toastProperties = new ToastClass(toastList);
