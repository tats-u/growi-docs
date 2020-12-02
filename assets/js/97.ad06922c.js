(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{673:function(a,t,e){"use strict";e.r(t);var r=e(48),o=Object(r.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"migrate-from-bakudankun-crowi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrate-from-bakudankun-crowi","aria-hidden":"true"}},[a._v("#")]),a._v(" Migrate from bakudankun/crowi")]),a._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[a._v("#")]),a._v(" Overview")]),a._v(" "),e("ul",[e("li",[a._v("Assuming to migrate from [Crowi docker image + "),e("a",{attrs:{href:"https://github.com/crowi/docker-crowi",target:"_blank",rel:"noopener noreferrer"}},[a._v("bakudankun/crowi"),e("OutboundLink")],1),a._v("] to "),e("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[a._v("weseek/growi-docker-compose"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("li",[a._v("Migrate the following data.\n"),e("ul",[e("li",[a._v("MongoDB container's data volume")]),a._v(" "),e("li",[a._v("Uploaded file data from the App container")])])])]),a._v(" "),e("h2",{attrs:{id:"preparation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparation","aria-hidden":"true"}},[a._v("#")]),a._v(" Preparation")]),a._v(" "),e("ol",[e("li",[a._v("Have Crowi and GROWI contaienr running.\n"),e("ul",[e("li",[e("p",[a._v("Hypothetically, each app container and data volume is called as below (change the name according to your environment).")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th"),a._v(" "),e("th",[a._v("Crowi")]),a._v(" "),e("th",[a._v("GROWI")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("App Container")]),a._v(" "),e("td",[a._v("crowi_crowi_1")]),a._v(" "),e("td",[a._v("growi_app_1")])]),a._v(" "),e("tr",[e("td",[a._v("App Container Data Volume")]),a._v(" "),e("td",[a._v("crowi_crowi_data")]),a._v(" "),e("td",[a._v("growi_growi_data")])]),a._v(" "),e("tr",[e("td",[a._v("MongoDB Container")]),a._v(" "),e("td",[a._v("crowi_mongo_1")]),a._v(" "),e("td",[a._v("growi_mongo_1")])])])])])])])]),a._v(" "),e("h2",{attrs:{id:"extract-password-seed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extract-password-seed","aria-hidden":"true"}},[a._v("#")]),a._v(" Extract PASSWORD_SEED")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("If PASSWORD_SEED was set in "),e("a",{attrs:{href:"https://github.com/crowi/docker-crowi",target:"_blank",rel:"noopener noreferrer"}},[a._v("bakudankun/crowi"),e("OutboundLink")],1),a._v(" environment variables, extract and reuse the seed in GROWI.")])]),a._v(" "),e("li",[e("p",[a._v("If not, extract and reuse the auto-generated seed in the data volume.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TBD"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"migrate-db"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrate-db","aria-hidden":"true"}},[a._v("#")]),a._v(" Migrate DB")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Backup DB data from Crowi with mongodump.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -it --rm --link crowi_mongo_1 --network crowi_default --volume "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(":/backup mongo "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\nmongodump --host crowi_mongo_1 --db crowi --out /backup\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Restore the backup to GROWI.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -it --rm --link growi_mongo_1 --network growi_default  --volume "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(":/backup mongo "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\nmongorestore -v --host growi_mongo_1 --db growi backup/crowi\n")])])]),e("p",[a._v("[TBC] Unique Constraint might fail.")])]),a._v(" "),e("li",[e("p",[a._v("Set "),e("code",[a._v("PASSWORD_SEED")])]),a._v(" "),e("ul",[e("li",[a._v("In "),e("code",[a._v("docker-compose.yml")]),a._v(", set "),e("code",[a._v("PASSWORD_SEED")]),a._v(" to the extracted "),e("code",[a._v("PASSWORD_SEED")]),a._v(".")])])]),a._v(" "),e("li",[e("p",[a._v("Restart GROWI.")])])]),a._v(" "),e("h2",{attrs:{id:"migrate-uploaded-file-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrate-uploaded-file-data","aria-hidden":"true"}},[a._v("#")]),a._v(" Migrate Uploaded File Data")]),a._v(" "),e("p",[e("strong",[a._v("If files are to be uploaded to AWS S3, skipped the following steps.")])]),a._v(" "),e("ul",[e("li",[a._v("By default, "),e("a",{attrs:{href:"https://github.com/crowi/docker-crowi",target:"_blank",rel:"noopener noreferrer"}},[a._v("bakudankun/crowi"),e("OutboundLink")],1),a._v(" saves uploaded files to local file system("),e("code",[a._v("FILE_UPLOAD=local")]),a._v(").")]),a._v(" "),e("li",[a._v("In order to save uploaded files to local file system set "),e("code",[a._v("FILE_UPLOAD=local")]),a._v(" (in "),e("code",[a._v("docker-compose.yml")]),a._v(").")])]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Backup uploaded files from Crowi.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run --rm -v crowi_crowi_data:/data -v "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(":/backup bakudankun/crowi "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -rp /data /backup\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Restore the backup to GROWI.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run --rm -v crowiplus_crowi_data:/data -v "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(":/backup growi_app_1 "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -rp /backup/uploads /data/\n")])])])])])])},[],!1,null,null,null);t.default=o.exports}}]);