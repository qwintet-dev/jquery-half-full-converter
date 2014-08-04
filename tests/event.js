test('全角→半角変換後のイベント発生テスト', function() {
	var input_val = '０１２０１２３５６７８',
		expect_val = '01201235678',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input
		.hfconvert()
		.bind('full2half_end', function() {
			ok($(this).val() === expect_val);
		})
		.trigger(event);
});

test('半角→全角変換後のイベント発生テスト', function() {
	var input_val = '01201235678',
		expect_val = '０１２０１２３５６７８',
		event = 'change';

	var $input = makeTextInputDom(input_val);
	$input
		.hfconvert({proc: 'half2full'})
		.bind('half2full_end', function() {
			ok($(this).val() === expect_val);
		})
		.trigger(event);
});