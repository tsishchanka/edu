import React, { FC } from 'react';

import ToastPortal from '../ToastPortal';
import {ToastPortalProps} from '../ToastPortal/ToastPortal';



export const ToastsWrapper: FC<ToastPortalProps> = ({  children }) => {
  return <ToastPortal>{children}</ToastPortal>;
};
