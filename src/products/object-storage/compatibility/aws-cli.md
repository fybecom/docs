# aws cli

Amazon's free tool, the [aws cli](https://aws.amazon.com/cli/), also supports S3 compatible Object Storage and manages most aspects of the S3 API. It is compatible with Windows, MacOS and Linux. To purchase, manage, or cancel Fybe's S3 Object Storage, please refer to the [fybe CLI](https://github.com/fybecom/fybe) or [Fybe API](https://dev.fybe.com/). Follow the installation instructions provided on the [aws cli website](https://aws.amazon.com/cli/).

## Configuration for Fybe's S3 compatible Object Storage

For `access_key`, `secret_key` and the S3 URL please check [here](/products/object-storage/#s3-connection-urls).

* `access_key` = c4e1a8315dc60dc96f7d757d2bab6f5a
* `secret_key` = 19d984d90dfb7ff63d751fe8b0a200a7
* S3 URL = https://us-central-1.fybeobjects.com

### aws cli config

```conf
[us-central-1]
aws_access_key_id=c4e1a8315dc60dc96f7d757d2bab6f5a
aws_secret_access_key=19d984d90dfb7ff63d751fe8b0a200a7
region=default
```

## Sample Usage

```bash
# List buckets
aws --profile us-central-1 --endpoint-url https://us-central-1.fybeobjects.com s3 ls
# Invoke S3 API
aws --profile us-central-1 --endpoint-url https://us-central-1.fybeobjects.com s3api get-bucket-policy --bucket myBucket
```
