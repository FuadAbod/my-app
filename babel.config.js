module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins:[
      'react-native-worklets/plugin' //this must always be at the end of the list of plugins
    ]
  };
};