# Introduction

[Fybe](https://fybe.com) offers offers Compute Instances in different flavors fitting different usage scenarios.

* __Basic__: Compute Instances with hyper-threaded (shared) CPU cores and shared memory. Offers basic performance for simple applications.
* __General Purpose__: Compute Instances with non-hyper-threaded (non shared) CPU cores and not shared memory. Use cases are e.g. high volume web pages or ecommerce sites.
* __CPU Optimized__: Like __General Purpose__ but with more CPU cores for CPU intensive applications like data analytics or batch processing
* __RAM Optimized__: Like __General Purpose__ but with more memory for RAM intensive applications like in-memory caches or databases.
* __Storage Optimized__: Like __General Purpose__ but with more storage capacity for applications with much data like data warehouses or NoSQL databases..

## Technical description

Every Compute Instance

* comes with one IPv4 address
* can be controlled by included [APIs](https://dev.fybe.com). Optionally you can also use the [`fybe` CLI](https://github.com/fybecom/fybe) or the [Terraform provider](https://example.com/)
* supports [cloud-init](https://cloud-init.io/) and customer server images (up to 25 GB storage)
* large set of standard images including plain operating systems like different Linux distros and Windows versions as well as images with preinstalled software
* includes Virtual Private Cloud (VPC) for private networking between your Compute Instances in one data center
* has full administrative priviliges to your Compute Instances
