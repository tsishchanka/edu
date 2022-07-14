import styled from 'styled-components';

interface Props {
  animation?: string;
  bgColor?: string;
  textColor?: string;
  toastMargin?: string;
}

export const ToastWrapper = styled.div<Props>`
 animation: ${props =>
    props.animation ? props.animation : 'from-right'}
      0.7s;

      @keyframes from-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes from-top {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes from-bottom {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes from-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const ToastMain = styled.div<Props>`
    background-color: ${props => props.bgColor };
    transition: 0.3s ease;
    position: relative;
    pointer-events: auto;
    margin: 0 0 6px;
    padding: 30px;
    margin-bottom: 15px;
    height: 50px;
    width: 365px;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 4px 4px 8px gray;
    border-radius: 24px;
    color: #fff;
    opacity: 1;

`;

export const Button = styled.button<Props>`
    position: relative;
    left: 265px;
    bottom: 70px;
    font-weight: 700;
    color: ${props => props.textColor ? props.textColor : '#fff'};
    border: none;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.8;
    line-height: 1;
    font-size: 20px;
    padding: 0;
    cursor: pointer;
    background: 0 0;
`;

export const ImgBox = styled.div<Props>`
    float: left;
    margin: -7px 15px 0;
`;

export const Container = styled.div<Props>`
    box-sizing: border-box;
    position: fixed;
    z-index: 100;
    &.top-right {
    top: ${props =>
    props.toastMargin ? props.toastMargin : '20px'};
    right: ${props =>
    props.toastMargin ? props.toastMargin : '20px'};
    transition: transform 0.6s ease-in-out;
    animation: ${props =>
    props.animation ? props.animation : 'from-right'}
      0.7s;
  }

  &.bottom-right {
    bottom: ${props =>
    props.toastMargin ? props.toastMargin : '20px'};
    right: ${props =>
    props.toastMargin ? props.toastMargin : '20px'};
    transition: transform 0.6s ease-in-out;
    animation: ${props =>
    props.animation ? props.animation : 'from-right'}
      0.7s;
  }

  &.top-left {
    top: ${props =>
    props.toastMargin ? props.toastMargin : '20px'};
    left: ${props =>
    props.toastMargin ? props.toastMargin : '20px'};
    transition: transform 0.6s ease-in;
    animation: ${props =>
    props.animation ? props.animation : 'from-left'}
      0.7s;
  }

  &.bottom-left {
    bottom: ${props =>
    props.toastMargin ? props.toastMargin : '20px'};
    left: ${props =>
    props.toastMargin ? props.toastMargin : '20px'};
    transition: transform 0.6s ease-in;
    animation: ${props =>
    props.animation ? props.animation : 'from-left'}
      0.7s;
  }
`;

export const TextWrapper = styled.div<Props>`
    width: 300px;
`;

export const Title = styled.p<Props>`
    display: block;
    font-family: Helvetica;
    font-size: 32px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 6px;
    height: 35px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const Description = styled.p<Props>`
    font-family: Helvetica;
    font-size: 16px;
    text-align: left;
    height: 18px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${props => props.textColor};
`;

