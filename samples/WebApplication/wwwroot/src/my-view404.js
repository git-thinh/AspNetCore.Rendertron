define(["./my-app.js"],function(_myApp){"use strict";function _templateObject_dcdb805054b411e9939a6bf064be9ec0(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n\n          padding: 10px 20px;\n        }\n      </style>\n\t  document.head\n      Oops you hit a 404. <a href=\"[[rootPath]]\">Head back to home.</a>\n    "]);_templateObject_dcdb805054b411e9939a6bf064be9ec0=function _templateObject_dcdb805054b411e9939a6bf064be9ec0(){return data};return data}var MyView404=function(_PolymerElement){babelHelpers.inherits(MyView404,_PolymerElement);function MyView404(){var _this;babelHelpers.classCallCheck(this,MyView404);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MyView404).call(this));var meta=document.createElement("meta");meta.name="render:status_code";meta.content="404";document.getElementsByTagName("head")[0].appendChild(meta);return _this}babelHelpers.createClass(MyView404,null,[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_dcdb805054b411e9939a6bf064be9ec0())}}]);return MyView404}(_myApp.PolymerElement);window.customElements.define("my-view404",MyView404)});