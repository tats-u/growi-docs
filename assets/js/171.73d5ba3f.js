(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{776:function(e,t,a){"use strict";a.r(t);var s=a(48),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"growi-v3-6-x-へのアップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi-v3-6-x-へのアップグレード","aria-hidden":"true"}},[e._v("#")]),e._v(" GROWI v3.6.x へのアップグレード")]),e._v(" "),a("p",[e._v("v3.6 では、Node.js v8 はサポートされなくなりました。")]),e._v(" "),a("p",[e._v("また v3.5 より下位のバージョンには、誤って2つのデータベースが作成されてしまうバグ("),a("a",{attrs:{href:"https://github.com/weseek/growi/issues/1361",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/growi#1361"),a("OutboundLink")],1),e._v(")が存在します。")]),e._v(" "),a("h2",{attrs:{id:"node-js-v8-のサポートを終了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-v8-のサポートを終了","aria-hidden":"true"}},[e._v("#")]),e._v(" Node.js v8 のサポートを終了")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/r/weseek/growi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("公式の Docker イメージ"),a("OutboundLink")],1),e._v("を利用しているシステムには影響はありません")])]),e._v(" "),a("h3",{attrs:{id:"node-js-のアップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-のアップグレード","aria-hidden":"true"}},[e._v("#")]),e._v(" Node.js のアップグレード")]),e._v(" "),a("ol",[a("li",[e._v("v10 または v12 にアップグレードしてください")])]),e._v(" "),a("h2",{attrs:{id:"weseek-growi-1361-の回避"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weseek-growi-1361-の回避","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/weseek/growi/issues/1361",target:"_blank",rel:"noopener noreferrer"}},[e._v("weseek/growi#1361"),a("OutboundLink")],1),e._v(" の回避")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("この問題は、"),a("code",[e._v("MONGO_URI")]),e._v(" が、"),a("code",[e._v("?key=value")]),e._v(" 形式のパラメータを含む URL で運用していた場合に限り影響があります")])]),e._v(" "),a("h3",{attrs:{id:"とにかくアップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#とにかくアップグレード","aria-hidden":"true"}},[e._v("#")]),e._v(" とにかくアップグレード")]),e._v(" "),a("ul",[a("li",[e._v("通常通りアップグレードしてください")]),e._v(" "),a("li",[e._v("影響\n"),a("ul",[a("li",[e._v("これまでの累積 migration が再度実行されます")]),e._v(" "),a("li",[e._v("設計上は問題ないはずですが、不整合があるデータが書き換わる可能性があります")])])])]),e._v(" "),a("h3",{attrs:{id:"安全なアップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全なアップグレード","aria-hidden":"true"}},[e._v("#")]),e._v(" 安全なアップグレード")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("migrations")]),e._v(" コレクションを移植します。\n"),a("code",[e._v("mongodump")]),e._v(", "),a("code",[e._v("mongorestore")]),e._v(" を使える環境で以下を実行してください。\n"),a("code",[e._v("{dbname}")]),e._v(", "),a("code",[e._v("{dbname?key=value}")]),e._v(" は、実際の環境のDB名に置き換えてください。"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("mongodump -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("dbname?key"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" -c migrations -o backup\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("mongorestore -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("dbname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" -c migrations "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./backup/{dbname?key=value}/migrations.bson"')]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("不要な DB を drop します。mongo shell 内で以下を実行してください。\n"),a("code",[e._v("{dbname?key=value}")]),e._v(" は、実際の環境のDB名に置き換えてください。"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("use {dbname?key=value}\ndb.dropDatabase()\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"アップグレード前にチェックすべきこと"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アップグレード前にチェックすべきこと","aria-hidden":"true"}},[e._v("#")]),e._v(" アップグレード前にチェックすべきこと")]),e._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" 運用中のシステムにセットしている "),a("code",[e._v("MONGO_URI")]),e._v(" が、"),a("code",[e._v("?key=value")]),e._v(" 形式のパラメータを含むか")]),e._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),e._v(" 運用中のシステムが接続している MongoDB に、"),a("code",[e._v("?key=value")]),e._v(" 形式のパラメータを名前に含むデータベースが存在するか")])])])},[],!1,null,null,null);t.default=r.exports}}]);