(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{285:function(e,t,a){"use strict";a.r(t);var o=a(14),s=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"using-custom-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-custom-images"}},[e._v("#")]),e._v(" Using Custom Images")]),e._v(" "),t("p",[e._v("Custom Images refer to images that can be utilized for the installation of Compute Instances. These images are not supplied by "),t("a",{attrs:{href:"https://fybe.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fybe"),t("OutboundLink")],1),e._v(", but rather, they are uploaded by you (the customer). This feature enables yout to upload Custom Images of up to 25 GB total size.")]),e._v(" "),t("p",[e._v("Please be aware that Custom Images are exclusively used for installing new operating systems.")]),e._v(" "),t("p",[e._v("Custom Image allows you to utilize operating systems or Linux distributions that are not readily available from "),t("a",{attrs:{href:"https://fybe.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fybe"),t("OutboundLink")],1),e._v(". Additionally, advanced users can create their own images with unique configurations and installations, eliminating the need for a time-consuming installation process and expediting the operationalization of Compute instances.")]),e._v(" "),t("h2",{attrs:{id:"supported-formats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-formats"}},[e._v("#")]),e._v(" Supported Formats")]),e._v(" "),t("p",[e._v("The accepted formats are "),t("code",[e._v(".iso")]),e._v(" and "),t("code",[e._v(".qcow2")]),e._v(". It is possible to compress "),t("code",[e._v(".qcow2")]),e._v(" images internally, but it is "),t("strong",[e._v("not")]),e._v(" supported to compress them as an archive, such as "),t("code",[e._v("myimage.qcow2.gz")]),e._v(".")]),e._v(" "),t("p",[e._v("It is important to understand that "),t("code",[e._v(".iso")]),e._v(" formats are equivalent to installation drives / disks like Blu-rays disk or bootable USB flash drives, and must be bootable and contain an operating system installer. These "),t("code",[e._v(".iso")]),e._v(" images are mounted and utilized to install the operating system onto the virtaal hard disk of the Compute Instance.")]),e._v(" "),t("p",[t("code",[e._v(".qcow2")]),e._v("  images serve as a pre-installed hard disk with the operating system and other software, making them a bootable replica. As a result, the Compute Instance's virutal hard disk is replaced by a copy of these images.")]),e._v(" "),t("p",[e._v("The Fybe system will actually check the image format. Simply having file extensions of "),t("code",[e._v(".iso")]),e._v(" or "),t("code",[e._v(".qcow2")]),e._v(" will not work.")]),e._v(" "),t("h2",{attrs:{id:"supported-architecture-for-operating-systems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-architecture-for-operating-systems"}},[e._v("#")]),e._v(" Supported Architecture for Operating Systems")]),e._v(" "),t("p",[e._v("The Custom Image must use the "),t("code",[e._v("x86-64")]),e._v(" (aka "),t("code",[e._v("amd64")]),e._v(") architecture and must include support for VirtIO drivers, i.e. "),t("code",[e._v("virtio_scsi")]),e._v(" for the virtual hard disk and "),t("code",[e._v("virtio_net")]),e._v(" for the virtual network device.")]),e._v(" "),t("h2",{attrs:{id:"uploading-a-custom-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uploading-a-custom-image"}},[e._v("#")]),e._v(" Uploading a Custom Image")]),e._v(" "),t("p",[e._v("To upload a Custom Image, you need to indicate the URL from where the image will be downloaded.")]),e._v(" "),t("p",[e._v("Only direct links to Custom Images are supported. You can check this by yourself:")]),e._v(" "),t("ul",[t("li",[e._v("Everything is fine if the image download commences automatically upon opening the URL in a browser.")]),e._v(" "),t("li",[e._v("If you have to click on a button or link to initiate the download, such as on Google Drive, this URL cannot be used.")])]),e._v(" "),t("p",[e._v("Once your Custom image is uploaded it can be used from any data center location.")]),e._v(" "),t("h2",{attrs:{id:"microsoft-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-windows"}},[e._v("#")]),e._v(" Microsoft Windows")]),e._v(" "),t("p",[e._v("It is not allowed to use custom Windows license due to Microsoft license regulations. Please use standard Windows images provided by Fybe.")])])}),[],!1,null,null,null);t.default=s.exports}}]);