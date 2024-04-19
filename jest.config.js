module.exports = {
    // Liste des fichiers à tester
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  
    // Extensions de fichiers à traiter par Jest
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    testEnvironment: 'jest-environment-jsdom',
  };