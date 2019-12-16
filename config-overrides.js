const {
  override,
  disableEsLint,
  addLessLoader,
  fixBabelImports
} = require("customize-cra");

import 'antd/dist/antd.css'

module.exports = override(
  fixBabelImports("antd-mobile", {
    libraryDirectory: "es",
    libraryName: "antd-mobile",
    style: true
  }),
  fixBabelImports("antd", {
    libraryDirectory: "es",
    libraryName: "antd",
    style: true
  }),
  disableEsLint(),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#1DA57A",
    }
  })
);
