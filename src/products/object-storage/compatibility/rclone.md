# rclone

[rclone](https://rclone.org/) is a no-cost software that enables the management of files and directories on cloud storage platforms on Windows, macOS, Linux, and FreeBSD. It supports various protocols, including S3 compatible Object Storage. To install it, please refer to the guidelines provided on the official website of [rclone](https://rclone.org/downloads/). It is advisable to use the most recent stable version available there.

## Configuration for Fybe's S3 compatible Object Storage

For `access_key`, `secret_key` and the S3 URL please check [here](/products/object-storage/#s3-connection-urls).

* `access_key = c4e1a8315dc60dc96f7d757d2bab6f5a
* `secret_key` = 19d984d90dfb7ff63d751fe8b0a200a7
* S3 URL = https://us-central-1.fybeobjects.com

### rclone config

```conf
[us-central-1]
type = s3
provider = Ceph
access_key_id = c4e1a8315dc60dc96f7d757d2bab6f5a
secret_access_key = 19d984d90dfb7ff63d751fe8b0a200a7
endpoint = https://us-central-1.fybeobjects.com/
```

### Usage

```bash
rclone sync --s3-no-head -P sourceFolder/ us-central-1:mayBucket/myFolder
```
