# WinSCP

[WinSCP](https://winscp.net/) is a free Desktop Application for Windows which allows to manage remote files for a wide variety of protocols including S3 compatible Object Storage.

Please follow the installation instruction like described on [WinSCP](https://winscp.net/eng/download.php)

## Configuration for Fybe's S3 compatible Object Storage

For `access_key`, `secret_key` and the S3 URL please check [here](/products/object-storage/#s3-connection-urls).

* `access_key` = c4e1a8315dc60dc96f7d757d2bab6f5a
* `secret_key` = 19d984d90dfb7ff63d751fe8b0a200a7
* S3 URL = https://us-central-1.fybeobjects.com

### Steps

1. Create a new login via `Session` -> `New Session`, possibly it shown right away and should look like the following screenshot
  ![settings](/img/products/object-storage/tools/winscp/winscp-settings.png)
2. Choose `Amazon S3` as file protocol
3. Specify settings, see screenshot
   * in field `Host name` put `us-central-1.fybeobjects.com` (depending your Object Storage). NOTE: please make sure to enter without `https://`
   * in field `Access key ID` put your access_key, e.g. `c4e1a8315dc60dc96f7d757d2bab6f5a`
   * in field `Secret access Key` put your secret_key, e.g. `19d984d90dfb7ff63d751fe8b0a200a7`
4. Click on `Advanced` and choose `Advanced`. The following screen should appear ![advanced](/img/products/object-storage/tools/winscp/winscp-advanced-settings.png)
5. Choose `Path` as `URL style`
6. Click `OK`
7. Click `Save`
8. Click `Login` and you are done and have access to your Object Storage
