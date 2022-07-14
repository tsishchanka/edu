import React, { useRef, useEffect } from 'react';

import { toastToShow } from '../core/ToastsService';
import ToastsContainer from '../containers/ToastContainer';

const ToastRefContainer = (props: any) => {

  const toastRef = useRef();

  useEffect(() => {
    toastToShow.init(toastRef.current);
  }, []);

  return (
    <ToastsContainer ref={toastRef} {...props} />
  );
};

export default ToastRefContainer;
