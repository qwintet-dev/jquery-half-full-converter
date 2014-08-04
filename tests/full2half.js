test('数字のみの全角→半角変換テスト', function() {
	var input_val = '０１２０１２３５６７８',
		expect_val = '01201235678',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input.hfconvert();
	$input.trigger(event);
	ok($input.val() === expect_val);
});

test('英語小文字のみの全角→半角変換テスト', function() {
	var input_val = 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ',
		expect_val = 'abcdefghijklmnopqrstuvwxyz',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input.hfconvert();
	$input.trigger(event);
	ok($input.val() === expect_val);
});

test('英語大文字の全角→半角変換テスト', function() {
	var input_val = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ',
		expect_val = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input.hfconvert();
	$input.trigger(event);
	ok($input.val() === expect_val);
});

test('記号文字の全角→半角変換テスト', function() {
	var input_val = '＠＿−－ー',
		expect_val = '@_---',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input.hfconvert();
	$input.trigger(event);
	ok($input.val() === expect_val);
});

test('複合ケース（電話番号）の全角→半角変換テスト', function() {
	var input_val = '０９０−１２３４−５６７８',
		expect_val = '090-1234-5678',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input.hfconvert();
	$input.trigger(event);
	ok($input.val() === expect_val);
});

test('複合ケース（メールアドレス）の全角→半角変換テスト', function() {
	var input_val = 'ｍａｉｌ＿ａｄｄｒｅｓｓ＠ｄｏｃｏｍｏ．ｎｅ．ｊｐ',
		expect_val = 'mail_address@docomo.ne.jp',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input.hfconvert();
	$input.trigger(event);
	ok($input.val() === expect_val);
});