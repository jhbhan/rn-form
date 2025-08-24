module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }], // automatic JSX transform
    '@babel/preset-typescript',
  ],
};