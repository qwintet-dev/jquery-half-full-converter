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
		/** @const {Regex} 全角文字判定正規表現 */
		var FULL_CHAR_REGEX = /[ａ-ｚＡ-Ｚ０-９]/g;

		/** @const {Regex} 半角文字判定正規表現 */
		var HALF_CHAR_REGEX = /[a-zA-Z0-9]/g;

		/** @const {object} 全角記号→半角記号のMAP */
		var FULL_TO_HALF_SYMBOL_MAP = {
			'＠': '@',
			'＿': '_',
			'−': '-',
			'－': '-',
			'ー': '-',
			'．': '.'
		};

		/** @const {object} 半角記号→全角記号のMAP */
		var HALF_TO_FULL_SYMBOL_MAP = {
			'@': '＠',
			'_': '＿',
			'-': '−',
			'.': '．'
		};

		/** @const {string} 全角→半角終了イベント名 */
		var EVENT_FULL_TO_HALF_END = 'full2half_end';

		/** @const {string} 半角→全角終了イベント名 */
		var EVENT_HALF_TO_FULL_END = 'half2full_end';

		/** @var {object} デフォルトのオプション値 */
		var defaults = {
			fire: 'change',
			encode: 'utf8',
			proc: 'full2half'
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
		 * 半角文字列を全角文字列に変換
		 * 
		 * @param {string} char
		 * @return {string}
		 */
		function convertHalf2Full(char) {
			return String.fromCharCode(char.charCodeAt(0) + 0xFEE0);
		}

		/**
		 * 文字列のエンコード
		 * オプションで設定したunicodeに変換する
		 * （jsのデフォルトunicodeがutf16のため、utf8変換設定時のみ変換する）
		 * 
		 * @params {string} str 文字列
		 @ @return {string}
		 */
		function encode(str) {
			if (option.encode === 'utf8') {
				return unescape(encodeURIComponent(str));
			} else if (option.encode === 'utf16') {
				return str;
			} else {
				throw 'undefined encode option.';
			}
		}

		/**
		 * 全角→半角変換ハンドラ
		 *
		 * @param {object} event
		 * @return void
		 */
		function full2halfHundler(event) {
			try {
				var $target = $(event.target),
					val = $target.val(),
					changed_val = '';

				for (var i=0; i<val.length; i++) {
					var char = val.charAt(i);

					if (FULL_TO_HALF_SYMBOL_MAP[char]) {
						char = FULL_TO_HALF_SYMBOL_MAP[char];
					}
					changed_val += char;
				}

				$target
					.val( encode(changed_val.replace(FULL_CHAR_REGEX, convertFull2Half)) )
					.trigger(EVENT_FULL_TO_HALF_END);
			} catch(e) {
				console.log(e);
			}
		}

		/**
		 * 半角→全角変換ハンドラ
		 *
		 * @param {object} event
		 * @return void
		 */
		function half2fullHundler(event) {
			try {
				var $target = $(event.target),
					val = $target.val(),
					changed_val = '';

				for (var i=0; i<val.length; i++) {
					var char = val.charAt(i);

					if (HALF_TO_FULL_SYMBOL_MAP[char]) {
						char = HALF_TO_FULL_SYMBOL_MAP[char];
					}
					changed_val += char;
				}

				$target
					.val( changed_val.replace(HALF_CHAR_REGEX, convertHalf2Full) )
					.trigger(EVENT_HALF_TO_FULL_END);
			} catch(e) {
				console.log(e);
			}
		}

		try {
			var option = $.extend(defaults, config),
				$self = $(this);

			if (option.proc === 'full2half') {
				$self.bind(option.fire, full2halfHundler);
			} else if (option.proc === 'half2full') {
				$self.bind(option.fire, half2fullHundler);
			} else {
				throw e;
			}

			return $self;
		} catch(e) {
			console.log(e);
		}
	};
})();
