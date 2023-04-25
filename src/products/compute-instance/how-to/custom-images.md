# Using Custom Images

Custom Images refer to images that can be utilized for the installation of Compute Instances. These images are not supplied by [Fybe](https://fybe.com), but rather, they are uploaded by you (the customer). This feature enables yout to upload Custom Images of up to 25 GB total size.

Please be aware that Custom Images are exclusively used for installing new operating systems.

Custom Image allows you to utilize operating systems or Linux distributions that are not readily available from [Fybe](https://fybe.com). Additionally, advanced users can create their own images with unique configurations and installations, eliminating the need for a time-consuming installation process and expediting the operationalization of Compute instances.

## Supported Formats

The accepted formats are `.iso` and `.qcow2`. It is possible to compress `.qcow2` images internally, but it is **not** supported to compress them as an archive, such as `myimage.qcow2.gz`.

It is important to understand that `.iso` formats are equivalent to installation drives / disks like Blu-rays disk or bootable USB flash drives, and must be bootable and contain an operating system installer. These `.iso` images are mounted and utilized to install the operating system onto the virtaal hard disk of the Compute Instance.

`.qcow2`  images serve as a pre-installed hard disk with the operating system and other software, making them a bootable replica. As a result, the Compute Instance's virutal hard disk is replaced by a copy of these images.

The Fybe system will actually check the image format. Simply having file extensions of `.iso` or `.qcow2` will not work.

## Supported Architecture for Operating Systems

The Custom Image must use the `x86-64` (aka `amd64`) architecture and must include support for VirtIO drivers, i.e. `virtio_scsi` for the virtual hard disk and `virtio_net` for the virtual network device.

## Uploading a Custom Image

To upload a Custom Image, you need to indicate the URL from where the image will be downloaded.

Only direct links to Custom Images are supported. You can check this by yourself:

* Everything is fine if the image download commences automatically upon opening the URL in a browser.
* If you have to click on a button or link to initiate the download, such as on Google Drive, this URL cannot be used.

Once your Custom image is uploaded it can be used from any data center location.

## Microsoft Windows

It is not allowed to use custom Windows license due to Microsoft license regulations. Please use standard Windows images provided by Fybe.
