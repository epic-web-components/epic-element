(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
    var template = '\n        <style>\n\n        </style>\n        <div class="container">\n          <content></content>\n        </div>\n    ';

    var EpicElement = function (_HTMLElement) {
        _inherits(EpicElement, _HTMLElement);

        function EpicElement() {
            _classCallCheck(this, EpicElement);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(EpicElement).apply(this, arguments));
        }

        _createClass(EpicElement, [{
            key: 'createdCallback',

            // Fires when an instance of the element is created.
            value: function createdCallback() {
                this.createShadowRoot().innerHTML = template;
            }
        }, {
            key: 'attachedCallback',

            // Fires when an instance was inserted into the document.
            value: function attachedCallback() {}
        }, {
            key: 'attributeChangedCallback',

            // Fires when an attribute was added, removed, or updated.
            value: function attributeChangedCallback(attrName, oldVal, newVal) {
                console.log('attributeChangedCallback');
                console.log('attrName', attrName);
                console.log('oldVal', oldVal);
                console.log('newVal', newVal);
            }
        }]);

        return EpicElement;
    }(HTMLElement);

    document.registerElement('epic-element', EpicElement);
})();

},{}]},{},[1]);
