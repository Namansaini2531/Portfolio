import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught component error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '60px 20px',
          textAlign: 'center',
          fontFamily: "'Space Grotesk', sans-serif",
          color: 'var(--ink)'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', margin: '0 0 12px' }}>
            Something went wrong
          </h2>
          <p style={{ opacity: 0.8, marginBottom: '24px' }}>
            We encountered an unexpected issue displaying this page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: '2px solid var(--line)',
              background: 'var(--yellow)',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
