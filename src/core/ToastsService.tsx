import { uuid } from '../helpers';
import { getProperty } from '../utils';
// import {ToastsWrapper} from '../components/Toast/ToastsWrapper';
// import Toast from '../components/Toast';

export type ToastListItems = Array<ToastItem>;

export interface ToastItem {
    id?: string;
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



class ToastService {

  toastList: ToastListItems;
  toastRef = {
    onAddToast: (toast: object): any => { },
    onDeleteToast: (toastId: string | number): any => { },
  };
  constructor() {
    this.toastList = [];

  }

  init = (ref: any) => {
    this.toastRef = ref;
  };

  getToasts = () => {
    return this.toastList;
  };

  addToast = (toast: object) => {
    console.log('addToast');
    if (this.toastList.length < 3) {
      this.toastList.push(toast);
      }
  };

  removeToast = (toastId: any) => {
    console.log('removeToast');
    this.toastList = this.toastList.filter(({ id }: any) => id !== toastId);
  };

  generateToast = (properties: any) => {
    return {
      id: uuid(),
      ...properties,
    };
  };
}

export const toastToShow = new ToastService();
