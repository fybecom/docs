# Introduction

S3 Object Storage, introduced by Amazon AWS in 2006, is a scalable storage service that has become the industry standard for Object Storage. It offers exceptional durability and availability, and data can be accessed from anywhere with an internet connection. Access to S3 Object Storage is available through its API or a variety of tools. For more information on compatibility, please see the [General Compatibility](/products/object-storage/compatibility) page.

The S3 compatible Object Storage storage offers the following essential characteristics:

* **Buckets**: Buckets are used to store data, and within each bucket, objects such as files and "folders" can be stored.
* **Scalability**: There are almost no restrictions on storage capacity, with the ability to store individual objects as large as 5TB.
* **Sharing**: You can either share objects with specific individuals or make them available to the public through the internet.
* **Metadata-Support**: An individual key is assigned to every object, and metadata can be utilized to enhance organizational management.
* **S3 compatible API**: It provides support for S3 compatible APIs, enabling you to use a vast array of pre-existing tools [General Compatibility](/products/object-storage/compatibility).

## S3 Compatibility

Fybe Object Storage utilizes [Ceph](https://ceph.com/) technology and does not offer complete compatibility with AWS S3 API, as certain features such as logging are not supported. However, for the majority of use cases, users are unlikely to experience any significant discrepancies.

## S3 Connection URLs

To utilize S3 compatible Object Storage tools or APIs, the following details are required, which are provided in this overview:

<table>
    <tr>
      <th>Region</th>
      <th>S3 URL</th>
      <th>Credentials</th>
    </tr>
    <tr>
      <td>United States</td>
      <td>https://us-central-1.fybeobjects.com</td>
      <td>Consists of an access key and secret key. Available from <a href="https://cockpit.fybe.com/account/security" target="fybe-cockpit">Fybe Cockpit</a>.</td>
    </tr>
    <tr>
      <td>European Union</td>
      <td>https://eu-central-1.fybeobjects.com</td>
      <td>Consists of an access key and secret key. Available from <a href="https://cockpit.fybe.com/account/security" target="fybe-cockpit">Fybe Cockpit</a>.</td>
    </tr>
    <tr>
      <td>Asia Pacifc</td>
      <td>https://ap-southeast-1.fybeobjects.com</td>
      <td>Consists of an access key and secret key. Available from <a href="https://cockpit.fybe.com/account/security" target="fybe-cockpit">Fybe Cockpit</a>.</td>
    </tr>
</table>

## Supported Protocols

The protocol used by S3 compatible Object Storage, which specifies the format and sequence of data exchange, was popularized by Amazon AWS in 2006 with their AWS S3 Object Storage.

For this reason following protocols are **not** supported by the Object Storage:

* FTP / FTPS
* SFTP / SCP
* NFS / CIFS / SAMBA
* Real-Time Streaming Protocol (RTSP)

As S3 compatible Object Storage has gained popularity, numerous tools have emerged to support it. For a comprehensive list, please consult the [General Compatibility](/products/object-storage/compatibility) page.

## Technical Description

Fybe is using [Ceph](https://ceph.com/) to provide Object Storage. Upon S3 specification, Ceph usage and measures to allow a smooth performance, a list of characteristics:

* due to incompatibility, Virtual Hosted Buckets are not supported and instead, path-based buckets are being employed. So please use e.g. `us-central-1.fybeobjects.com/mybucket` instead of `mybucket.us-central-1.fybeobjects.com`
* server-side encryption is not yet available
* transport encrypted via TLS
* because of S3 specifications max. object / file size is 5 TB
* number of objects is by default restricted to 5 millions per customer
* default limit for S3 API requests is 500 requests per second
* each piece of data is replicated three times for added redundancy in storage
* no further backup is executed.
* bandwidth is restricted and frequently modified, with a standard limit of 50 MByte/s (=400 Mbit/s). It is important to note that the actual bandwidth is subject to various factors, such as individual internet connection speed and the current load on the Object Storage system.
* maximum number of buckets per customer is set to 150 by default
