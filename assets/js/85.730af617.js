(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{656:function(e,t,a){"use strict";a.r(t);var s=a(48),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos","aria-hidden":"true"}},[e._v("#")]),e._v(" CentOS")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),a("li",[a("a",{attrs:{href:"#installation-for-node-js-8-x-npm"}},[e._v("Installation for node.js 8.x & npm")])]),a("li",[a("a",{attrs:{href:"#elasticsearch"}},[e._v("Elasticsearch")])]),a("li",[a("a",{attrs:{href:"#mongodb"}},[e._v("MongoDB")])]),a("li",[a("a",{attrs:{href:"#growi"}},[e._v("GROWI")])]),a("li",[a("a",{attrs:{href:"#reverse-proxy-settings"}},[e._v("Reverse Proxy Settings")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This chapter introduces the installation process for GROWI on CentOS 7. Installation on CentOS 6 has not been verified.")]),e._v(" "),a("p",[e._v("Software needed for Setup are listed below.")]),e._v(" "),a("ul",[a("li",[e._v("node.js 8.x (DO NOT USE 9.x)")]),e._v(" "),a("li",[e._v("npm 6.x")]),e._v(" "),a("li",[e._v("yarn")]),e._v(" "),a("li",[e._v("MongoDB 3.x")]),e._v(" "),a("li",[e._v("(Optional) Elasticsearch 5.x")]),e._v(" "),a("li",[e._v("(Optional) systemd")]),e._v(" "),a("li",[e._v("(Optional) Apache or nginx")])]),e._v(" "),a("p",[e._v("Software listed as 'Optional' are not required, but in this document all are used, from construction of an environment using Apache or nginx as a reverse proxy for the full-text search feasible Growi, to simultaneously launching the host OS using systemd.")]),e._v(" "),a("h2",{attrs:{id:"installation-for-node-js-8-x-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-for-node-js-8-x-npm","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation for node.js 8.x & npm")]),e._v(" "),a("h3",{attrs:{id:"use-the-nodesource-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-the-nodesource-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" Use the NodeSource repository")]),e._v(" "),a("p",[e._v("Download the Node.js installation script from "),a("a",{attrs:{href:"https://rpm.nodesource.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://rpm.nodesource.com/"),a("OutboundLink")],1),e._v(". The working directory is the home directory.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~\n$ curl -sL https://rpm.nodesource.com/setup_8.x -o nodesource_setup.sh\n")])])]),a("p",[e._v("Run the retrieved script.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo bash nodesource_setup.sh\n")])])]),a("p",[e._v("Now that node.js can be retrieved via "),a("code",[e._v("yum")]),e._v(", use the "),a("code",[e._v("yum")]),e._v(" command to install.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo yum install -y nodejs\n")])])]),a("p",[e._v("Since GROWI uses yarn for package installation, install the "),a("code",[e._v("yarn")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo\n$ sudo yum install -y yarn\n")])])]),a("p",[e._v("Once installation for Node.js, npm, yarn is completed, check the installed versions.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ node -v\nv8.15.1\n$ npm -v\n6.4.1\n$ yarn -v\n1.15.2\n")])])]),a("h2",{attrs:{id:"elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch","aria-hidden":"true"}},[e._v("#")]),e._v(" Elasticsearch")]),e._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Follow the "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official Website"),a("OutboundLink")],1),e._v(" to proceed installation. Here we make a few changes to install Elasticsearch 5.x")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This document is outdated. GROWI currently supports the most recent version of Elasticsearch 6.x (updated 05/2019)")])]),e._v(" "),a("p",[e._v("First, install JDK8 to make Elasticsearch runnable.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo yum install java-1.8.0-openjdk\n")])])]),a("p",[e._v("To install the package, import the Elasticsearch repository's GPG key.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch\n")])])]),a("p",[e._v("Add the Elasticsearch repository. Insert the following into "),a("code",[e._v("/etc/yum.repos.d/elasticsearch.repo")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[elasticsearch-5.x]\nname=Elasticsearch repository for 5.x packages\nbaseurl=https://artifacts.elastic.co/packages/5.x/yum\ngpgcheck=1\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\nenabled=1\nautorefresh=1\ntype=rpm-md\n")])])]),a("p",[e._v("Now Elasticsearch can be installed via yum. Install.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo yum install -y elasticsearch\n")])])]),a("p",[e._v("Once the installation is complete, specifiy the memory allocation pool size for Elasticsearch. If the usage is for individual use, 256MB should be enough for memory allocation. Make changes based on the scale of the team and the amount of pages.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo vim /etc/elasticsearch/jvm.options\n# Before edit\n-Xms2g\n-Xmx2g\n\n# After edit\n-Xms256m\n-Xmx256m\n")])])]),a("p",[e._v("Once installation is completed, check the package version.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ yum list installed | grep elasticsearch\nelasticsearch.noarch                 5.6.16-1                        @elasticsearch-5.x\n")])])]),a("p",[e._v("Using the "),a("code",[e._v("systemctl")]),e._v(" command, launch Elasticsearch.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl start elasticsearch\n")])])]),a("p",[e._v("Enable the autoboot setting of elasticsearch")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl enable elasticsearch\n")])])]),a("p",[e._v("Check the status to verify it is running properly.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl status elasticsearch\n")])])]),a("h3",{attrs:{id:"installation-for-elasticsearch-plugins-needed-for-growi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-for-elasticsearch-plugins-needed-for-growi","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation for Elasticsearch plugins needed for GROWI")]),e._v(" "),a("p",[e._v("We will install the Elasticsearch plugins shown below")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Japanese (kuromoji) Analysis plugin"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICU Analysis Plugin"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("First, search for the command used to install Elasticsearch plugins")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ rpm -ql elasticsearch | grep bin | grep plugin\n/usr/share/elasticsearch/bin/elasticsearch-plugin\n")])])]),a("p",[e._v("Using the command above, install both the analysis-kuromoji plugin and the analysis-icu plugin")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Installation for analysis-kuromoji\n$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-kuromoji\n\n# Installation for analysis-icu plugin\n$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-icu\n")])])]),a("h2",{attrs:{id:"mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb","aria-hidden":"true"}},[e._v("#")]),e._v(" MongoDB")]),e._v(" "),a("h3",{attrs:{id:"installation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Follow the "),a("a",{attrs:{href:"https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-red-hat/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official Website"),a("OutboundLink")],1),e._v(" to proceed installation. In this section MongoDB 3.6 is used.")]),e._v(" "),a("p",[e._v("Add the repository. Create and insert the following into "),a("code",[e._v("/etc/yum.repos.d/mongodb-org-3.6.repo")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[mongodb-org-3.6]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.6/x86_64/\ngpgcheck=1\nenabled=1\ngpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc\n")])])]),a("p",[e._v("Now MongoDB can be installed via yum. Install.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo yum install -y mongodb-org\n")])])]),a("p",[e._v("Once installation is complete, check the package version.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ yum list installed | grep mongodb\nmongodb-org.x86_64                   3.6.11-1.el7               @mongodb-org-3.6\nmongodb-org-mongos.x86_64            3.6.11-1.el7               @mongodb-org-3.6\nmongodb-org-server.x86_64            3.6.11-1.el7               @mongodb-org-3.6\nmongodb-org-shell.x86_64             3.6.11-1.el7               @mongodb-org-3.6\nmongodb-org-tools.x86_64             3.6.11-1.el7               @mongodb-org-3.6\n")])])]),a("p",[e._v("Using the "),a("code",[e._v("systemctl")]),e._v(" command, launch MongoDB.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl start mongod\n")])])]),a("p",[e._v("Enable the autoboot setting of MongoDB.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl enable mongod\n")])])]),a("p",[e._v("Check the status to verify it is running properly.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl status mongod\n")])])]),a("h2",{attrs:{id:"growi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi","aria-hidden":"true"}},[e._v("#")]),e._v(" GROWI")]),e._v(" "),a("h3",{attrs:{id:"installation-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Download the source code from "),a("a",{attrs:{href:"https://github.com/weseek/growi",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/weseek/growi"),a("OutboundLink")],1),e._v(", and check the latest stable version at "),a("a",{attrs:{href:"https://github.com/weseek/growi/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/weseek/growi/releases"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The installation procedure shown below will be carried out under "),a("code",[e._v("/opt/growi")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo mkdir -p /opt/\n$ cd /opt/\n$ sudo git clone https://github.com/weseek/growi /opt/growi\n$ cd /opt/growi\n\n# Check the tags\n$ sudo git tag -l\n...\nv3.3.7\nv3.3.8\nv3.3.9\nv3.4.0\nv3.4.1\nv3.4.2\n...\n\n# Use the latest version that doesn't have RC\n$ sudo git checkout -b v3.4.2 refs/tags/v3.4.2\n")])])]),a("p",[e._v("After cloning the source code, use the "),a("code",[e._v("yarn")]),e._v(" command to install packages needed for GROWI.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd /opt/growi\n$ sudo yarn\n")])])]),a("h3",{attrs:{id:"check-startup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-startup","aria-hidden":"true"}},[e._v("#")]),e._v(" Check Startup")]),e._v(" "),a("p",[e._v("Once installation for packages is completed, check the startup.")]),e._v(" "),a("p",[e._v("Here it is a requirement that MongoDB and Elasticsearch are running under the same hostname.")]),e._v(" "),a("p",[e._v("Rewrite "),a("code",[e._v("MONGO_URI")]),e._v(" and "),a("code",[e._v("ELASTICSEARCH_URI")]),e._v(" appropriate to the environment.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo \\\nMONGO_URI=mongodb://localhost:27017/growi \\\nELASTICSEARCH_URI=http://localhost:9200/growi \\\nnpm start\n\n...\n# Wait for the message below to appear\n> growi@3.1.9 server:prod /opt/growi\n> env-cmd config/env.prod.js node app.js\n")])])]),a("p",[e._v("Access "),a("code",[e._v("http://<hostname or ip address>:3000/")]),e._v(" and check whether the initial setup page appears.")]),e._v(" "),a("h3",{attrs:{id:"setting-autoboot-using-systemd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-autoboot-using-systemd","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting autoboot using systemd")]),e._v(" "),a("p",[e._v('See "'),a("RouterLink",{attrs:{to:"/en/admin-guide/admin-cookbook/launch-with-systemd.html"}},[e._v("Autostart using systemd")]),e._v('".')],1),e._v(" "),a("h2",{attrs:{id:"reverse-proxy-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Reverse Proxy Settings")]),e._v(" "),a("p",[e._v("Shown below is an example to setting up a reverse proxy to an activated GROWI.")]),e._v(" "),a("h3",{attrs:{id:"apache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[e._v("#")]),e._v(" Apache")]),e._v(" "),a("h4",{attrs:{id:"installation-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo yum install httpd\n")])])]),a("h4",{attrs:{id:"reverse-proxy-settings-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy-settings-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Reverse Proxy Settings Example")]),e._v(" "),a("p",[e._v("Shown below is a part related to reverse proxy")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<IfModule mod_ssl.c>\n  <VirtualHost _default_:443>\n    ...\n    ###\n    # reverse proxy to crowi\n    # To add Host: example.com to the Header\n    ProxyPreserveHost On\n    # Using HTTPS: To add x-forwarded-proto: https to the Header\n    RequestHeader set x-forwarded-proto 'https'\n    # With Apache, sometimes a 304 isn't returned from static assets, so unset ETag\n    <ifModule mod_headers.c>\n            Header unset ETag\n    </ifModule>\n    FileETag None\n\n    # Rewrite the path of socket.io\n    RewriteEngine On\n    RewriteCond %{REQUEST_URI}  ^/socket.io            [NC]\n    RewriteCond %{QUERY_STRING} transport=websocket    [NC]\n    RewriteRule /(.*) ws://localhost:3000/$1 [P,L]\n\n    ProxyPass / http://localhost:3000/\n    ProxyPassReverse / http://localhost:3000/\n    ...\n  </VirtualHost>\n</IfModule>\n")])])]),a("h4",{attrs:{id:"autoboot-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autoboot-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Autoboot Settings")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl enable httpd\n")])])]),a("h3",{attrs:{id:"nginx-installation-and-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-installation-and-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Nginx Installation and Settings")]),e._v(" "),a("h4",{attrs:{id:"installation-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Add the nginx repository. Insert the following into "),a("code",[e._v("/etc/yum.repos.d/nginx.repo")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/$releasever/$basearch/\ngpgcheck=0\nenabled=1\n")])])]),a("p",[e._v("Now nginx can be installed via yum. Install.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo yum install -y nginx\n")])])]),a("h4",{attrs:{id:"reverse-proxy-settings-example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy-settings-example-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Reverse Proxy Settings Example")]),e._v(" "),a("p",[e._v("Create a file "),a("code",[e._v("/etc/nginx/conf.d/growi.conf")]),e._v(" to insert settings.\nShown here is an example using HTTPS. Sections surrounded by <server> or <> should be set accordingly to the appropriate environment.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("upstream growi {\n    server localhost:3000;\n}\n\nmap $http_upgrade $connection_upgrade {\n    default Upgrade;\n    ''      close;\n}\n\nserver {\n    listen 443 ssl spdy;\n    server_name <server>;\n    ssl_certificate <cert_file>;\n    ssl_certificate_key <key_file>;\n\n    location / {\n        proxy_set_header Host $host;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header X-Forwarded-Port $server_port;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_pass http://growi;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n        proxy_read_timeout 900s;\n    }\n}\n\nserver {\n    listen 80;\n    server_name <server>;\n    return 301 https://$server_name$request_uri;\n}\n")])])]),a("h4",{attrs:{id:"autoboot-settings-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autoboot-settings-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Autoboot Settings")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl enable nginx\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);