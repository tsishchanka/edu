import {toastToShow} from '../containers/ToastService';
import Toast from '../components/Toast/index';


export default {
  title: 'Toast-library',
  component: Toast,
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
  },
};

export interface ToastShapeProps {
  description: string;
  title: string,
  type: 'warning' | 'success' | 'info' | 'error';
  position: string;
  autoDelete: boolean;
  deleteDelay:  number;
  animation: string;
  backgroundColor: string;
  textColor: string;
  toastMargin: string;
}



export const ToastShape = (args: ToastShapeProps) =>
  toastToShow.getToast(args.description, {
    type: args.type,
    position: args.position,
    title: args.title,
    autoDelete: args.autoDelete,
    delay: args.deleteDelay,
    animation: args.animation,
    bgColor: args.backgroundColor,
    textColor: args.textColor,
    toastMargin: args.toastMargin,
  });



ToastShape.args = {
  type: 'info',
  title: '',
  position: 'top-left',
  autoDelete: false,
  deleteDelay: 2000,
  animation: '',
  description: 'toast description',
  backgroundColor: '',
  textColor: '',
  toastMargin: '',
};
