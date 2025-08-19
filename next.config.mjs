import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    // Disable Sentry during static export to prevent SSR issues
    webpack: (config, { isServer, dev }) => {
        if (!dev && !isServer) {
            // Only enable Sentry in production client-side
            return config;
        }
        return config;
    }
};

// Only wrap with Sentry config in development or when not doing static export
const sentryConfig = {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
};

const sentryOptions = {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    automaticVercelMonitors: true,
};

// For static export, use plain config. For dynamic builds, use Sentry wrapper
export default process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS
    ? nextConfig
    : withSentryConfig(nextConfig, sentryConfig, sentryOptions);