export default {
  clearMocks: true,
  preset: 'ts-jest',
  reporters: [
    'default'
  ],
  transform: {
    '<rootDir>/test': ['ts-jest', { isolatedModules: true }]
  }
};
