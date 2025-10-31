module.exports = {
  packagerConfig: {
    asar: true,
    extraResource: ['./renderer/dist']
  },
  rebuildConfig: {},
  makers: [
    { name: '@electron-forge/maker-squirrel', config: {} },
    { name: '@electron-forge/maker-zip', platforms: ['darwin'] },
    { name: '@electron-forge/maker-deb', config: {} },
    { name: '@electron-forge/maker-rpm', config: {} }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './renderer/public/index.html',
              js: './renderer/src/index.js',
              name: 'main_window',
              preload: { js: './src/preload.js' }
            }
          ]
        }
      }
    }
  ]
};