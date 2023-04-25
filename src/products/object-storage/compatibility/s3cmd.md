# s3cmd

[s3cmd](https://s3tools.org/s3cmd) is a tool to manage buckets and files an to invoke the S3 API. You can achieve similar action with [aws cli](/products/object-storage/compatibility/aws-cli). `s3cmd` runs on Linux and Mac.

Please follow the installation instruction like described on [s3cmd](https://s3tools.org/s3cmd).

For `access_key`, `secret_key` and the S3 URL please check [here](/products/object-storage/#s3-connection-urls).

* `access_key` = c4e1a8315dc60dc96f7d757d2bab6f5a
* `secret_key` = 19d984d90dfb7ff63d751fe8b0a200a7
* S3 URL = https://us-central-1.fybeobjects.com

## Setup

Please follow the steps in order to use Fybe's Object Storage:

1. `s3cmd --configure`
2. Specify `c4e1a8315dc60dc96f7d757d2bab6f5a` as `Access Key`
3. Specify `19d984d90dfb7ff63d751fe8b0a200a7` as `Secret Key`
4. Press return for `Default Region`
5. Specify `us-central-1.fybeobjects.com` for `S3 Endpoint`
6. Specify `us-central-1.fybeobjects.com` for `DNS-style bucket+hostname:port template for accessing a bucket`
7. Specify as password of your choice for `Encryption password`
8. Press return for `Path to GPG program`
9. Press return for `Use HTTPS protocol`
10. Press return for `HTTP Proxy server name`
11. Confirm by specifying `y`
12. Confirm again by specifying `y`

## Sample Usage

```bash
# Lists your buckets
s3cmd s3 ls
# Delete Bucket CORS of bucket named myBucket
s3cmd delcors s3://myBucket
```
