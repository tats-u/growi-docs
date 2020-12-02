(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{788:function(t,e,a){"use strict";a.r(e);var r=a(48),o=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ボイラープレートを探検する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ボイラープレートを探検する","aria-hidden":"true"}},[t._v("#")]),t._v(" ボイラープレートを探検する")]),t._v(" "),a("p",[t._v("このページでは、プラグインを開発する際の参考として、ボイラープレートプロジェクト "),a("a",{attrs:{href:"https://github.com/weseek/growi-plugin-boilerplate",target:"_blank",rel:"noopener noreferrer"}},[t._v("growi-plugin-boilerplate"),a("OutboundLink")],1),t._v(" でどのような処理が行われているかを見ていきます。")]),t._v(" "),a("h2",{attrs:{id:"growi-plugin-boilerplate-で可能になること"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi-plugin-boilerplate-で可能になること","aria-hidden":"true"}},[t._v("#")]),t._v(" growi-plugin-boilerplate で可能になること")]),t._v(" "),a("p",[t._v("growi-plugin-boilerplate をインストールすると、"),a("code",[t._v("$foo")]),t._v(" タグおよび "),a("code",[t._v("$bar")]),t._v(" タグが利用可能になります。(より詳しい説明は "),a("RouterLink",{attrs:{to:"/ja/dev/plugin/custom-tag.html"}},[t._v("カスタムタグ")]),t._v(" ページをご覧ください)")],1),t._v(" "),a("p",[t._v("利用時の全体の流れは以下のようになります。")]),t._v(" "),a("ol",[a("li",[t._v("ユーザーが Markdown 入力中、"),a("code",[t._v("$foo")]),t._v(" タグおよび "),a("code",[t._v("$bar")]),t._v(" タグを利用する")]),t._v(" "),a("li",[t._v("Markdown レンダラーに登録された "),a("RouterLink",{attrs:{to:"/en/api/commons/util/basic-interceptor.html"}},[t._v("BasicInterceptor")]),t._v(" 拡張が上記タグの利用を検出し、React Component を描画\n"),a("ul",[a("li",[a("code",[t._v("$foo")]),t._v(" タグの場合は "),a("code",[t._v("Foo")]),t._v(" コンポーネント、"),a("code",[t._v("$bar")]),t._v(" タグの場合は "),a("code",[t._v("Bar")]),t._v(" コンポーネントを描画する")])])],1),t._v(" "),a("li",[a("code",[t._v("Bar")]),t._v(" コンポーネントは、初期化後に REST によるサーバーサイド API アクセスを行い、取得した情報を描画")])]),t._v(" "),a("h2",{attrs:{id:"クライアントサイドの動作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#クライアントサイドの動作","aria-hidden":"true"}},[t._v("#")]),t._v(" クライアントサイドの動作")]),t._v(" "),a("p",[t._v("クライアントサイドの詳細を見ていきましょう。")]),t._v(" "),a("ul",[a("li",[t._v("エントリーポイントは "),a("code",[t._v("src/client-entry.js")]),t._v(" です"),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("エントリーポイントの概要については、"),a("RouterLink",{attrs:{to:"/ja/dev/plugin/architecture.html"}},[t._v("アーキテクチャ")]),t._v(" のページを確認してください")],1)])]),t._v(" "),a("li",[a("code",[t._v("interceptorManager")]),t._v(" に対し、2つの "),a("RouterLink",{attrs:{to:"/en/api/commons/util/basic-interceptor.html"}},[t._v("BasicInterceptor")]),t._v(" 拡張クラスのインスタンスを登録しています")],1)]),t._v(" "),a("h3",{attrs:{id:"_2つの-basicinterceptor-拡張"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2つの-basicinterceptor-拡張","aria-hidden":"true"}},[t._v("#")]),t._v(" 2つの "),a("RouterLink",{attrs:{to:"/en/api/commons/util/basic-interceptor.html"}},[t._v("BasicInterceptor")]),t._v(" 拡張")],1),t._v(" "),a("ul",[a("li",[a("code",[t._v("FooBarPreRenderInterceptor")]),t._v(" "),a("ul",[a("li",[t._v("このクラスは、本体側が Markdown の解析段階で発火するイベントに反応するような設計になっています\n"),a("ul",[a("li",[a("code",[t._v("isInterceptWhen")]),t._v(" メソッドの処理によります")])])]),t._v(" "),a("li",[t._v("上記イベントが起こると、"),a("code",[t._v("process")]),t._v(" メソッドがトリガされ、ユーザーが入力したタグパターンに合致する記述があるかを調べます"),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("プラグインタグの解析用のライブラリとして "),a("a",{attrs:{href:"https://docs.growi.org/api/commons/plugin/util/custom-tag-utils.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("customTagUtils"),a("OutboundLink")],1),t._v(" を利用できます")])])]),t._v(" "),a("li",[a("code",[t._v("$foo()")]),t._v(" または "),a("code",[t._v("$bar()")]),t._v(" の形にマッチした箇所があった場合、後に React Component を描画するための特殊なIDを持つ DOM に置き換えられます")])])]),t._v(" "),a("li",[a("code",[t._v("FooBarPostRenderInterceptor")]),t._v(" "),a("ul",[a("li",[t._v("HTML のレンダリング後、"),a("code",[t._v("FooBarPreRenderInterceptor")]),t._v(" で用意された特殊なIDを持つ DOM を対象に、React Component を描画する処理を行います")]),t._v(" "),a("li",[t._v("同時に、カスタムタグのコンテキストデータを作成します"),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("カスタムタグの書式を parse してコンテキストデータを作成するためのライブラリとして "),a("a",{attrs:{href:"https://docs.growi.org/api/commons/plugin/model/tag-context.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TagContext"),a("OutboundLink")],1),t._v(" を利用できます")])])]),t._v(" "),a("li",[a("code",[t._v("$foo")]),t._v(" タグの場合は "),a("code",[t._v("FooContext")]),t._v("、"),a("code",[t._v("$bar")]),t._v(" タグの場合は "),a("code",[t._v("BarContext")]),t._v(" インスタンスを生成し、React Component に渡します")])])])]),t._v(" "),a("h2",{attrs:{id:"react-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-component","aria-hidden":"true"}},[t._v("#")]),t._v(" React Component")]),t._v(" "),a("h3",{attrs:{id:"初期化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初期化","aria-hidden":"true"}},[t._v("#")]),t._v(" 初期化")]),t._v(" "),a("p",[t._v("Foo コンポーネントおよび Bar コンポーネントが初期化されると、"),a("code",[t._v("componentWillMount")]),t._v(" で "),a("RouterLink",{attrs:{to:"/ja/dev/plugin/custom-tag.html#ステートキャッシュ"}},[t._v("ステートキャッシュ")]),t._v(" からのステートデータの復元が行われます。キャッシュが見つからなかった場合は改めてコンテキストデータの parse を行います。")],1),t._v(" "),a("h3",{attrs:{id:"foo-コンポーネント"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foo-コンポーネント","aria-hidden":"true"}},[t._v("#")]),t._v(" Foo コンポーネント")]),t._v(" "),a("p",[t._v("Foo コンポーネントは、タグのオプションの値を表示するだけの単純な機能のみが実装されています。")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ja/dev/plugin/quick-start.html#プラグインの利用"}},[t._v("クイックスタート#プラグインの利用")]),t._v(" にあったように、")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$foo()\n")])])]),a("p",[t._v("だけではエラー表示になります。これは "),a("code",[t._v("FooContext")]),t._v(" の parse 時に、"),a("code",[t._v("range")]),t._v(" オプションの存在をチェックし、存在しない場合に例外を throw しているからです。")]),t._v(" "),a("p",[t._v("そこで、タグの記述を以下のように変えます。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$foo(range=1:10)\n")])])]),a("p",[a("code",[t._v("1:10")]),t._v(" は、スタートを 1 、エンドを 10 とする表現です。\nこれで parse 処理で例外が発生しなくなり、"),a("code",[t._v("Foo")]),t._v(" コンポーネントは "),a("code",[t._v("fooContext.getOptRange()")]),t._v(" から "),a("code",[t._v("range")]),t._v(" オプションの値を受け取って、正常なアウトプットを行います。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("カスタムタグのオプションとして Range Expression を適用した値の parse 処理は、"),a("a",{attrs:{href:"https://docs.growi.org/api/commons/plugin/util/option-parser.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OptionParser"),a("OutboundLink")],1),t._v(" ライブラリの "),a("code",[t._v("parseRange")]),t._v(" メソッドの利用が便利です")])]),t._v(" "),a("h3",{attrs:{id:"bar-コンポーネント"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bar-コンポーネント","aria-hidden":"true"}},[t._v("#")]),t._v(" Bar コンポーネント")]),t._v(" "),a("p",[t._v("Bar コンポーネントは、サーバーに対する Rest API アクセスを行います。")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ja/dev/plugin/quick-start.html#プラグインの利用"}},[t._v("クイックスタート#プラグインの利用")]),t._v(" にあったように、")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$bar()\n")])])]),a("p",[t._v("と記述すると、"),a("code",[t._v("axios")]),t._v(" を利用して "),a("code",[t._v("/_api/plugin/bar/author")]),t._v(" への HTTP GET リクエストが行われます。(実際の通信内容も確認するとよいでしょう)")]),t._v(" "),a("p",[t._v("URL から分かるように、この route は Bar コンポーネント専用に新たに作成されたものであり、GROWI 本体で予め用意されているものではありません。route の登録については "),a("RouterLink",{attrs:{to:"/ja/dev/plugin/custom-route.html"}},[t._v("カスタム route")]),t._v(" ページ および、この後の "),a("a",{attrs:{href:"#%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%B5%E3%82%A4%E3%83%89%E3%81%AE%E5%8B%95%E4%BD%9C"}},[t._v("サーバーサイドの動作")]),t._v(" セクションをご覧ください。")],1),t._v(" "),a("p",[t._v("通信に成功すると、結果オブジェクトから取り出された "),a("code",[t._v("res.data.author.username")]),t._v(" がステートにセットされ、ローディングスピナーの代わりに表示されるようになります。")]),t._v(" "),a("h4",{attrs:{id:"ステートキャッシュの作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ステートキャッシュの作成","aria-hidden":"true"}},[t._v("#")]),t._v(" ステートキャッシュの作成")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("src/client/js/util/TagCacheManagerFactory.js")])]),t._v(" "),a("li",[a("code",[t._v("TagCacheManager")]),t._v(" を利用するにあたり、2つのキーを渡しています\n"),a("ul",[a("li",[t._v("第一引数に、プラグイン独自の識別子")]),t._v(" "),a("li",[t._v("第二引数に、カスタムタグ利用時の識別子生成器\n"),a("ul",[a("li",[a("code",[t._v("$foo")]),t._v(" タグまたは "),a("code",[t._v("$bar")]),t._v(" タグのメソッドおよびオプション値を繋げ、描画時の同一性を定義しています")])])])])])]),t._v(" "),a("h4",{attrs:{id:"スタイル-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#スタイル-css","aria-hidden":"true"}},[t._v("#")]),t._v(" スタイル(CSS)")]),t._v(" "),a("p",[t._v("Bar コンポーネントのローディング時、スピナーが明滅していることに気付きます。これは "),a("code",[t._v("src/client/css/bar.css")]),t._v(" で定義されているアニメーションで、"),a("code",[t._v("Bar.jsx")]),t._v(" 内でインポートされることで GROWI アプリケーションに適用されます。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("このように取り込まれた CSS は直接 head エレメント内に展開されるため、GROWI アプリケーション全体をスコープに適用されることに注意してください。")])]),t._v(" "),a("h2",{attrs:{id:"サーバーサイドの動作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#サーバーサイドの動作","aria-hidden":"true"}},[t._v("#")]),t._v(" サーバーサイドの動作")]),t._v(" "),a("p",[t._v("サーバーサイドの詳細を見ていきましょう。")]),t._v(" "),a("ul",[a("li",[t._v("エントリーポイントは "),a("code",[t._v("src/server-entry.js")]),t._v(" です"),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("エントリーポイントの概要については、"),a("RouterLink",{attrs:{to:"/ja/dev/plugin/architecture.html"}},[t._v("アーキテクチャ")]),t._v(" のページを確認してください")],1)])]),t._v(" "),a("li",[a("code",[t._v("src/server/routes")]),t._v(" を require しています")])]),t._v(" "),a("h3",{attrs:{id:"ルーティング"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ルーティング","aria-hidden":"true"}},[t._v("#")]),t._v(" ルーティング")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("src/server/routes")]),t._v(" 下の "),a("code",[t._v("index.js")]),t._v(" および "),a("code",[t._v("bar.js")]),t._v(" で、Express の新たな route "),a("code",[t._v("/_api/plugin/bar/author")]),t._v(" を定義しています")]),t._v(" "),a("li",[t._v("アクションに相当する middleware では以下のような処理を行っています\n"),a("ol",[a("li",[t._v("簡単な "),a("code",[t._v("req.query")]),t._v(" の値チェック")]),t._v(" "),a("li",[a("code",[t._v("Page")]),t._v(" モデルを利用して該当するページデータを取得")]),t._v(" "),a("li",[t._v("作成者の population")]),t._v(" "),a("li",[t._v("作成者のデータをレスポンス body に入れて HTTP Status 200 で送出")])])])]),t._v(" "),a("h2",{attrs:{id:"カスタマイズガイド"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#カスタマイズガイド","aria-hidden":"true"}},[t._v("#")]),t._v(" カスタマイズガイド")]),t._v(" "),a("p",[t._v("以上で growi-plugin-boilerplate の探検は終了です。紹介したコードは多かったかもしれませんが、カスタムタグの実現というスコープでは、独自にロジックの実装が必要なクラスは多くありません。")]),t._v(" "),a("p",[t._v("以下にカスタマイズする際のポイントを列挙します。上から順に少しずつ改変して実装することで、比較的簡単にオリジナルのカスタムタグを実装することが可能です。")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ja/dev/plugin/metadata.html"}},[t._v("メタデータ")]),t._v("に関しては特に編集する必要はない")],1),t._v(" "),a("li",[a("code",[t._v("BasicInterceptor")]),t._v(" 拡張に関しては、ほとんどの部分を流用できる\n"),a("ul",[a("li",[t._v("PreRenderInterceptor は、実装したいタグのパターンの差し替えのみ")]),t._v(" "),a("li",[t._v("PostRenderInterceptor は、実装したいタグの数に応じてコンテキストクラスの初期化コードと、それに対応する React Component レンダリングコードを追加する")])])]),t._v(" "),a("li",[t._v("コンテキストクラスと React Component は、カスタムタグのモデルとビューに相当する\n"),a("ul",[a("li",[t._v("オプション値の parse のロジックをコンテキストクラスのメソッドとして実装")]),t._v(" "),a("li",[t._v("オプション値によって変更するアウトプットを React Component に実装")])])]),t._v(" "),a("li",[t._v("パフォーマンス対策として、"),a("code",[t._v("TagCacheManagerFactory")]),t._v(" を実装\n"),a("ul",[a("li",[t._v("各 React Component の 正常系/異常系 それぞれで、出力結果を左右するステートオブジェクトをキャッシュするように "),a("code",[t._v("tagCacheManager.cacheState()")]),t._v(" を呼び出し")])])]),t._v(" "),a("li",[t._v("サーバーからデータを取得したい場合は REST API リクエストを行う\n"),a("ul",[a("li",[t._v("プラグイン独自のデータ取得を行いたい場合は、新たにサーバーサイドに route を定義できる")])])])])])},[],!1,null,null,null);e.default=o.exports}}]);