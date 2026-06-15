import { Component, ReactNode } from "react";

export class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    console.error("JOT Wellness error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "#050608",
            color: "#F5F3EE",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600 }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", fontWeight: 500 }}>
              Something went wrong.
            </h1>
            <p style={{ color: "#C9CCC8", marginBottom: "2rem", fontFamily: "Inter, sans-serif" }}>
              We're sorry — something unexpected happened. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: "12px 28px",
                borderRadius: 999,
                border: "none",
                background: "#C7D8C9",
                color: "#050608",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
