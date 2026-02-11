import { Component } from 'react';
import type{ ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors in child components and displays fallback UI
 * Specifically designed to handle Three.js WebGL failures gracefully
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // Update state so next render shows fallback UI
        return {
            hasError: true,
            error
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Log error to console for debugging
        console.error('ErrorBoundary caught an error:', error, errorInfo);

        // Call optional error handler
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
    }

    render(): ReactNode {
        if (this.state.hasError) {
            // Custom fallback if provided
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // Default fallback UI
            return (
                <div className="w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="text-center p-8 max-w-md">
                        <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">
                            Visualization Unavailable
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            {this.state.error?.message || 'Unable to load 3D visualization. This may be due to WebGL compatibility issues.'}
                        </p>
                        <p className="text-xs text-muted-foreground/70 font-mono">
                            The content is still accessible below.
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

/**
 * Lightweight Error Boundary with custom fallback
 * Usage: <ErrorBoundaryWithFallback fallback={<YourFallback />}>
 */
export function ErrorBoundaryWithFallback({
    children,
    fallback
}: {
    children: ReactNode;
    fallback: ReactNode;
}): React.JSX.Element {
    return (
        <ErrorBoundary fallback={fallback}>
            {children}
        </ErrorBoundary>
    );
}