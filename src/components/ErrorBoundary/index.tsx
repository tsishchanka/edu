import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  isError: boolean;
}

class ErrorBoundary extends Component <Props, State> {

    public state: State = {
        isError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
    return { isError: true };
  }


  public render() {
   if (this.state.isError) {

      return <h1>Sorry.. there was an error</h1>;

    }

    return this.props.children;
  }
}


export default ErrorBoundary;
