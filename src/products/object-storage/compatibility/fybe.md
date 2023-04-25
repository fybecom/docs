# fybe CLI

[fyve](https://github.com/fybecom/fybe) is an open source command line interface developed by Fybe to allow easy managing of the Fybe products. This includes the S3 Object Storage. Please follow the intructions to download and install `fybe`

## Configuration

To be able to use `fybe` with your S3 Object Storage, all you need is the following data. You get it via <https://cockpit.fybe.com/account/security>

* `client-id`
* `client-secret`
* `api-password`
* `api-username`

No need for S3 specific credentials.

For configuration of `fybe` please execute once:

```sh
fybe config set-credentials --oauth2-clientid=<ClientId from Customer Control Panel> --oauth2-client-secret=<ClientSecret from Customer Control Panel> --oauth2-user=<API User from Customer Control Panel> --oauth2-password=<API Password from Customer Control Panel>
```

## Usage

### Create Bucket

The command below will create a bucket called `testbucket` in the region `us-central-1`.

```shell
fybe create bucket us-central-1 testbucket
```

### Delete Bucket

The command below will delete a bucket called `testbucket` in the region `us-central-1`

```shell
fybe delete bucket us-central-1 testbucket
```

### Upload File(s)

```sh
fybe create object --region us-central-1 --bucket testbucket --prefix prefix1/ --path path1
```

* `region` is the current region where you have bought your S3 Object Storage
* `bucket` is the bucket name that the files/folders will be uploaded to
* `prefix` is the folder name where everything will be uploaded to
* `path1` is the local path (from your local machine) where you want to upload files recursively

### Delete File

```sh
fybe delete object --region us-central-1 --bucket bucket123 --path path1/fileName
```

* `region` is the current region where you have bought your S3 Object Storage
* `bucket` is the bucket name
* `path` is the path to the file to be deleted
