import { defineConfig } from 'vite-plus';

export default defineConfig({
	pack: {
		deps: {
			// tsdown <0.23 compatibility: resolve external dependency subpaths.
			// Remove to preserve subpath imports as written (the new default).
			// https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
			resolveDepSubpath: true,
		},
		entry: ['src/index.ts'],
		format: ['esm'],
		sourcemap: true,
		dts: false,
		outExtensions: () => ({ js: '.js' }),
	},
	test: {
		include: ['src/**/*.test.ts'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'lcov'],
			include: ['src/**/*.ts'],
			exclude: ['src/**/*.test.ts'],
			thresholds: {
				lines: 88,
				functions: 91,
				branches: 71,
				statements: 88,
			},
		},
	},
	fmt: {
		useTabs: true,
		singleQuote: true,
		printWidth: 70,
		trailingComma: 'all',
		proseWrap: 'always',
	},
	lint: {
		options: {
			typeAware: true,
			typeCheck: true,
		},
	},
});
