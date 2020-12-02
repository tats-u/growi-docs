(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{787:function(e,a,t){"use strict";t.r(a);var s=t(48),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"クイックスタート"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#クイックスタート","aria-hidden":"true"}},[e._v("#")]),e._v(" クイックスタート")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("以下の説明は、"),t("RouterLink",{attrs:{to:"/ja/dev/startup/dev-env.html"}},[e._v("開発環境の構築")]),e._v(" および "),t("RouterLink",{attrs:{to:"/ja/dev/startup/launch.html"}},[e._v("起動")]),e._v(" ページで紹介されている環境が構築されている前提で記述されています")],1)]),e._v(" "),t("p",[e._v("プラグインを開発するのに最も簡単な方法は、ボイラープレートである "),t("a",{attrs:{href:"https://github.com/weseek/growi-plugin-boilerplate",target:"_blank",rel:"noopener noreferrer"}},[e._v("growi-plugin-boilerplate"),t("OutboundLink")],1),e._v(" をコピーし、それを元にオリジナルのリポジトリを作ることです。")]),e._v(" "),t("h2",{attrs:{id:"clone-とリネーム"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-とリネーム","aria-hidden":"true"}},[e._v("#")]),e._v(" Clone とリネーム")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/weseek/growi-plugin-boilerplate\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" growi-plugin-boilerplate growi-plugin-myplugin\n")])])]),t("p",[e._v("命名規則に注意してください。\nGROWI は、"),t("a",{attrs:{href:"https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_loading_from_node_modules_folders",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js のモジュール解決"),t("OutboundLink")],1),e._v(" の仕組みを利用し、\n"),t("code",[e._v("growi-plugin-")]),e._v(" プレフィクスを持つパッケージを自動検出します。\nそのため、開発対象のプラグインのディレクトリは "),t("code",[e._v("growi-plugin-*")]),e._v(" の形式かつ GROWI 本体からロード可能なモジュールディレクトリに配置される必要があります。")]),e._v(" "),t("p",[e._v("通常は以下のようなディレクトリ構成をおすすめします。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- somewhere\n    - growi                         <-- GROWI\n    - node_modules\n        - growi-plugin-my-plugin    <-- Your Plugin to develop\n")])])]),t("p",[e._v("次に、"),t("code",[e._v("package.json")]),e._v(" を書き換えます。最低限必要なのは "),t("code",[e._v("name")]),e._v(" の値です。")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[e._v("...\n"),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"growi-plugin-myplugin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n...\n")])])]),t("p",[e._v("こちらもディレクトリ名と同様に "),t("code",[e._v("growi-plugin-")]),e._v(" プレフィクスを付けてください。")]),e._v(" "),t("h2",{attrs:{id:"依存関係解決"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依存関係解決","aria-hidden":"true"}},[e._v("#")]),e._v(" 依存関係解決")]),e._v(" "),t("p",[e._v("プラグインが必要とするパッケージをインストールします。"),t("code",[e._v("growi-plugin-myplugin")]),e._v(" ディレクトリ下で実行してください。")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("yarn\n")])])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[t("code",[e._v("npm install")]),e._v(" は利用しないでください")])]),e._v(" "),t("h2",{attrs:{id:"開発環境の起動"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#開発環境の起動","aria-hidden":"true"}},[e._v("#")]),e._v(" 開発環境の起動")]),e._v(" "),t("p",[e._v("本番環境でプラグインを利用する場合は、予め npm パッケージとして公開された GROWI プラグインを "),t("code",[e._v("yarn")]),e._v(" を用いてインストールしますが、開発時はその手順は不要です。")]),e._v(" "),t("p",[e._v("代わりに設定ファイルにリストされたプラグインを擬似的にインストールされた状態として扱うことで、"),t("code",[e._v("npm link")]),e._v(" による設定を行う事無くシームレスな開発を実現しています。")]),e._v(" "),t("h3",{attrs:{id:"本体の設定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本体の設定","aria-hidden":"true"}},[e._v("#")]),e._v(" 本体の設定")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("GROWI のフロントエンドサーバー・バックエンドサーバーが起動している場合は両方とも終了させる")])]),e._v(" "),t("li",[t("p",[e._v("GROWI 本体側の設定ファイル "),t("code",[e._v("config/env.dev.js")]),e._v(" を編集")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n  ...\n\n  PLUGIN_NAMES_TOBE_LOADED: [\n    'growi-plugin-myplugin',\n  ],\n\n  ...\n};\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"本体の起動"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本体の起動","aria-hidden":"true"}},[e._v("#")]),e._v(" 本体の起動")]),e._v(" "),t("ul",[t("li",[e._v("フロントエンドサーバーの起動\n"),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/ja/dev/startup/launch.html"}},[e._v("起動")]),e._v(" ページの内容に従って起動")],1),e._v(" "),t("li",[e._v("クライアントビルド時に以下のログを確認"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("...\n\n> node bin/generate-plugin-definitions-source.js\n\n12:52:55.765Z  INFO growi:bin:generate-plugin-definitions-source: Detected plugins:  []\n12:52:55.770Z  INFO growi:bin:generate-plugin-definitions-source: Detected plugins from PLUGIN_NAMES_TOBE_LOADED:  [ 'growi-plugin-myplugin' ]\n\n...\n")])])])])])]),e._v(" "),t("li",[e._v("サーバー\n"),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/ja/dev/startup/launch.html"}},[e._v("起動")]),e._v(" ページの内容に従って起動")],1),e._v(" "),t("li",[e._v("サーバー起動時に以下のログを確認"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("...\n\n13:17:03.647Z  INFO growi:plugins:PluginService: load plugin 'growi-plugin-myplugin'\n\n...\n")])])])])])])]),e._v(" "),t("p",[e._v("プラグイン側のソースの編集をトリガに、自動でクライアントビルドとサーバー再起動が行われます。")]),e._v(" "),t("h2",{attrs:{id:"プラグインの利用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#プラグインの利用","aria-hidden":"true"}},[e._v("#")]),e._v(" プラグインの利用")]),e._v(" "),t("p",[e._v("それでは使ってみましょう。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/weseek/growi-plugin-boilerplate",target:"_blank",rel:"noopener noreferrer"}},[e._v("growi-plugin-boilerplate"),t("OutboundLink")],1),e._v(" のソースコードを何も改変していなければ、Markdown 中で "),t("code",[e._v("$foo")]),e._v(" タグと "),t("code",[e._v("$bar")]),e._v(" タグが利用可能になります。")]),e._v(" "),t("h3",{attrs:{id:"foo-タグ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#foo-タグ","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("$foo")]),e._v(" タグ")]),e._v(" "),t("p",[e._v("任意のページを編集し、以下を入力してください。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$foo()\n")])])]),t("p",[e._v("出力は以下のようになるはずです。")]),e._v(" "),t("blockquote",[t("p",[e._v("$foo() (-> Error: set 'range' option. e.g. 'range=1:10')")])]),e._v(" "),t("p",[e._v("これは、"),t("code",[e._v("$foo")]),e._v(" タグが "),t("code",[e._v("range")]),e._v(" オプションを必須のパラメータとして取るように実装されているためです。\n入力を以下のように変更します。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$foo(range=1:10)\n")])])]),t("p",[e._v("すると出力は以下のように変わります。")]),e._v(" "),t("blockquote",[t("p",[e._v("FooContext has been parsed! - range: 1 - 10")])]),e._v(" "),t("h3",{attrs:{id:"bar-タグ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bar-タグ","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("$bar")]),e._v(" タグ")]),e._v(" "),t("p",[e._v("次はサーバーと通信を行う実装のサンプルです。\n任意のページを編集し、以下を入力してください。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$bar()\n")])])]),t("p",[e._v("サーバーとの通信後、以下を出力するはずです。")]),e._v(" "),t("blockquote",[t("p",[e._v('The author of this page is "someone".')])]),e._v(" "),t("p",[e._v('"someone" の部分は、編集中のページの作成者のユーザー名か、あるいは未作成のページの場合は現在ログイン中のユーザーの名前が表示されます。')])])},[],!1,null,null,null);a.default=r.exports}}]);