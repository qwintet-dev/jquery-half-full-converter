/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Qwintet Co.,Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function () {
	$.fn.hfconvert = function(config) {
		/** @const 全角文字判定正規表現 */
		var FULL_CHAR_REGEX = /[０-９]/g;

		/** @var {object} デフォルトのオプション値 */
		var defaults = {
			fire: 'change'
		};

		/**
		 * 全角文字列を半角文字列に変換
		 *
		 * @param {string} char
		 * @return {string}
		 */
		function convertFull2Half(char) {
			return String.fromCharCode(char.charCodeAt(0) - 0xFEE0);
		}

		/**
		 * 全角→半角変換ハンドラ
		 *
		 * @param {object} e
		 * @return void
		 */
		function full2halfHundler(e) {
			var $target = $(e.target);
			var changed_val = $target
								.val()
								.replace(/ー/g, '-')
								.replace(FULL_CHAR_REGEX, convertFull2Half);
			$target.val(changed_val);
		}

		var option = $.extend(defaults, config);
		$(this).bind(option.fire, full2halfHundler);
	};
})();
