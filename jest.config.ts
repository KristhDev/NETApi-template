/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import tsConfigPaths from './tsconfig.paths.json' with { type: 'json' };

const paths = pathsToModuleNameMapper(tsConfigPaths.compilerOptions.paths);

const config: Config = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'tests/coverage',
  coverageProvider: 'v8',
  moduleDirectories: [
    'node_modules',
    '<rootDir>'
  ],
  moduleNameMapper: { ...paths },
  modulePathIgnorePatterns: [
    '<rootDir>/tests/mocks'
  ],
  preset: 'ts-jest',
  setupFiles: [
    './jest.setup.ts'
  ],
  testEnvironment: 'node',
  verbose: true
};

export default config;
