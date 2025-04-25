/******/ (() => { // webpackBootstrap
    /******/ 	var __webpack_modules__ = ({

        /***/ "./src/blocks/modules/article-case/article-case.js":
        /*!*********************************************************!*\
          !*** ./src/blocks/modules/article-case/article-case.js ***!
          \*********************************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
            function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

            function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

            function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



            var ArticleCase = /*#__PURE__*/function () {
                function ArticleCase(el) {
                    _classCallCheck(this, ArticleCase);

                    this.el = el;
                    this.blockQuestion = this.el.querySelector('[data-article-question]');
                    this.buttonMain = this.el.querySelector('[data-article-case-button="main"]');
                    this.buttonSubmit = this.el.querySelector('[data-article-case-button="remove"]');
                    this.buttonCancel = this.el.querySelector('[data-article-case-button="cancel"]');
                    this.setListeners();
                }

                _createClass(ArticleCase, [{
                    key: "setListeners",
                    value: function setListeners() {
                        var _this = this;

                        this.el.addEventListener('submit', function (e) {
                            e.preventDefault(); // this.submitForm();
                        });
                        this.buttonMain.addEventListener('click', function (e) {
                            e.preventDefault();

                            _this.showQuestion(true);
                        });
                        this.buttonCancel.addEventListener('click', function (e) {
                            e.preventDefault();

                            _this.showQuestion(false);
                        });
                        this.buttonSubmit.addEventListener('click', function (e) {
                            e.preventDefault();

                            _this.submitForm();
                        });
                    }
                }, {
                    key: "showQuestion",
                    value: function showQuestion(state) {
                        if (state) {
                            this.blockQuestion.removeAttribute('hidden');
                            this.buttonMain.setAttribute('hidden', 'hidden');
                        } else {
                            this.blockQuestion.setAttribute('hidden', 'hidden');
                            this.buttonMain.removeAttribute('hidden');
                        }
                    }
                }, {
                    key: "getData",
                    value: function getData() {
                        var data = new FormData();
                        data.append('itemId', this.el.getAttribute('data-article-case'));
                        return data;
                    }
                }, {
                    key: "disableButton",
                    value: function disableButton(state) {
                        // eslint-disable-next-line no-unused-expressions
                        state ? this.buttonSubmit.setAttribute('disabled', 'disabled') : this.buttonSubmit.removeAttribute('disabled');
                    }
                }, {
                    key: "submitForm",
                    value: function submitForm() {
                        var _this2 = this;

                        var context = this;
                        var url = this.el.getAttribute('action');
                        this.disableButton(true);
                        axios__WEBPACK_IMPORTED_MODULE_0___default()({
                            method: 'post',
                            url: url,
                            data: this.getData(),
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(function () {
                            context.el.remove();
                        })["catch"](function (error) {
                            _this2.disableButton(false);

                            console.error(error);
                        });
                    }
                }]);

                return ArticleCase;
            }();

            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelectorAll('[data-article-case]'); // eslint-disable-next-line no-restricted-syntax

                var _iterator = _createForOfIteratorHelper(el),
                    _step;

                try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var i = _step.value;
                        // eslint-disable-next-line no-new
                        new ArticleCase(i);
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally {
                    _iterator.f();
                }
            });

            /***/ }),

        /***/ "./src/blocks/modules/articles/articles.js":
        /*!*************************************************!*\
          !*** ./src/blocks/modules/articles/articles.js ***!
          \*************************************************/
        /***/ (() => {

            document.addEventListener('DOMContentLoaded', function () {
                var blocks = document.querySelectorAll('[data-loadmore-parent]');

                for (var i = 0; i < blocks.length; i++) {
                    initLoadmoreBlock(blocks[i]);
                }

                window.addEventListener('resize', function () {
                    for (var _i = 0; _i < blocks.length; _i++) {
                        initLoadmoreBlock(blocks[_i]);
                    }
                });
            });

            var initLoadmoreBlock = function initLoadmoreBlock(el) {
                var visible = 3;
                var items = el.querySelector('[data-loadmore-wrapper]').children;
                var button = el.querySelector('[data-loadmore-button]');

                var setClasses = function setClasses(counter) {
                    for (var i = 0; i < items.length; i++) {
                        if (i < counter) {
                            items[i].classList.remove('slider-service__slide--hidden');
                        } else {
                            items[i].classList.add('slider-service__slide--hidden');
                        }
                    }

                    visible = counter;

                    if (counter >= items.length) {
                        button.style.display = "none";
                    }
                };

                setClasses(visible);
                button.addEventListener('click', function () {
                    setClasses(visible + 3);
                });
            };

            /***/ }),

        /***/ "./src/blocks/modules/block-drop/block-drop.js":
        /*!*****************************************************!*\
          !*** ./src/blocks/modules/block-drop/block-drop.js ***!
          \*****************************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
            function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

            function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

            function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

            function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelector('[data-block-editor]');
                el ? window.MBApp.profileBlockEditor = new BlockProfileEditor(el) : false;
            });

            var BlockProfileEditor = /*#__PURE__*/function () {
                function BlockProfileEditor(el) {
                    var _this = this;

                    _classCallCheck(this, BlockProfileEditor);

                    _defineProperty(this, "setMessage", function (text) {
                        for (var i = 0; i < _this.textField.length; i++) {
                            _this.textField[i].innerHTML = text;
                        }
                    });

                    _defineProperty(this, "disableButton", function (state) {
                        for (var i = 0; i < _this.buttonSave.length; i++) {
                            state ? _this.buttonSave[i].setAttribute('disabled', 'disabled') : _this.buttonSave[i].removeAttribute('disabled');
                        }
                    });

                    this.el = el;
                    this.areaStatic = el.querySelector('[data-editor-tiplap-content]');
                    this.areaEditor = el.querySelector('[data-editor-tiplap-field]');
                    this.areaMessage = el.querySelector('[data-block-message]');
                    this.buttonShow = el.querySelector('[data-block-drop-button]');
                    this.buttonEdit = el.querySelectorAll('[data-card-editor-button-edit]');
                    this.buttonSave = el.querySelectorAll('[data-card-editor-button-save]');
                    this.textField = el.querySelectorAll('[data-card-editor-button-text]');
                    this.setListeners();
                }

                _createClass(BlockProfileEditor, [{
                    key: "setListeners",
                    value: function setListeners() {
                        var _this2 = this;

                        this.buttonShow.addEventListener('click', function () {
                            _this2.showContent();
                        });

                        for (var i = 0; i < this.buttonEdit.length; i++) {
                            this.buttonEdit[i].addEventListener('click', function () {
                                _this2.toggleAreas(true);
                            });
                        }

                        for (var _i = 0; _i < this.buttonSave.length; _i++) {
                            this.buttonSave[_i].addEventListener('click', function () {
                                _this2.submitForm(true);
                            });
                        }

                        this.el.addEventListener('submit', function (e) {
                            e.preventDefault();
                        });
                    }
                }, {
                    key: "showContent",
                    value: function showContent() {
                        this.el.classList.add('block-drop--opened');
                    }
                }, {
                    key: "toggleAreas",
                    value: function toggleAreas(state) {
                        if (state) {
                            for (var i = 0; i < this.buttonEdit.length; i++) {
                                this.buttonEdit[i].setAttribute('hidden', 'hidden');
                            }

                            for (var _i2 = 0; _i2 < this.buttonSave.length; _i2++) {
                                this.buttonSave[_i2].removeAttribute('hidden');
                            } // this.buttonSave.removeAttribute('hidden');


                            this.areaStatic.setAttribute('hidden', 'hidden');
                            this.areaEditor.removeAttribute('hidden');
                            this.areaEditor.querySelector('.ProseMirror').focus();
                            this.showContent();
                        } else {
                            this.areaEditor.setAttribute('hidden', 'hidden');
                            this.areaStatic.removeAttribute('hidden');

                            for (var _i3 = 0; _i3 < this.buttonEdit.length; _i3++) {
                                this.buttonEdit[_i3].removeAttribute('hidden');
                            }

                            for (var _i4 = 0; _i4 < this.buttonSave.length; _i4++) {
                                this.buttonSave[_i4].setAttribute('hidden', 'hidden');
                            }
                        }
                    }
                }, {
                    key: "getData",
                    value: function getData() {
                        var data = new FormData();
                        data.append('fieldContent', this.areaEditor.querySelector('div').innerHTML);

                        var _iterator = _createForOfIteratorHelper(data.entries()),
                            _step;

                        try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                var pair = _step.value;
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally {
                            _iterator.f();
                        }

                        return data;
                    }
                }, {
                    key: "submitForm",
                    value: function submitForm() {
                        var _this3 = this;

                        var context = this;
                        this.disableButton(true);
                        this.setMessage('Отправка...');
                        axios__WEBPACK_IMPORTED_MODULE_0___default()({
                            method: 'post',
                            url: this.el.action,
                            data: this.getData(),
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(function (response, config) {
                            // this.showButtonSave(false);
                            context.areaStatic.innerHTML = context.areaEditor.querySelector('div').innerHTML;
                        })["catch"](function (error) {
                            console.log(error);
                        });
                        setTimeout(function () {
                            _this3.disableButton(false);

                            _this3.setMessage('Отправить');
                        }, 3000);
                        this.toggleAreas(false);
                    }
                }]);

                return BlockProfileEditor;
            }();

            /***/ }),

        /***/ "./src/blocks/modules/block-profile-card/block-profile-card.js":
        /*!*********************************************************************!*\
          !*** ./src/blocks/modules/block-profile-card/block-profile-card.js ***!
          \*********************************************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
            function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

            function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

            function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

            function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



            var BlockProfileCard = /*#__PURE__*/function () {
                function BlockProfileCard(el) {
                    var _this = this;

                    _classCallCheck(this, BlockProfileCard);

                    _defineProperty(this, "showButtonSave", function (state) {
                        for (var i = 0; i < _this.buttonSave.length; i++) {
                            state ? _this.buttonSave[i].removeAttribute('hidden') : _this.buttonSave[i].setAttribute('hidden', 'hidden');
                        }
                    });

                    _defineProperty(this, "disableButton", function (state) {
                        for (var i = 0; i < _this.buttonSave.length; i++) {
                            state ? _this.buttonSave[i].setAttribute('disabled', 'disabled') : _this.buttonSave[i].removeAttribute('disabled');
                        }
                    });

                    _defineProperty(this, "setMessage", function (text) {
                        for (var i = 0; i < _this.textField.length; i++) {
                            _this.textField[i].innerHTML = text;
                        }
                    });

                    _defineProperty(this, "submitForm", function (e) {
                        e.preventDefault();

                        _this.disableButton(true);

                        _this.setMessage('Отправка...');

                        var url = _this.el.getAttribute('action');

                        var context = _this;
                        axios__WEBPACK_IMPORTED_MODULE_0___default()({
                            method: 'post',
                            url: url,
                            data: _this.getData(),
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(function (response, config) {
                            context.setMessage('Сохранено!');
                        })["catch"](function (error) {
                            console.log(error);
                        }); // Это демо

                        setTimeout(function () {
                            _this.disableButton(false);

                            _this.setMessage('Отправить');

                            _this.showButtonSave(false);
                        }, 3000);
                    });

                    this.el = el;
                    this.buttonSave = el.querySelectorAll('[data-form-profile-button]');
                    this.inputsArray = el.querySelectorAll('[data-form-profile-input]');
                    this.textField = el.querySelectorAll('[data-form-profile-button-text]');
                    this.setListeners();
                }

                _createClass(BlockProfileCard, [{
                    key: "setListeners",
                    value: function setListeners() {
                        var _this2 = this;

                        for (var i = 0; i < this.buttonSave.length; i++) {
                            this.buttonSave[i].addEventListener('click', this.submitForm);
                        }

                        for (var _i = 0; _i < this.inputsArray.length; _i++) {
                            this.inputsArray[_i].addEventListener('input', function () {
                                _this2.showButtonSave(true);
                            });
                        }

                        this.el.addEventListener('submit', this.submitForm);
                    }
                }, {
                    key: "getData",
                    value: function getData() {
                        var data = new FormData();

                        var _iterator = _createForOfIteratorHelper(this.inputsArray),
                            _step;

                        try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                var i = _step.value;
                                data.append(i.name, i.value);
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally {
                            _iterator.f();
                        }

                        var _iterator2 = _createForOfIteratorHelper(data.entries()),
                            _step2;

                        try {
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                var pair = _step2.value;
                            }
                        } catch (err) {
                            _iterator2.e(err);
                        } finally {
                            _iterator2.f();
                        }

                        return data;
                    }
                }]);

                return BlockProfileCard;
            }();

            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelectorAll('[data-form-profile]');
                window.MBApp.blockProfileCard = [];

                for (var i = 0; i < el.length; i++) {
                    window.MBApp.blockProfileCard[i] = new BlockProfileCard(el[i]);
                }
            });

            /***/ }),

        /***/ "./src/blocks/modules/block-profile-drop/block-profile-drop.js":
        /*!*********************************************************************!*\
          !*** ./src/blocks/modules/block-profile-drop/block-profile-drop.js ***!
          \*********************************************************************/
        /***/ (() => {

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

            var BlockProfile = /*#__PURE__*/function () {
                function BlockProfile(el, button) {
                    _classCallCheck(this, BlockProfile);

                    this.el = el;
                    this.button = button;
                    this.active = false;
                    this.setListeners();
                }

                _createClass(BlockProfile, [{
                    key: "setListeners",
                    value: function setListeners() {
                        var _this = this;

                        this.button.addEventListener('click', function () {
                            if (_this.active) {
                                _this.toggleMenu(false);
                            } else {
                                _this.toggleMenu(true);
                            }
                        });
                        this.button.addEventListener('blur', function () {
                            _this.toggleMenu(false);
                        });
                    }
                }, {
                    key: "toggleMenu",
                    value: function toggleMenu(state) {
                        if (state) {
                            this.el.classList.add('block-profile-drop--visible');
                            this.active = state;
                        } else {
                            this.el.classList.remove('block-profile-drop--visible');
                            this.active = state;
                        }
                    }
                }]);

                return BlockProfile;
            }();

            document.addEventListener('DOMContentLoaded', function () {
                var blockProfile = document.querySelector('[data-block-profile-dropdown]');
                var blockProfileButton = document.querySelector('[data-link-profile]');
                if (blockProfile && blockProfileButton) window.MBApp.blockProfile = new BlockProfile(blockProfile, blockProfileButton);
            });

            /***/ }),

        /***/ "./src/blocks/modules/block-profile/block-profile.js":
        /*!***********************************************************!*\
          !*** ./src/blocks/modules/block-profile/block-profile.js ***!
          \***********************************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
            function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

            function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

            function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelector('[data-block-profile]');
                el ? window.MBApp.blockProfile = new BlockProfile(el) : false;
            });

            var BlockProfile = /*#__PURE__*/function () {
                function BlockProfile(el) {
                    var _this = this;

                    _classCallCheck(this, BlockProfile);

                    this.el = el;
                    this.input = el.querySelector('[data-block-profile-input]');
                    this.label = el.querySelector('[data-block-profile-label]');
                    this.pic = el.querySelector('[data-block-profile-picture]');
                    this.image = el.querySelector('[data-block-profile-image]');
                    // this.buttonLogout.addEventListener('click', () => {
                    //     this.logout();
                    // });

                    this.label.addEventListener('focus', function (event) {
                        event.preventDefault();
                    });
                    this.label.addEventListener('keyup', function (event) {
                        if (event.keyCode == 32) {
                            _this.input.click();
                        }
                    });
                    this.label.addEventListener('keydown', function (event) {
                        if (event.keyCode == 32) {
                            event.preventDefault();
                        }
                    });
                    this.input.addEventListener('change', function () {
                        _this.changeThumbnail();
                    });
                }

                _createClass(BlockProfile, [{
                    key: "changeThumbnail",
                    value: function changeThumbnail() {
                        this.setImage();
                        this.submitForm();
                        this.showLoader(false);
                    }
                }, {
                    key: "setImage",
                    value: function setImage() {
                        var _this2 = this;

                        console.log('Меняем картинку в DOM');

                        if (this.input.files[0]) {
                            var fr = new FileReader();
                            fr.addEventListener("load", function () {
                                _this2.image.src = fr.result;
                            }, false);
                            fr.readAsDataURL(this.input.files[0]);
                        }
                    }
                }, {
                    key: "showLoader",
                    value: function showLoader(state) {
                        if (state) {
                            console.log('Показываем прелоадер');
                        } else {
                            console.log('Убираем прелоадер');
                        }
                    }
                }, {
                    key: "getData",
                    value: function getData() {
                        var data = new FormData();
                        data.append(this.input.name, this.input.files[0]);

                        var _iterator = _createForOfIteratorHelper(data.entries()),
                            _step;

                        try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                var pair = _step.value;
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally {
                            _iterator.f();
                        }

                        return data;
                    }
                }, {
                    key: "submitForm",
                    value: function submitForm() {
                        var context = this;
                        context.showLoader(true);
                        var url = this.el.getAttribute('action');
                        axios__WEBPACK_IMPORTED_MODULE_0___default()({
                            method: 'post',
                            url: url,
                            data: this.getData(),
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(function (response, config) {
                            // context.showButtonSave(false);
                            context.showLoader(false);
                        })["catch"](function (error) {
                            console.log(error);
                        });
                    } // logout() {
                    //     alert('Выходим');
                    // }

                }]);

                return BlockProfile;
            }();

            /***/ }),

        /***/ "./src/blocks/modules/editor-tiptap/editor-tiptap.js":
        /*!***********************************************************!*\
          !*** ./src/blocks/modules/editor-tiptap/editor-tiptap.js ***!
          \***********************************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _tiptap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/core */ "./node_modules/@tiptap/core/dist/tiptap-core.esm.js");
            /* harmony import */ var _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tiptap/starter-kit */ "./node_modules/@tiptap/starter-kit/dist/tiptap-starter-kit.esm.js");
            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


            // https://tiptap.dev/overview/upgrade-guide

            var TipTapEditorBlock = /*#__PURE__*/_createClass(function TipTapEditorBlock(el) {
                var _this = this;

                _classCallCheck(this, TipTapEditorBlock);

                _defineProperty(this, "initEditor", function () {
                    new _tiptap_core__WEBPACK_IMPORTED_MODULE_1__.Editor({
                        element: _this.blockActive,
                        extensions: [_tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_0__["default"]],
                        content: _this.blockStatic.innerHTML
                    });
                });

                this.el = el;
                this.blockStatic = el.querySelector('[data-editor-tiplap-content]');
                this.blockActive = el.querySelector('[data-editor-tiplap-field]');
                this.initEditor();
            });

            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelector('[data-editor-tiplap]');
                el ? window.MBApp.editorTipTap = new TipTapEditorBlock(el) : false;
            });

            /***/ }),

        /***/ "./src/blocks/modules/form-repeater/form-repeater.js":
        /*!***********************************************************!*\
          !*** ./src/blocks/modules/form-repeater/form-repeater.js ***!
          \***********************************************************/
        /***/ (() => {

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

            var FormRepeater = /*#__PURE__*/_createClass(function FormRepeater(el) {
                var _this = this;

                _classCallCheck(this, FormRepeater);

                _defineProperty(this, "addLine", function () {
                    var item = _this.content.appendChild(_this.template.cloneNode(true));

                    item.querySelector('[data-item-file-title]').name = item.querySelector('[data-item-file-title]').name + '-' + _this.getLength();
                    item.querySelector('[data-item-file-field]').name = item.querySelector('[data-item-file-field]').name + '-' + _this.getLength();
                    window.initNewInputFile(item);
                });

                _defineProperty(this, "getLength", function () {
                    return _this.content.querySelectorAll('.form-repeater__item').length - 1;
                });

                _defineProperty(this, "removeLine", function (e) {
                    var button = e.target.closest('[data-repeater-item-button]');
                    var item;

                    if (button) {
                        e.preventDefault();
                        item = button.closest('.form-repeater__item');
                    }

                    item ? item.remove() : false;
                });

                this.template = el.querySelector('[data-repeater-template] .form-repeater__item');
                this.content = el.querySelector('[data-repeater-list]');
                this.length = null;
                this.buttonAdd = el.querySelector('[data-repeater-button]');
                this.buttonAdd.addEventListener('click', function (e) {
                    e.preventDefault();

                    _this.addLine();
                });
                el.addEventListener('click', function (e) {
                    _this.removeLine(e);
                });
            });

            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelector('[data-repeater]');
                el ? window.MBApp.formRepeater = new FormRepeater(el) : false;
            });

            /***/ }),

        /***/ "./src/blocks/modules/form/form.js":
        /*!*****************************************!*\
          !*** ./src/blocks/modules/form/form.js ***!
          \*****************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");
            function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

            function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

            function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

            function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

            function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

            function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

            function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




            var Form = /*#__PURE__*/function () {
                function Form(el) {
                    _classCallCheck(this, Form);

                    this.el = el;
                    this.inputsAgreement = el.querySelectorAll('[data-form-agreement-checkbox]');
                    this.buttonSubmit = el.querySelector('[data-form-button-submit]');
                    this.inputsArray = this.getAllfields();
                    this.blockMessageOk = el.querySelector('[data-form-message-sended]');
                    this.blockMessageError = el.querySelector('[data-form-message-error]');
                    this.messageField = el.querySelector('[data-form-message-field]');
                    this.usersSort = el.querySelector("[data-user-sort]");
                    this.setListeners();
                }

                _createClass(Form, [{
                    key: "getAllfields",
                    value: function getAllfields() {
                        var fields = [].concat(_toConsumableArray(this.el.querySelectorAll('input')), _toConsumableArray(this.el.querySelectorAll('textarea')), _toConsumableArray(this.el.querySelectorAll('select')));
                        return fields;
                    }
                }, {
                    key: "setListeners",
                    value: function setListeners() {
                        var _this = this;

                        this.el.addEventListener('submit', function (e) {
                            e.preventDefault();

                            _this.submitForm();
                        });

                        var _iterator = _createForOfIteratorHelper(this.inputsAgreement),
                            _step;

                        try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                var i = _step.value;
                                i.addEventListener('change', function () {
                                    return _this.checkAgreement();
                                });
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally {
                            _iterator.f();
                        }
                    }
                }, {
                    key: "checkAgreement",
                    value: function checkAgreement() {
                        var flag = false;

                        for (var i = 0; i < this.inputsAgreement.length; i++) {
                            if (this.inputsAgreement[i].checked == false) {
                                flag = true;
                                break;
                            }
                        }

                        this.disableButton(flag);
                    }
                }, {
                    key: "setMessage",
                    value: function setMessage(text) {
                        this.messageField.innerHTML = text;
                    }
                }, {
                    key: "disableButton",
                    value: function disableButton(state) {
                        state ? this.buttonSubmit.setAttribute('disabled', 'disabled') : this.buttonSubmit.removeAttribute('disabled');
                    }
                }, {
                    key: "getData",
                    value: function getData() {
                        this.inputsArray = this.getAllfields();
                        var data = new FormData();

                        var _iterator2 = _createForOfIteratorHelper(this.inputsArray),
                            _step2;

                        try {
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                var i = _step2.value;
                                i.type == 'file' ? data.append(i.name, i.files[0]) : data.append(i.name, i.value);
                            }
                        } catch (err) {
                            _iterator2.e(err);
                        } finally {
                            _iterator2.f();
                        }

                        return data;
                    }
                }, {
                    key: "showMessage",
                    value: function showMessage(state) {
                        var _this2 = this;

                        if (state) {
                            this.blockMessageOk.removeAttribute('hidden');
                            setTimeout(function () {
                                _this2.blockMessageOk.setAttribute('hidden', 'hidden');
                            }, 3000);
                        } else {
                            this.blockMessageError.removeAttribute('hidden');
                            setTimeout(function () {
                                _this2.blockMessageError.setAttribute('hidden', 'hidden');
                            }, 3000);
                        }
                    }
                }, {
                    key: "submitForm",
                    value: function submitForm() {
                        var _this3 = this;

                        var context = this;
                        var url = this.el.getAttribute('action');
                        this.disableButton(true);
                        this.setMessage('Отправка...');
                        axios__WEBPACK_IMPORTED_MODULE_0___default()({
                            method: 'post',
                            url: url,
                            data: this.getData(),
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(function (response, config) {
                            // context.showButtonSave(false);
                            if (response) {
                                var button = document.querySelector('#formButton');
                                var modal = document.querySelector('#modalPersonalArea');
                                if (modal) {
                                    _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__.Fancybox.show([{
                                        src: modal,
                                        type: "html"
                                    }]);
                                }
                                context.setMessage('Отправлено!');
                                context.blockMessageOk ? context.showMessage(true) : false;
                            } else {
                                context.setMessage('Ошибка');

                                if (context.blockMessageError) {
                                    context.blockMessageError ? context.showMessage(false) : false;
                                } else {
                                    alert('Ошибка отправки. Попробуйте позже');
                                }
                            }
                        })["catch"](function (error) {
                            console.error(error);
                        });
                        setTimeout(function () {
                            _this3.setMessage('Отправить');

                            _this3.disableButton(false);

                            window.MBApp.modalLogin ? window.MBApp.modalLogin.close() : false;
                            window.MBApp.modalRegistration ? window.MBApp.modalRegistration.close() : false;
                        }, 3000);
                    }
                }]);

                return Form;
            }();

            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelectorAll('[data-form]');
                window.MBApp.forms = [];
                for (var i = 0; i < el.length; i++) {
                    window.MBApp.forms[i] = new Form(el[i]);
                }
            });

            /***/ }),

        /***/ "./src/blocks/modules/header/header.js":
        /*!*********************************************!*\
          !*** ./src/blocks/modules/header/header.js ***!
          \*********************************************/
        /***/ (() => {

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

            var Header = /*#__PURE__*/function () {
                function Header(el) {
                    var _this = this;

                    _classCallCheck(this, Header);

                    this.block = el;
                    document.addEventListener('scroll', function () {
                        _this.fixMenu(_this.block, +window.scrollY);
                    });
                }

                _createClass(Header, [{
                    key: "fixMenu",
                    value: function fixMenu(el, offset) {
                        if (offset > 5 && !el.classList.contains('section--header-shadow')) {
                            el.classList.add('section--header-shadow');
                        } else if (offset <= 5 && el.classList.contains('section--header-shadow')) {
                            el.classList.remove('section--header-shadow');
                        } else {
                            return false;
                        }
                    }
                }]);

                return Header;
            }();

            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelector('[data-header]');
                el ? window.MBApp.header = new Header(el) : false;
            });

            /***/ }),

        /***/ "./src/blocks/modules/input-drug/input-drug.js":
        /*!*****************************************************!*\
          !*** ./src/blocks/modules/input-drug/input-drug.js ***!
          \*****************************************************/
        /***/ (() => {

            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelectorAll('.input-drug');

                var _loop = function _loop(i) {
                    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
                        el[i].addEventListener(eventName, preventDefaults, false);
                    });

                    function preventDefaults(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        dropHandler(e, el[i]);
                    }

                    ;
                    el[i].addEventListener('change', function () {
                        changeInfo(el[i]);
                    }); // ['dragenter', 'dragover'].forEach(eventName => {
                    //     el[i].addEventListener(eventName, highlight, false)
                    // });
                    // ['dragleave', 'drop'].forEach(eventName => {
                    //     el[i].addEventListener(eventName, unhighlight, false)
                    // });
                    // function highlight(e) {
                    //     el[i].classList.add('highlight')
                    // };
                    // function unhighlight(e) {
                    //     el[i].classList.remove('highlight')
                    // };
                };

                for (var i = 0; i < el.length; i++) {
                    _loop(i);
                }
            });

            var dropHandler = function dropHandler(ev, el) {
                var input = el.querySelector('input');
                var title = el.querySelector('p');
                var files = new DataTransfer();

                if (ev.dataTransfer.items) {
                    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
                        files.items.add(ev.dataTransfer.files[i]);
                    }

                    if (ev.dataTransfer.files.length == 1) {
                        title.innerHTML = ev.dataTransfer.files[0].name;
                        input.files = files.files;
                        el.classList.add('input-drug--accepted');
                    } else if (ev.dataTransfer.files.length > 1) {
                        input.files = files.files;
                        title.innerHTML = 'Прикреплено файлов: ' + ev.dataTransfer.items.length;
                        el.classList.add('input-drug--accepted');
                    } else {
                        return false;
                    }
                }
            };

            var changeInfo = function changeInfo(el) {
                var field = el.querySelector('input');
                var title = el.querySelector('p');

                for (var i = 0; i < field.files.length; i++) {
                    if (field.files.length == 1) {
                        title.innerHTML = field.files[0].name;
                    } else if (field.files.length > 1) {
                        title.innerHTML = 'Прикреплено файлов: ' + field.files.length;
                    } else {
                        return false;
                    }
                }

                el.classList.add('input-drug--accepted');
            };

            /***/ }),

        /***/ "./src/blocks/modules/input-file/input-file.js":
        /*!*****************************************************!*\
          !*** ./src/blocks/modules/input-file/input-file.js ***!
          \*****************************************************/
        /***/ (() => {

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

            var InputFile = /*#__PURE__*/function () {
                function InputFile(el) {
                    var _this = this;

                    _classCallCheck(this, InputFile);

                    this.title = el.querySelector('[data-item-file-text]');
                    this.label = el.querySelector('[data-item-file-label]');
                    this.input = el.querySelector('[data-item-file-field]');
                    this.preview = el.querySelector('[data-item-file-preview]');
                    this.removeButton = el.querySelector('[data-item-file-button-remove]');
                    this.input.addEventListener('change', function () {
                        _this.setImage(el, _this.preview, _this.label);
                    });
                    this.removeButton.addEventListener('click', function (e) {
                        e.preventDefault();

                        _this.removeFile(_this.preview, _this.label, _this.input, _this.title);
                    });
                }

                _createClass(InputFile, [{
                    key: "setImage",
                    value: function setImage(el, preview, label) {
                        if (this.input.files[0]) {
                            var fr = new FileReader();
                            fr.addEventListener("load", function () {
                                var image = new Image();
                                image.src = fr.result;
                                preview.appendChild(image);
                            }, false);
                            fr.readAsDataURL(this.input.files[0]);
                        }

                        preview.removeAttribute('hidden');
                        label.setAttribute('hidden', 'hidden');
                    }
                }, {
                    key: "removeFile",
                    value: function removeFile(preview, label, input, title) {
                        preview.setAttribute('hidden', 'hidden');
                        label.removeAttribute('hidden');
                        var image = preview.querySelector('img');
                        image.remove();
                        this.input.value = '';
                    }
                }]);

                return InputFile;
            }();

            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelectorAll('[data-item-file]');
                el ? window.MBApp.inputFile = [] : false;

                for (var i = 0; i < el.length; i++) {
                    window.MBApp.inputFile[i] = new InputFile(el[i]);
                }
            });

            window.initNewInputFile = function (el) {
                var input = el.querySelector('[data-item-file]');
                new InputFile(input);
            };

            /***/ }),

        /***/ "./src/blocks/modules/input/input.js":
        /*!*******************************************!*\
          !*** ./src/blocks/modules/input/input.js ***!
          \*******************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

            // Password

            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelectorAll('[data-input-password]');

                for (var i = 0; i < el.length; i++) {
                    new InputPassword(el[i]);
                }
            });

            var InputPassword = /*#__PURE__*/function () {
                function InputPassword(el) {
                    _classCallCheck(this, InputPassword);

                    this.el = el;
                    this.field = el.querySelector('[data-input-password-field]');
                    this.button = el.querySelector('[data-input-password-button]');
                    this.setListeners();
                }

                _createClass(InputPassword, [{
                    key: "setListeners",
                    value: function setListeners() {
                        var _this = this;

                        this.button.addEventListener('click', function (e) {
                            e.preventDefault();

                            _this.toggleState();
                        });
                    }
                }, {
                    key: "toggleState",
                    value: function toggleState() {
                        if (this.field.type == 'text') {
                            this.field.type = 'password';
                        } else {
                            this.field.type = 'text';
                        }
                    }
                }]);

                return InputPassword;
            }(); // Date


            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelectorAll('[data-input-date]');

                for (var i = 0; i < el.length; i++) {
                    new InputDate(el[i]);
                }
            });

            var InputDate = /*#__PURE__*/function () {
                function InputDate(el) {
                    _classCallCheck(this, InputDate);

                    this.el = el;
                    this.setListeners();
                }

                _createClass(InputDate, [{
                    key: "setListeners",
                    value: function setListeners() {
                        var _this2 = this;

                        this.el.addEventListener('focus', function (e) {
                            _this2.toggleState('date');

                            _this2.el.click();
                        });
                        this.el.addEventListener('blur', function (e) {
                            _this2.toggleState('date');
                        });
                    }
                }, {
                    key: "toggleState",
                    value: function toggleState(param) {
                        this.el.type = param;
                    }
                }]);

                return InputDate;
            }(); // Phone mask


            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelectorAll('[data-input-phone]');

                for (var i = 0; i < el.length; i++) {
                    // new InputDate(el[i]);
                    var mask = (0,imask__WEBPACK_IMPORTED_MODULE_0__["default"])(el[i], {
                        mask: '+{7}(000)000-00-00'
                    });
                }
            });

            /***/ }),

        /***/ "./src/blocks/modules/link-top/link-top.js":
        /*!*************************************************!*\
          !*** ./src/blocks/modules/link-top/link-top.js ***!
          \*************************************************/
        /***/ (() => {

            document.addEventListener('DOMContentLoaded', function () {
                var el = document.getElementById('linkUp');
                el.addEventListener('click', function () {
                    document.documentElement.scrollTop = 0;
                });
                window.addEventListener('scroll', function () {
                    if (document.documentElement.scrollTop > 150) {
                        el.classList.add('link-top--visible');
                    } else {
                        el.classList.remove('link-top--visible');
                    }
                });
            });

            /***/ }),

        /***/ "./src/blocks/modules/menu/menu.js":
        /*!*****************************************!*\
          !*** ./src/blocks/modules/menu/menu.js ***!
          \*****************************************/
        /***/ (() => {

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

            var Menu = /*#__PURE__*/function () {
                function Menu(el, buttons) {
                    _classCallCheck(this, Menu);

                    this.el = el;
                    this.buttons = buttons;
                    this.active = false;
                    this.setListeners();
                }

                _createClass(Menu, [{
                    key: "setListeners",
                    value: function setListeners() {
                        var _this = this;

                        for (var i = 0; i < this.buttons.length; i++) {
                            this.buttons[i].addEventListener('click', function () {
                                if (_this.active) {
                                    _this.toggleMenu(false);
                                } else {
                                    _this.toggleMenu(true);
                                }
                            });
                            this.buttons[i].addEventListener('blur', function () {
                                _this.toggleMenu(false);
                            });
                        }
                    }
                }, {
                    key: "toggleMenu",
                    value: function toggleMenu(state) {
                        if (state) {
                            this.el.classList.add('menu--visible');
                            this.active = state;
                        } else {
                            this.el.classList.remove('menu--visible');
                            this.active = state;
                        }
                    }
                }]);

                return Menu;
            }();

            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelector('[data-menu-section]');
                var button = document.querySelectorAll('[data-menu-button]');
                el && button ? window.MBApp.menu = new Menu(el, button) : false;
            });

            /***/ }),

        /***/ "./src/blocks/modules/modal/modal.js":
        /*!*******************************************!*\
          !*** ./src/blocks/modules/modal/modal.js ***!
          \*******************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");
            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


            document.addEventListener("DOMContentLoaded", function () {
                _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind("[data-modal-item]", {
                    groupAll: true,
                    mainClass: 'modal--review',
                    dragToClose: false,
                    caption: function caption(fancybox, carousel, slide) {
                        return "<div class=\"modal\">\n                    <div class=\"modal__footer\">\n                    <p class=\"modal__discription\"> ".concat(slide.caption, " </p>\n                    <a href=\" ").concat(slide.link, " \" target=\"_blank\" rel=\"nofollow\" class=\"modal__button button button--red\">\n                        <span class=\"button__text\">\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C</span>\n                        <svg class=\"button__icon\">\n                            <use xlink:href=\"local/templates/self-employed/images/sprites/sprite.svg#icon-buy\"></use>\n                        </svg>\n                    </a>\n                    </div>\n                </div>");
                    },
                    on: {
                        done: function done(fancybox, slide) {
                            if (document.defaultView.innerWidth > 1200) {
                                var length = slide.$el.querySelector('.fancybox__image').offsetWidth;
                                slide.$caption.style.width = +length + 'px';
                            }
                        }
                    }
                });
            }); // Для инициализации модалки передаем два параметра
// Первый - строка, она станет ключом, по которому мы сможем обратиться к ней в window.MBApp
// Например - 'modalMessage' => window.MBApp.modalMessage

            document.addEventListener('DOMContentLoaded', function () {// let modalContent = document.querySelector('#modal-message');
                // new window.ModalMessageConstructor(modalContent);
            });

            window.ModalMessageConstructor = /*#__PURE__*/function () {
                function ModalMessage(el) {
                    _classCallCheck(this, ModalMessage);

                    this.content = el;
                    window.MBApp.modalMessage = null;
                    this.initModal();
                }

                _createClass(ModalMessage, [{
                    key: "initModal",
                    value: function initModal() {
                        window.MBApp.modalMessage = new _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox([{
                            src: this.content.cloneNode(true),
                            type: "html"
                        }]);
                    }
                }, {
                    key: "closeModal",
                    value: function closeModal() {
                        window.MBApp.modalMessage.close();
                        window.MBApp.modalMessage.destroy();
                        window.MBApp.modalMessage = null;
                    }
                }]);

                return ModalMessage;
            }();

            document.addEventListener("DOMContentLoaded", function () {
                _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind("[data-modal='registration']", {
                    dragToClose: false,
                    autoFocus: false,
                    on: {
                        ready: function ready(fancybox) {
                            window.MBApp.modalRegistration = fancybox;
                            window.MBApp.modalLogin ? window.MBApp.modalLogin.close() : false;
                        }
                    }
                });
            });
            document.addEventListener("DOMContentLoaded", function () {
                _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind("[data-modal='login']", {
                    dragToClose: false,
                    autoFocus: false,
                    on: {
                        init: function init(fancybox) {
                            window.MBApp.modalLogin = fancybox;
                            window.MBApp.modalRegistration ? window.MBApp.modalRegistration.close() : false;
                        }
                    }
                });
            });

            /***/ }),

        /***/ "./src/blocks/modules/search-mob/search-mob.js":
        /*!*****************************************************!*\
          !*** ./src/blocks/modules/search-mob/search-mob.js ***!
          \*****************************************************/
        /***/ (() => {

            var initMobileSearch = function initMobileSearch() {
                var parent = document.querySelector('.search-mob');

                if (parent) {
                    var button = parent.querySelector('.search-mob__button');
                    button.addEventListener('click', function (e) {
                        e.preventDefault();

                        if (parent.classList.contains('search-mob--active')) {
                            parent.submit();
                        } else {
                            parent.classList.add('search-mob--active');
                        }
                    });
                }
            };

            document.addEventListener('DOMContentLoaded', function () {
                initMobileSearch();
            });

            /***/ }),

        /***/ "./src/blocks/modules/share/share.js":
        /*!*******************************************!*\
          !*** ./src/blocks/modules/share/share.js ***!
          \*******************************************/
        /***/ (() => {

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

            function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

            var ShareBlock = /*#__PURE__*/function () {
                function ShareBlock(el) {
                    var _this = this;

                    _classCallCheck(this, ShareBlock);

                    this.el = el;
                    this.wrapper = el.querySelector('[data-share-wrapper]');
                    this.el.addEventListener('click', function () {
                        _this.toggleWrapper();
                    });
                }

                _createClass(ShareBlock, [{
                    key: "toggleWrapper",
                    value: function toggleWrapper() {
                        this.wrapper.classList.toggle('share__wrapper--opened');
                    }
                }]);

                return ShareBlock;
            }();

            document.addEventListener('DOMContentLoaded', function () {
                var el = document.querySelectorAll('[data-share]');
                window.MBApp.shareBlocks = [];

                for (var i = 0; i < el.length; i += 1) {
                    window.MBApp.shareBlocks[i] = new ShareBlock(el[i]);
                }
            });

            /***/ }),

        /***/ "./src/blocks/modules/slider-article/slider-article.js":
        /*!*************************************************************!*\
          !*** ./src/blocks/modules/slider-article/slider-article.js ***!
          \*************************************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");

            swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper_core__WEBPACK_IMPORTED_MODULE_0__.Pagination]);

            var initSlider = function initSlider(el, index) {
                window.MBApp.sliderArticle[index] = new swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
                    loop: false,
                    slidesPerView: 1,
                    pagination: {
                        el: ".slider-article__pagination",
                        bulletClass: "slider-article__bullet",
                        bulletActiveClass: "slider-article__bullet--active",
                        renderBullet: function renderBullet(index, className) {
                            return '<div class="' + className + '" data-article-slide="' + index + '"><div class="slider-article__progress-icon"></div></div>';
                        }
                    }
                });
                var bullets = window.MBApp.sliderArticle[index].$el[0].querySelectorAll('.slider-article__bullet');

                var _loop = function _loop(i) {
                    bullets[i].addEventListener('mouseover', function () {
                        window.MBApp.sliderArticle[index].slideTo(bullets[i].getAttribute('data-article-slide'));
                    });
                };

                for (var i = 0; i < bullets.length; i++) {
                    _loop(i);
                }
            };

            document.addEventListener('DOMContentLoaded', function () {
                window.MBApp.sliderArticle = [];
                var slider = document.querySelectorAll('.slider-article');

                for (var i = 0; i < slider.length; i++) {
                    initSlider(slider[i], i);
                }
            });
            window.addEventListener('resize', function () {
                for (var i = 0; i < window.MBApp.sliderArticle.length; i++) {
                    var _window$MBApp$sliderA;

                    (_window$MBApp$sliderA = window.MBApp.sliderArticle[i]) === null || _window$MBApp$sliderA === void 0 ? void 0 : _window$MBApp$sliderA.destroy();
                }

                var slider = document.querySelectorAll('.slider-article');

                for (var _i = 0; _i < slider.length; _i++) {
                    initSlider(slider[_i], _i);
                }
            });

            /***/ }),

        /***/ "./src/blocks/modules/slider-intro/slider-intro.js":
        /*!*********************************************************!*\
          !*** ./src/blocks/modules/slider-intro/slider-intro.js ***!
          \*********************************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");

            swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper_core__WEBPACK_IMPORTED_MODULE_0__.Pagination]);

            var initSlider = function initSlider(el) {
                window.MBApp.sliderIntro = new swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
                    loop: false,
                    slidesPerView: 1,
                    spaceBetween: 30,
                    breakpoints: {
                        1200: {
                            slidesPerView: 'auto',
                            spaceBetween: 30,
                            pagination: {
                                el: ".slider-intro__counter",
                                type: "fraction"
                            }
                        }
                    },
                    pagination: {
                        el: ".slider-intro__pagination",
                        type: "bullets",
                        bulletActiveClass: "slider-intro__bullet--active",
                        bulletClass: "slider-intro__bullet"
                    },
                    navigation: {
                        nextEl: '.slider-intro__button--next',
                        prevEl: '.slider-intro__button--prev',
                        disabledClass: 'slider-intro__button--disabled'
                    }
                });
            };

            document.addEventListener('DOMContentLoaded', function () {
                var slider = document.querySelector('.slider-intro');
                if (slider) initSlider(slider);
            });
            window.addEventListener('resize', function () {
                var slider = document.querySelector('.slider-intro');
                setTimeout(function () {
                    var _window$MBApp, _window$MBApp$sliderI;

                    (_window$MBApp = window.MBApp) === null || _window$MBApp === void 0 ? void 0 : (_window$MBApp$sliderI = _window$MBApp.sliderIntro) === null || _window$MBApp$sliderI === void 0 ? void 0 : _window$MBApp$sliderI.destroy();
                    if (slider) initSlider(slider);
                }, 100);
            });

            /***/ }),

        /***/ "./src/blocks/modules/slider-service/slider-service.js":
        /*!*************************************************************!*\
          !*** ./src/blocks/modules/slider-service/slider-service.js ***!
          \*************************************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");


            var initSlider = function initSlider() {
                swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper_core__WEBPACK_IMPORTED_MODULE_0__.Pagination]);
                var slider = document.querySelector('.slider-service');

                if (slider) {
                    // eslint-disable-next-line no-new
                    new swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
                        loop: false,
                        // slidesPerView: 3,
                        spaceBetween: 30,
                        enabled: false,
                        breakpoints: {
                            1200: {
                                enabled: true,
                                slidesPerView: 3
                            }
                        },
                        navigation: {
                            nextEl: '.slider-service__button--right',
                            prevEl: '.slider-service__button--left',
                            disabledClass: 'slider-service__button--disabled'
                        }
                    });
                }
            };

            document.addEventListener('DOMContentLoaded', function () {
                initSlider();
            });
            window.addEventListener('resize', function () {
                initSlider();
            });

            /***/ }),

        /***/ "./src/blocks/modules/slider-sidebar/slider-sidebar.js":
        /*!*************************************************************!*\
          !*** ./src/blocks/modules/slider-sidebar/slider-sidebar.js ***!
          \*************************************************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");

            swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper_core__WEBPACK_IMPORTED_MODULE_0__.Pagination]);

            var initSlider = function initSlider(el, index) {
                window.MBApp.sliderSidebar[index] = new swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
                    slidesPerColumnFill: 'row',
                    spaceBetween: 8,
                    slidesPerView: 1,
                    slidesPerColumn: 2,
                    breakpoints: {
                        320: {
                            slidesPerView: 2
                        },
                        480: {
                            slidesPerView: 3
                        },
                        640: {
                            slidesPerView: 4
                        },
                        1300: {
                            enabled: false
                        }
                    },
                    pagination: {
                        el: ".slider-sidebar__pagination",
                        type: "bullets",
                        bulletActiveClass: "slider-sidebar__bullet--active",
                        bulletClass: "slider-sidebar__bullet"
                    },
                    navigation: {
                        nextEl: '.slider-sidebar__button--next',
                        prevEl: '.slider-sidebar__button--prev',
                        disabledClass: 'slider-sidebar__button--disabled'
                    }
                });
            };

            document.addEventListener('DOMContentLoaded', function () {
                var slider = document.querySelectorAll('.slider-sidebar');
                window.MBApp.sliderSidebar = [];

                for (var i = 0; i < slider.length; i += 1) {
                    if (slider) initSlider(slider[i], i);
                }
            });
            window.addEventListener('resize', function () {
                var slider = document.querySelectorAll('.slider-sidebar');

                var _loop = function _loop(i) {
                    setTimeout(function () {
                        var _window$MBApp, _window$MBApp$sliderS;

                        (_window$MBApp = window.MBApp) === null || _window$MBApp === void 0 ? void 0 : (_window$MBApp$sliderS = _window$MBApp.sliderSidebar[i]) === null || _window$MBApp$sliderS === void 0 ? void 0 : _window$MBApp$sliderS.destroy();
                        if (slider) initSlider(slider[i], i);
                    }, 100);
                };

                for (var i = 0; i < slider.length; i += 1) {
                    _loop(i);
                }
            });

            /***/ }),

        /***/ "./src/js/import/modules.js":
        /*!**********************************!*\
          !*** ./src/js/import/modules.js ***!
          \**********************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests */ "./src/js/import/requests.js");
            /* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
            /* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/menu/menu */ "./src/blocks/modules/menu/menu.js");
            /* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _modules_form_repeater_form_repeater__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/form-repeater/form-repeater */ "./src/blocks/modules/form-repeater/form-repeater.js");
            /* harmony import */ var _modules_form_repeater_form_repeater__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_form_repeater_form_repeater__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _modules_block_drop_block_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/block-drop/block-drop */ "./src/blocks/modules/block-drop/block-drop.js");
            /* harmony import */ var _modules_editor_tiptap_editor_tiptap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/editor-tiptap/editor-tiptap */ "./src/blocks/modules/editor-tiptap/editor-tiptap.js");
            /* harmony import */ var _modules_block_profile_block_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/block-profile/block-profile */ "./src/blocks/modules/block-profile/block-profile.js");
            /* harmony import */ var _modules_block_profile_card_block_profile_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/block-profile-card/block-profile-card */ "./src/blocks/modules/block-profile-card/block-profile-card.js");
            /* harmony import */ var _modules_block_profile_drop_block_profile_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/block-profile-drop/block-profile-drop */ "./src/blocks/modules/block-profile-drop/block-profile-drop.js");
            /* harmony import */ var _modules_block_profile_drop_block_profile_drop__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_block_profile_drop_block_profile_drop__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _modules_share_share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/share/share */ "./src/blocks/modules/share/share.js");
            /* harmony import */ var _modules_share_share__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_share_share__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _modules_input_file_input_file__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/input-file/input-file */ "./src/blocks/modules/input-file/input-file.js");
            /* harmony import */ var _modules_input_file_input_file__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_input_file_input_file__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _modules_input_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/input/input */ "./src/blocks/modules/input/input.js");
            /* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
            /* harmony import */ var _modules_link_top_link_top__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/link-top/link-top */ "./src/blocks/modules/link-top/link-top.js");
            /* harmony import */ var _modules_link_top_link_top__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_link_top_link_top__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _modules_slider_intro_slider_intro__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/slider-intro/slider-intro */ "./src/blocks/modules/slider-intro/slider-intro.js");
            /* harmony import */ var _modules_slider_article_slider_article__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/slider-article/slider-article */ "./src/blocks/modules/slider-article/slider-article.js");
            /* harmony import */ var _modules_article_case_article_case__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/article-case/article-case */ "./src/blocks/modules/article-case/article-case.js");
            /* harmony import */ var _modules_slider_sidebar_slider_sidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/slider-sidebar/slider-sidebar */ "./src/blocks/modules/slider-sidebar/slider-sidebar.js");
            /* harmony import */ var _modules_slider_service_slider_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/slider-service/slider-service */ "./src/blocks/modules/slider-service/slider-service.js");
            /* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
            /* harmony import */ var _modules_articles_articles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/articles/articles */ "./src/blocks/modules/articles/articles.js");
            /* harmony import */ var _modules_articles_articles__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_modules_articles_articles__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _modules_input_drug_input_drug__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/input-drug/input-drug */ "./src/blocks/modules/input-drug/input-drug.js");
            /* harmony import */ var _modules_input_drug_input_drug__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_modules_input_drug_input_drug__WEBPACK_IMPORTED_MODULE_21__);
            /* harmony import */ var _modules_search_mob_search_mob__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/search-mob/search-mob */ "./src/blocks/modules/search-mob/search-mob.js");
            /* harmony import */ var _modules_search_mob_search_mob__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_modules_search_mob_search_mob__WEBPACK_IMPORTED_MODULE_22__);
















            // ФФ








            /***/ }),

        /***/ "./src/js/import/requests.js":
        /*!***********************************!*\
          !*** ./src/js/import/requests.js ***!
          \***********************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
            /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
            // Удаление личного кабинета

            document.addEventListener('DOMContentLoaded', function () {
                var button = document.querySelector('[data-action="remove-profile"]');

                if (button) {
                    button.addEventListener('click', function () {
                        removeProfile(button);
                    });
                }
            });

            function removeProfile(el) {
                var messageField = document.querySelector('[data-message="deleted"]');
                // /local/templates/artisone-green/ajax/deleteUser.php?userId=80&delete=true

                axios__WEBPACK_IMPORTED_MODULE_0___default().get('/local/templates/artisone-green/ajax/deleteUser.php', {
                    params: {
                        userId: 80,
                        "delete": true
                    }
                }).then(function (response) {
                    if (response.data && response.data.error) {
                        throw new Error(response.data.error);
                    } else {
                        if (messageField) {
                            messageField.removeAttribute('hidden');
                        }

                        setTimeout(function () {
                            window.location.href = window.location.origin;
                        }, 3000);
                    }
                })["catch"](function (error) {
                    throw new Error(error);
                }).then(function () {// always executed
                });
            }

            /***/ }),

        /***/ "./src/js/index.js":
        /*!*************************!*\
          !*** ./src/js/index.js ***!
          \*************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
            /* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
            window.MBApp = {};


            document.addEventListener('DOMContentLoaded', function () {
                (0,tippy_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.tooltip-element', {
                    theme: 'light'
                });
            });

            /***/ })

        /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/ 		// Check if module is in cache
        /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
        /******/ 		if (cachedModule !== undefined) {
            /******/ 			return cachedModule.exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = __webpack_module_cache__[moduleId] = {
            /******/ 			// no module.id needed
            /******/ 			// no module.loaded needed
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = __webpack_modules__;
    /******/
    /************************************************************************/
    /******/ 	/* webpack/runtime/chunk loaded */
    /******/ 	(() => {
        /******/ 		var deferred = [];
        /******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
            /******/ 			if(chunkIds) {
                /******/ 				priority = priority || 0;
                /******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
                /******/ 				deferred[i] = [chunkIds, fn, priority];
                /******/ 				return;
                /******/ 			}
            /******/ 			var notFulfilled = Infinity;
            /******/ 			for (var i = 0; i < deferred.length; i++) {
                /******/ 				var [chunkIds, fn, priority] = deferred[i];
                /******/ 				var fulfilled = true;
                /******/ 				for (var j = 0; j < chunkIds.length; j++) {
                    /******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
                        /******/ 						chunkIds.splice(j--, 1);
                        /******/ 					} else {
                        /******/ 						fulfilled = false;
                        /******/ 						if(priority < notFulfilled) notFulfilled = priority;
                        /******/ 					}
                    /******/ 				}
                /******/ 				if(fulfilled) {
                    /******/ 					deferred.splice(i--, 1)
                    /******/ 					var r = fn();
                    /******/ 					if (r !== undefined) result = r;
                    /******/ 				}
                /******/ 			}
            /******/ 			return result;
            /******/ 		};
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/compat get default export */
    /******/ 	(() => {
        /******/ 		// getDefaultExport function for compatibility with non-harmony modules
        /******/ 		__webpack_require__.n = (module) => {
            /******/ 			var getter = module && module.__esModule ?
                /******/ 				() => (module['default']) :
                /******/ 				() => (module);
            /******/ 			__webpack_require__.d(getter, { a: getter });
            /******/ 			return getter;
            /******/ 		};
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	(() => {
        /******/ 		// define getter functions for harmony exports
        /******/ 		__webpack_require__.d = (exports, definition) => {
            /******/ 			for(var key in definition) {
                /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/ 				}
                /******/ 			}
            /******/ 		};
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	(() => {
        /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	(() => {
        /******/ 		// define __esModule on exports
        /******/ 		__webpack_require__.r = (exports) => {
            /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ 			}
            /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 		};
        /******/ 	})();
    /******/
    /******/ 	/* webpack/runtime/jsonp chunk loading */
    /******/ 	(() => {
        /******/ 		// no baseURI
        /******/
        /******/ 		// object to store loaded and loading chunks
        /******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
        /******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
        /******/ 		var installedChunks = {
            /******/ 			"main": 0
            /******/ 		};
        /******/
        /******/ 		// no chunk on demand loading
        /******/
        /******/ 		// no prefetching
        /******/
        /******/ 		// no preloaded
        /******/
        /******/ 		// no HMR
        /******/
        /******/ 		// no HMR manifest
        /******/
        /******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
        /******/
        /******/ 		// install a JSONP callback for chunk loading
        /******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            /******/ 			var [chunkIds, moreModules, runtime] = data;
            /******/ 			// add "moreModules" to the modules object,
            /******/ 			// then flag all "chunkIds" as loaded and fire callback
            /******/ 			var moduleId, chunkId, i = 0;
            /******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
                /******/ 				for(moduleId in moreModules) {
                    /******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
                        /******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
                        /******/ 					}
                    /******/ 				}
                /******/ 				if(runtime) var result = runtime(__webpack_require__);
                /******/ 			}
            /******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            /******/ 			for(;i < chunkIds.length; i++) {
                /******/ 				chunkId = chunkIds[i];
                /******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                    /******/ 					installedChunks[chunkId][0]();
                    /******/ 				}
                /******/ 				installedChunks[chunkId] = 0;
                /******/ 			}
            /******/ 			return __webpack_require__.O(result);
            /******/ 		}
        /******/
        /******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
        /******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        /******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
        /******/ 	})();
    /******/
    /************************************************************************/
    /******/
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
    /******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
    /******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
    /******/
    /******/ })()
;
//# sourceMappingURL=main.js.map
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
});

function initTabs() {
    const tabsBtn = document.querySelectorAll(".modal-registration__tab-btn");
    const tabsItems = document.querySelectorAll(".modal-registration__tab-form");

    tabsBtn.forEach((item) => {
        item.addEventListener("click", () => {
            const currentBtn = item;
            const tabId = currentBtn.getAttribute("data-tab");
            const currentTab = document.querySelector(tabId);

            if (!currentTab.classList.contains("active")) {

                tabsBtn.forEach((item) => {
                    item.classList.remove("active");
                });

                tabsItems.forEach((item) => {
                    item.classList.remove("active");
                });

                currentBtn.classList.add("active");
                currentTab.classList.add("active");
            } else if (currentTab.classList.contains("active")) {

                currentBtn.classList.remove("active");
                currentTab.classList.remove("active");
            }
        });
    });
}

    document.addEventListener('DOMContentLoaded', () => {
        let selects = document.querySelectorAll('[data-select]');
        selects.forEach(function (select, index) {
            new customSelect(select)
        })
    })
    class customSelect {
        constructor(select) {
            this.select = select;
            this.trigger = select.querySelector('[data-select-trigger]');
            this.content = select.querySelector('[data-select-menu]');
            this.links = select.querySelectorAll('[data-select-link]');

            this.setListeners();
        }

        setListeners() {
            this.initSelect();
            this.getLinkValue();
        }
        initSelect() {
            this.trigger.addEventListener('click', (event) => {
                this.trigger.classList.toggle('active');
                this.content.classList.toggle('active');
            })
            this.select.addEventListener('mouseleave', () => {
                if (this.content.classList.contains('active')) {
                    this.content.classList.remove('active')
                }
            })
        }

        getLinkValue() {
            this.links.forEach((link, index) => {
           link.addEventListener('click', (event) => {
                  if (event.target == link) {
                        let value = event.target.href
                        if (value) {
                            window.location.href = value;
                        }
                    }
                })
            })
        }
    }