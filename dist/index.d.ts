/// <reference types="react" />
import { ReactNode, FC } from 'react';

declare type ToastPortalProps = {
    children: ReactNode;
};

declare const ToastsWrapper: FC<ToastPortalProps>;

declare type ToastListItems = Array<ToastItem>;
interface ToastItem {
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
    deleteDelay?: number;
    description?: string;
    toastMargin?: string;
}
declare class ToastClass {
    private static singleton;
    toastList: ToastListItems;
    constructor(toastList: ToastListItems);
    getId(): string;
    getTitle(properties: ToastItem): string;
    getTextColor(properties: ToastItem): string;
    getBackgroundColor(properties: ToastItem): string;
    getIcon(properties: ToastItem): any;
    getProperty(description: string, properties: ToastItem): {
        id: string;
        description: string;
        title: string;
        textColor: string;
        bgColor: string;
        icon: any;
        toastId?: string | undefined;
        animation?: string | undefined;
        type?: string | undefined;
        position?: string | undefined;
        delay?: number | undefined;
        toastList?: ToastListItems | undefined;
        autoDelete?: boolean | undefined;
        deleteDelay?: number | undefined;
        toastMargin?: string | undefined;
    };
    getToast(description: string, properties: ToastItem): JSX.Element;
}
declare const toastToShow: ToastClass;

export { ToastItem, ToastsWrapper, toastToShow };
