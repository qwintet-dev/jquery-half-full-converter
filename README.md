# jquery-harf-full-converter.js

jquery-harf-full-converter.jsはユーザ入力された全角文字と半角文字を変換する機能をjqueryのプラグインとして提供します。  
このライブラリはUnicodeのみ対応です。

## インストール

ソースファイルをダウンロードするか、このリポジトリをcloneして利用します。

* 直接ダウンロードする場合
```
wget --no-check-certificate https://raw.githubusercontent.com/qwintet-dev/jquery-half-full-converter/master/jquery-half-full-converter.js
```
* リポジトリをcloneする場合
```
git clone ssh://git@github.com/qwintet-dev/jquery-half-full-converter
```

## 使い方

### 基本

対象のセレクタから`hfconvert`を呼ぶことで、セレクタの入力を監視し、全角文字と半角文字の変換を行います。

```html
<input type="text" id="full-to-half">
<input type="text" id="half-to-full">

<script>
// 全角→半角変換
$('#full-to-half').hfconvert();

// 半角→全角変換
$('#half-to-full').hfconvert({proc: 'half2full'});
</script>
```

### 変換処理後に別の処理を行う

`jquery-harf-full-converter.js`は全角半角変換後にイベントを発行します。
このイベントに対してリスナを登録することで、変換後の値に対して処理を行うことが可能です。

```html
<input type="text" id="full-to-half">
<input type="text" id="half-to-full">

<script>
// 全角→半角変換
$('#full-to-half')
  .hfconvert()
  .on('full2half_end', function() {
    // some where
  });

// 半角→全角変換
$('#half-to-full')
  .hfconvert({proc: 'half2full'})
  .on('half2full_end', function() {
    // some where
  });
</script>
```

### 発火イベントの変更

デフォルトでは`change`イベントによって変換処理が実行されます。  
イベントはオプションとして設定することで変更可能です。

```html
<input type="text" id="full-to-half">

<script>
// keyupイベントで変換処理が実行されるように変更
$('#full-to-half').hfconvert({fire:'keyup'});
</script>
```

## テスト

1. node.jsをインストールしておく。
2. このリポジトリをcloneしたら`npm install --save-dev qunit`コマンドを実行してQunitをインストールする。
3. tests/test.htmlをブラウザで読み込むことでテストが実行される。

## TODO

- カナ文字の変換対応
- 発火イベントオプション変更時のテスト作成
- travis導入

## リリースノート

<ul>
  <li>2014.07.24 v0.1 リリース</li>
  <li>
    2014.08.04 v0.2 リリース
    <ul>
      <li>半角→全角変換処理の作成</li>
      <li>アルファベット文字の変換対応</li>
      <li>記号の変換対応</li>
      <li>テストの分割</li>
      <li>処理終了時のイベント発行</li>
    </ul>
  </li>
</ul>
