import { FC } from 'react';
export interface ToastItemArgs {
    title?: string;
    bgColor?: string;
    animation?: string;
    type: 'warning' | 'success' | 'info' | 'error';
    position?: string;
    delay: number;
    autoDelete?: boolean;
    deleteDelay?: number;
    toastList: Array<any>;
    description?: string;
    textColor?: string;
    toastMargin?: string;
}
declare const Toast: FC<ToastItemArgs>;
export default Toast;
