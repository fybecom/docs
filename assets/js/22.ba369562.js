(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{295:function(e,s,t){"use strict";t.r(s);var o=t(14),a=Object(o.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"s3cmd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s3cmd"}},[e._v("#")]),e._v(" s3cmd")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://s3tools.org/s3cmd",target:"_blank",rel:"noopener noreferrer"}},[e._v("s3cmd"),s("OutboundLink")],1),e._v(" is a tool to manage buckets and files an to invoke the S3 API. You can achieve similar action with "),s("a",{attrs:{href:"/products/object-storage/compatibility/aws-cli"}},[e._v("aws cli")]),e._v(". "),s("code",[e._v("s3cmd")]),e._v(" runs on Linux and Mac.")]),e._v(" "),s("p",[e._v("Please follow the installation instruction like described on "),s("a",{attrs:{href:"https://s3tools.org/s3cmd",target:"_blank",rel:"noopener noreferrer"}},[e._v("s3cmd"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("For "),s("code",[e._v("access_key")]),e._v(", "),s("code",[e._v("secret_key")]),e._v(" and the S3 URL please check "),s("RouterLink",{attrs:{to:"/products/object-storage/#s3-connection-urls"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("ul",[s("li",[s("code",[e._v("access_key")]),e._v(" = c4e1a8315dc60dc96f7d757d2bab6f5a")]),e._v(" "),s("li",[s("code",[e._v("secret_key")]),e._v(" = 19d984d90dfb7ff63d751fe8b0a200a7")]),e._v(" "),s("li",[e._v("S3 URL = https://us-central-1.fybeobjects.com")])]),e._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),s("p",[e._v("Please follow the steps in order to use Fybe's Object Storage:")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("s3cmd --configure")])]),e._v(" "),s("li",[e._v("Specify "),s("code",[e._v("c4e1a8315dc60dc96f7d757d2bab6f5a")]),e._v(" as "),s("code",[e._v("Access Key")])]),e._v(" "),s("li",[e._v("Specify "),s("code",[e._v("19d984d90dfb7ff63d751fe8b0a200a7")]),e._v(" as "),s("code",[e._v("Secret Key")])]),e._v(" "),s("li",[e._v("Press return for "),s("code",[e._v("Default Region")])]),e._v(" "),s("li",[e._v("Specify "),s("code",[e._v("us-central-1.fybeobjects.com")]),e._v(" for "),s("code",[e._v("S3 Endpoint")])]),e._v(" "),s("li",[e._v("Specify "),s("code",[e._v("us-central-1.fybeobjects.com")]),e._v(" for "),s("code",[e._v("DNS-style bucket+hostname:port template for accessing a bucket")])]),e._v(" "),s("li",[e._v("Specify as password of your choice for "),s("code",[e._v("Encryption password")])]),e._v(" "),s("li",[e._v("Press return for "),s("code",[e._v("Path to GPG program")])]),e._v(" "),s("li",[e._v("Press return for "),s("code",[e._v("Use HTTPS protocol")])]),e._v(" "),s("li",[e._v("Press return for "),s("code",[e._v("HTTP Proxy server name")])]),e._v(" "),s("li",[e._v("Confirm by specifying "),s("code",[e._v("y")])]),e._v(" "),s("li",[e._v("Confirm again by specifying "),s("code",[e._v("y")])])]),e._v(" "),s("h2",{attrs:{id:"sample-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-usage"}},[e._v("#")]),e._v(" Sample Usage")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Lists your buckets")]),e._v("\ns3cmd s3 "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delete Bucket CORS of bucket named myBucket")]),e._v("\ns3cmd delcors s3://myBucket\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);