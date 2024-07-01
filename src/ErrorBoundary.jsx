import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render(error) {
    if (this.state.hasError) {
      return <div className='w-full text-center h-screen bg-white grid place-content-center text-red-500'>Something went wrong with <br /> this page...!{error}</div>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
