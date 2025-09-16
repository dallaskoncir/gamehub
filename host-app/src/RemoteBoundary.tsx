import React from 'react';

type RemoteBoundaryProps = {
  fallback?: React.ReactNode;
  children: React.ReactNode;
};

type RemoteBoundaryState = {
  hasError: boolean;
};

export default class RemoteBoundary extends React.Component<RemoteBoundaryProps, RemoteBoundaryState> {
  constructor(props: RemoteBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() { }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <div className="border border-dashed border-gray-300 p-3 rounded">Module unavailable</div>;
    }
    return this.props.children;
  }
}


