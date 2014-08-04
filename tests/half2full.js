test('数字のみの半角→全角変換テスト', function() {
	var input_val = '01201235678',
		expect_val = '０１２０１２３５６７８',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input.hfconvert({proc:'half2full'});
	$input.trigger(event);
	ok($input.val() === expect_val);
});

test('英語小文字のみの半角→全角変換テスト', function() {
	var input_val = 'abcdefghijklmnopqrstuvwxyz',
		expect_val = 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input.hfconvert({proc:'half2full'});
	$input.trigger(event);
	ok($input.val() === expect_val);
});

test('英語大文字の半角→全角変換テスト', function() {
	var input_val = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		expect_val = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input.hfconvert({proc:'half2full'});
	$input.trigger(event);
	ok($input.val() === expect_val);
});

test('記号文字の半角→全角変換テスト', function() {
	var input_val = '@_-',
		expect_val = '＠＿−',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input.hfconvert({proc:'half2full'});
	$input.trigger(event);
	ok($input.val() === expect_val);
});

test('複合ケース（電話番号）の半角→全角変換テスト', function() {
	var input_val = '090-1234-5678',
		expect_val = '０９０−１２３４−５６７８',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input.hfconvert({proc:'half2full'});
	$input.trigger(event);
	ok($input.val() === expect_val);
});

test('複合ケース（メールアドレス）の半角→全角変換テスト', function() {
	var input_val = 'mail_address@docomo.ne.jp',
		expect_val = 'ｍａｉｌ＿ａｄｄｒｅｓｓ＠ｄｏｃｏｍｏ．ｎｅ．ｊｐ',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input.hfconvert({proc:'half2full'});
	$input.trigger(event);
	ok($input.val() === expect_val);
});