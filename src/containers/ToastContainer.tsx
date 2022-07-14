import React, {useState, forwardRef,useEffect,useLayoutEffect, useImperativeHandle, useCallback} from 'react';


import { ToastsWrapper } from '../components/Toast/ToastsWrapper';
import Toast from '../components/Toast';
import { toastToShow } from '../core/ToastsService';


type ToastsContainerProps = {}

type ToastsContainerHandle = {
  anAdd: () => any,
  onDelete: () => any,
}

const ToastsContainer = forwardRef((props: any, ref) => {
  const {  addToast, removeToast, getToasts, generateToast } = toastToShow;
  const toastList = getToasts();
  const [list, setList] = useState(toastList);

   const { autoDelete, deleteDelay } = props;


  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);



  useLayoutEffect(() => {
    const addedToast = generateToast(props);
    toastToShow.addToast(addedToast);
    setList([...toastList]);
    console.log('EFF LISTT', list);
  }, [props]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        handleDeleteToast(toastList[0].id);
      }
    }, deleteDelay);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, list, autoDelete, deleteDelay]);

  const handleDeleteToast = (toastId: any): any => {
    const newToastList = list.filter((toast: any) => toast.id !== toastId);
    setList([...newToastList]);
    removeToast( toastId);
  };

  const handleAddToast = useCallback((toast: any): any =>  {
    addToast(toast);
  }, []);

  console.log('TOAST LISTT', getToasts());

  return (
    <ToastsWrapper>

      {list?.map((toast: any) =>
         <Toast
          key={`toastId-${toast.id}`}
          onDeleteToast = {handleDeleteToast}
          {...toast}
        />)}

    </ToastsWrapper>
  );
});

export default ToastsContainer;
