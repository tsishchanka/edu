import { TOAST_TYPES, TOAST_TEXT, COLORS } from '../constants';
import iconSuccess from '../assets/success.svg';
import iconSearch from '../assets/search.svg';
import iconWarning from '../assets/warning.svg';
import iconInfo from '../assets/info.svg';

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

export const getTitle = (type: any) => {
  switch (type) {
  case TOAST_TYPES.success:
    return TOAST_TEXT.success;
  case TOAST_TYPES.error:
    return TOAST_TEXT.error;
  case TOAST_TYPES.info:
    return TOAST_TEXT.info;
  case TOAST_TYPES.warning:
    return TOAST_TEXT.warning;
  default:
    return TOAST_TYPES.info;
  }
};

export const getTextColor = (type: any) => {
  switch (type) {
  case TOAST_TYPES.success:
    return COLORS.white;
  case TOAST_TYPES.error:
    return COLORS.white;
  case TOAST_TYPES.info:
    return COLORS.white;
  case TOAST_TYPES.warning:
    return COLORS.black;
  default:
    return COLORS.white;
  }
};



export const getBackgroundColor = (type: any) => {
  switch (type) {
  case TOAST_TYPES.success:
    return COLORS.green;
  case TOAST_TYPES.error:
    return COLORS.red;
  case TOAST_TYPES.info:
    return COLORS.purple;
  case TOAST_TYPES.warning:
    return COLORS.yellow;
  default:
    return COLORS.green;
  }
};

export const getIcon = (type: any) => {
  switch (type) {
  case TOAST_TYPES.success:
    return iconSuccess;
  case TOAST_TYPES.error:
    return iconSearch;
  case TOAST_TYPES.info:
    return iconInfo;
  case TOAST_TYPES.warning:
    return iconWarning;
  default:
    return iconInfo;
  }
};


export const getProperty = ( properties: ToastItem) => {
  return {
    title: getTitle(properties),
    textColor: getTextColor(properties),
    bgColor: getBackgroundColor(properties),
    icon: getIcon(properties),
  };
};
