function makeTextInputDom(val) {
	var $input = $('input').attr('type', 'text').val(val);
	return $input;
}

test('数字のみの全角→半角変換テスト', function() {
	var input_val = '０１２０１２３５６７８',
		expect_val = '01201235678',
		event = 'change';

	var $input1 = makeTextInputDom(input_val);
	$input1.hfconvert();
	$input1.trigger(event);
	ok($input1.val() === expect_val);

	var $input2 = makeTextInputDom(input_val);
	$input2.hfconvert();
	$input2.trigger(event);
	ok($input2.val() !== input_val);
});

test('数字とハイフンの全角→半角変換テスト', function() {
	var input_val = '０１２０ー１２３ー５６７８',
		expect_val = '0120-123-5678',
		event = 'change';

	var $input1 = makeTextInputDom(input_val);
	$input1.hfconvert();
	$input1.trigger(event);
	ok($input1.val() === expect_val);

	var $input2 = makeTextInputDom(input_val);
	$input2.hfconvert();
	$input2.trigger(event);
	ok($input2.val() !== input_val);
});

test('イベントオプション変更による動作テスト', function() {
	var input_val = '０１２０ー１２３ー５６７８',
		expect_val = '0120-123-5678';

	var $input1 = makeTextInputDom(input_val),
		event1 = 'input';
	$input1.hfconvert({fire:event1});
	$input1.trigger(event1);
	ok($input1.val() === expect_val);

	var $input2 = makeTextInputDom(input_val),
		event2 = 'keyup';
	$input2.hfconvert({fire:event2});
	$input2.trigger(event2);
	ok($input2.val() === expect_val);
});