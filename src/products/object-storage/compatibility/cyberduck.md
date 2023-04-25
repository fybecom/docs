# Cyberduck

The free desktop application [Cyberduck](https://cyberduck.io/) is available for MacOS and Windows and enables users to manage remote files using various protocols, including S3 compatible Object Storage. To install Cyberduck, please refer to the instructions provided on their website at <https://cyberduck.io/download/>.

## Configuration for Fybe's S3 compatible Object Storage

For `access_key`, `secret_key` and the S3 URL please check [here](/products/object-storage/#s3-connection-urls).

* `access_key` = c4e1a8315dc60dc96f7d757d2bab6f5a
* `secret_key` = 19d984d90dfb7ff63d751fe8b0a200a7
* S3 URL = https://us-central-1.fybeobjects.com


1. Launch Cyberduck
2. Create new bookmark
3. As Type choose `Amazon S3`
4. Setup settings
   * for field `Server` use `us-central-1.fybeobjects.com`, depending on your Object Storage location. Please enter without `https://`
   * for field `Access Key ID` use your access_key, e.g. `c4e1a8315dc60dc96f7d757d2bab6f5a`
   * for field `Secret Access Key` use your secret_key, e.g. `19d984d90dfb7ff63d751fe8b0a200a7`
