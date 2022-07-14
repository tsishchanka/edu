import React from 'react';

import { toastToShow } from '../core/ToastsService';
import { toastProperties } from '../containers/ToastService';
import Toast from '../components/Toast/index';
import ToastRefContainer from '../containers/ToastRefContainer'


export default {
  title: 'Toast-library',
  component: ToastRefContainer,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['info', 'warning', 'success', 'error'],
      },
    },
    autoDelete: {
      control: {
        type: 'boolean',
      },
    },
    position: {
      control: {
        type: 'inline-radio',
        options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      },
    },

    toastMargin: {
      control: {
        type: 'inline-radio',
        options: ['20px', '30px', '40px'],
      },
    },


    backgroundColor: { control: 'color'},

    textColor: { control: 'color' },

    animation: {
      control: {
        type: 'inline-radio',
        options: [
          'from-top',
          'from-bottom',
          'from-right',
          'from-left',
        ],
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    onDelete: {
      action: 'clicked',
    },
  },
};


const Template = args => <ToastRefContainer {...args} />;

export interface ToastShapeProps {
  description: string;
  title: string,
  type?: string;
  position: string;
  autoDelete: boolean;
  deleteDelay:  number;
  animation: string;
  backgroundColor: string;
  textColor: string;
  toastMargin: string;
}

//  export const ToastShape = (args: ToastShapeProps) =>
//    toastProperties.getToast(args.description, {
//     type: args.type,
//     position: args.position,
//     title: args.title,
//     autoDelete: args.autoDelete,
//     delay: args.deleteDelay,
//     animation: args.animation,
//     bgColor: args.backgroundColor,
//     textColor: args.textColor,
//     toastMargin: args.toastMargin,
//   });


export const ToastShape = Template.bind({});
ToastShape.args = {
  type: '',
  title: '',
  position: 'top-left',
  autoDelete: false,
  deleteDelay: 2000,
  animation: '',
  description: 'toast description',
  bgColor: '',
  textColor: '',
  toastMargin: '20px',
  onDelete: () => console.log('click'),
};
