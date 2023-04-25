# General Compatibility

Fybe's S3 Object Storage has broad compatibility with Amazon's AWS S3 Object Storage. However, it does not fully support all of AWS S3's features, such as logging.

Fybe is using [Ceph](https://ceph.com/) to offer S3 functionality, which is directly supported by certain tools such as [rclone](https://rclone.org/). However, other tools may not have direct support for Ceph but typically provide support for other Object Storage providers that are S3 compatible.

## Information about connecting to Object Storage Space

* For S3 URL and credentials. Please refer to [S3 Connection Settings](/products/object-storage/#s3-connection-urls)
* specify Fybe specific S3 URLs
* path-style buckets are required
* sometimes `access_key` is called `aws_access_key_id`
* sometimes `secret_key` is called `aws_secret_access_key`
* S3 region is `default`

## Selection of Tools

* [rclone](/products/object-storage/compatibility/rclone)
* [aws cli](/products/object-storage/compatibility/aws-cli)
* [Cyberduck](/products/object-storage/compatibility/cyberduck)
* [goofys](/products/object-storage/compatibility/goofys)
* [s3cmd](/products/object-storage/compatibility/s3cmd)
* [WinSCP](/products/object-storage/compatibility/winscp)
* [fybe cli](/products/object-storage/compatibility/fybe)
