(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{288:function(t,e,a){"use strict";a.r(e);var o=a(14),i=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("S3 Object Storage, introduced by Amazon AWS in 2006, is a scalable storage service that has become the industry standard for Object Storage. It offers exceptional durability and availability, and data can be accessed from anywhere with an internet connection. Access to S3 Object Storage is available through its API or a variety of tools. For more information on compatibility, please see the "),e("a",{attrs:{href:"/products/object-storage/compatibility"}},[t._v("General Compatibility")]),t._v(" page.")]),t._v(" "),e("p",[t._v("The S3 compatible Object Storage storage offers the following essential characteristics:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Buckets")]),t._v(': Buckets are used to store data, and within each bucket, objects such as files and "folders" can be stored.')]),t._v(" "),e("li",[e("strong",[t._v("Scalability")]),t._v(": There are almost no restrictions on storage capacity, with the ability to store individual objects as large as 5TB.")]),t._v(" "),e("li",[e("strong",[t._v("Sharing")]),t._v(": You can either share objects with specific individuals or make them available to the public through the internet.")]),t._v(" "),e("li",[e("strong",[t._v("Metadata-Support")]),t._v(": An individual key is assigned to every object, and metadata can be utilized to enhance organizational management.")]),t._v(" "),e("li",[e("strong",[t._v("S3 compatible API")]),t._v(": It provides support for S3 compatible APIs, enabling you to use a vast array of pre-existing tools "),e("a",{attrs:{href:"/products/object-storage/compatibility"}},[t._v("General Compatibility")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"s3-compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#s3-compatibility"}},[t._v("#")]),t._v(" S3 Compatibility")]),t._v(" "),e("p",[t._v("Fybe Object Storage utilizes "),e("a",{attrs:{href:"https://ceph.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ceph"),e("OutboundLink")],1),t._v(" technology and does not offer complete compatibility with AWS S3 API, as certain features such as logging are not supported. However, for the majority of use cases, users are unlikely to experience any significant discrepancies.")]),t._v(" "),e("h2",{attrs:{id:"s3-connection-urls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#s3-connection-urls"}},[t._v("#")]),t._v(" S3 Connection URLs")]),t._v(" "),e("p",[t._v("To utilize S3 compatible Object Storage tools or APIs, the following details are required, which are provided in this overview:")]),t._v(" "),e("table",[e("tr",[e("th",[t._v("Region")]),t._v(" "),e("th",[t._v("S3 URL")]),t._v(" "),e("th",[t._v("Credentials")])]),t._v(" "),e("tr",[e("td",[t._v("United States")]),t._v(" "),e("td",[t._v("https://us-central-1.fybeobjects.com")]),t._v(" "),e("td",[t._v("Consists of an access key and secret key. Available from "),e("a",{attrs:{href:"https://cockpit.fybe.com/account/security",target:"fybe-cockpit"}},[t._v("Fybe Cockpit")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[t._v("European Union")]),t._v(" "),e("td",[t._v("https://eu-central-1.fybeobjects.com")]),t._v(" "),e("td",[t._v("Consists of an access key and secret key. Available from "),e("a",{attrs:{href:"https://cockpit.fybe.com/account/security",target:"fybe-cockpit"}},[t._v("Fybe Cockpit")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[t._v("Asia Pacifc")]),t._v(" "),e("td",[t._v("https://ap-southeast-1.fybeobjects.com")]),t._v(" "),e("td",[t._v("Consists of an access key and secret key. Available from "),e("a",{attrs:{href:"https://cockpit.fybe.com/account/security",target:"fybe-cockpit"}},[t._v("Fybe Cockpit")]),t._v(".")])])]),t._v(" "),e("h2",{attrs:{id:"supported-protocols"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-protocols"}},[t._v("#")]),t._v(" Supported Protocols")]),t._v(" "),e("p",[t._v("The protocol used by S3 compatible Object Storage, which specifies the format and sequence of data exchange, was popularized by Amazon AWS in 2006 with their AWS S3 Object Storage.")]),t._v(" "),e("p",[t._v("For this reason following protocols are "),e("strong",[t._v("not")]),t._v(" supported by the Object Storage:")]),t._v(" "),e("ul",[e("li",[t._v("FTP / FTPS")]),t._v(" "),e("li",[t._v("SFTP / SCP")]),t._v(" "),e("li",[t._v("NFS / CIFS / SAMBA")]),t._v(" "),e("li",[t._v("Real-Time Streaming Protocol (RTSP)")])]),t._v(" "),e("p",[t._v("As S3 compatible Object Storage has gained popularity, numerous tools have emerged to support it. For a comprehensive list, please consult the "),e("a",{attrs:{href:"/products/object-storage/compatibility"}},[t._v("General Compatibility")]),t._v(" page.")]),t._v(" "),e("h2",{attrs:{id:"technical-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#technical-description"}},[t._v("#")]),t._v(" Technical Description")]),t._v(" "),e("p",[t._v("Fybe is using "),e("a",{attrs:{href:"https://ceph.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ceph"),e("OutboundLink")],1),t._v(" to provide Object Storage. Upon S3 specification, Ceph usage and measures to allow a smooth performance, a list of characteristics:")]),t._v(" "),e("ul",[e("li",[t._v("due to incompatibility, Virtual Hosted Buckets are not supported and instead, path-based buckets are being employed. So please use e.g. "),e("code",[t._v("us-central-1.fybeobjects.com/mybucket")]),t._v(" instead of "),e("code",[t._v("mybucket.us-central-1.fybeobjects.com")])]),t._v(" "),e("li",[t._v("server-side encryption is not yet available")]),t._v(" "),e("li",[t._v("transport encrypted via TLS")]),t._v(" "),e("li",[t._v("because of S3 specifications max. object / file size is 5 TB")]),t._v(" "),e("li",[t._v("number of objects is by default restricted to 5 millions per customer")]),t._v(" "),e("li",[t._v("default limit for S3 API requests is 500 requests per second")]),t._v(" "),e("li",[t._v("each piece of data is replicated three times for added redundancy in storage")]),t._v(" "),e("li",[t._v("no further backup is executed.")]),t._v(" "),e("li",[t._v("bandwidth is restricted and frequently modified, with a standard limit of 50 MByte/s (=400 Mbit/s). It is important to note that the actual bandwidth is subject to various factors, such as individual internet connection speed and the current load on the Object Storage system.")]),t._v(" "),e("li",[t._v("maximum number of buckets per customer is set to 150 by default")])])])}),[],!1,null,null,null);e.default=i.exports}}]);