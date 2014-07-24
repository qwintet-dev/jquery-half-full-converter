# jquery-harf-full-converter.js

jquery-harf-full-converter.jsはユーザ入力された全角文字と半角文字を変換する機能をjqueryのプラグインとして提供します。
このライブラリはUnicodeのみ対応です。

※現時点では全角数字→半角数字の変換のみ対応しています。

## 利用するために…

既存Gitプロジェクトのsubmoduleとして利用することを前提に記載する。

### インストール

下記のコマンドを対象gitリポジトリ内で実行
`git submodule add https://github.com/qwintet-dev/jquery-half-full-converter /path/to/dir`

### アップデート

下記のコマンドを対象gitリポジトリ内で実行
`git submodule update`

## 使い方

### 基本

対象のセレクタから`hfconvert`を呼ぶことで、セレクタの入力を監視し、
全角文字と半角文字の変換を行います。

```html
<input type="text" id="full-to-half">

<script>
$('#full-to-half').hfconvert();
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

* 半角→全角変換処理の作成
* アルファベット文字の変換対応
* 記号の変換対応

## リリースノート

2014.07.24 v0.1 リリース
