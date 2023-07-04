(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{293:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"goofys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goofys"}},[t._v("#")]),t._v(" Goofys")]),t._v(" "),s("p",[t._v("Another tool for Linux and macOS that allows for S3 file system access is "),s("a",{attrs:{href:"https://github.com/kahing/goofys",target:"_blank",rel:"noopener noreferrer"}},[t._v("Goofys"),s("OutboundLink")],1),t._v(". To install it, please refer to the instructions provided on the Installation page of the project's GitHub repository: "),s("a",{attrs:{href:"https://github.com/kahing/goofys#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kahing/goofys#installation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("For "),s("code",[t._v("access_key")]),t._v(", "),s("code",[t._v("secret_key")]),t._v(" and the S3 URL please check "),s("RouterLink",{attrs:{to:"/products/object-storage/#s3-connection-urls"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/kahing/goofys",target:"_blank",rel:"noopener noreferrer"}},[t._v("Goofys"),s("OutboundLink")],1),t._v(" is using the "),s("a",{attrs:{href:"/docs/products/Object-Storage/Tools/aws-cli"}},[t._v("aws-cli")]),t._v(" configuration stored e.g. in "),s("code",[t._v("~/.aws/credentials")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-conf extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[default]\naws_access_key_id=c4e1a8315dc60dc96f7d757d2bab6f5a\naws_secret_access_key=19d984d90dfb7ff63d751fe8b0a200a7\nregion=default\n")])])]),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mounting it once (not available after reboot)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/s3-bucket\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mount myBucket to ${HOME}/s3-bucket")]),t._v("\ngoofys "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--endpoint")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://us-central-1.fybeobjects.com"')]),t._v(" myBucket "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/s3-bucket\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# list contents of myBucket locally")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-la")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/s3-bucket\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mounting via fstab in order to make local mount point available after reboot")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... credentials must be in /root/.aws/credentials")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /mnt/s3-bucket\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'goofys#myBucket /mnt/s3-bucket fuse _netdev,allow_other,--file-mode=0666,--dir-mode=0777,--endpoint=us-central-1.fybeobjects.com 0 0'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/fstab\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# list contents of myBucket locally")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-la")]),t._v("  /mnt/s3-bucket\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);