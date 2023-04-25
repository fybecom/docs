# Goofys

Another tool for Linux and macOS that allows for S3 file system access is [Goofys](https://github.com/kahing/goofys). To install it, please refer to the instructions provided on the Installation page of the project's GitHub repository: <https://github.com/kahing/goofys#installation>.

## Configuration

For `access_key`, `secret_key` and the S3 URL please check [here](/products/object-storage/#s3-connection-urls).

[Goofys](https://github.com/kahing/goofys) is using the [aws-cli](/docs/products/Object-Storage/Tools/aws-cli) configuration stored e.g. in `~/.aws/credentials`:

```conf
[default]
aws_access_key_id=c4e1a8315dc60dc96f7d757d2bab6f5a
aws_secret_access_key=19d984d90dfb7ff63d751fe8b0a200a7
region=default
```

## Example

```bash
# mounting it once (not available after reboot)
mkdir ${HOME}/s3-bucket
# mount myBucket to ${HOME}/s3-bucket
goofys --endpoint="https://us-central-1.fybeobjects.com" myBucket ${HOME}/s3-bucket
# list contents of myBucket locally
ls -la  ${HOME}/s3-bucket
```

```sh
# mounting via fstab in order to make local mount point available after reboot
# ... credentials must be in /root/.aws/credentials
sudo mkdir /mnt/s3-bucket
echo 'goofys#myBucket /mnt/s3-bucket fuse _netdev,allow_other,--file-mode=0666,--dir-mode=0777,--endpoint=us-central-1.fybeobjects.com 0 0' >> /etc/fstab
mount -a
# list contents of myBucket locally
ls -la  /mnt/s3-bucket
```
