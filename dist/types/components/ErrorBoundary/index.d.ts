import React, { Component, ReactNode } from 'react';
interface Props {
    children: ReactNode;
}
interface State {
    isError: boolean;
}
declare class ErrorBoundary extends Component<Props, State> {
    state: State;
    static getDerivedStateFromError(error: Error): State;
    render(): string | number | boolean | React.ReactFragment | JSX.Element | null | undefined;
}
export default ErrorBoundary;
