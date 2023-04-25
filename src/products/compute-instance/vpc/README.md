# Virtual Private Cloud (VPC) / Private Networking

Virtual Private Cloud (VPC) allows Compute Instances in the same data center location to communicate within a private network.

Compute Instances that belong to the same private network get private IP addresses allocated, and their communication is restricted to this private network. Following benefits from using a VPC are listed in the following:

* Establish a secure means of communication among Fybe Compute Instances located in the same data center by linking several Compute Instances via a VPC / private network. The communication is private, i.e. separated on network layer 2.
* Private IP addresses are automatically assigned for easy configuration. Simply select the Compute Instance and private network, and we'll take care of the rest. There's no need to manually choose network sizes or masks, or configure private IPs manually.

## Technical details

Fybe's VPC is constructed using exclusive network connections that are solely linked within a single data center using Switches. Those connections have not uplink to the internet and solely connect Compute Instances, resulting in optimal performance for VPCs.

In Linux terminology, we utilize `scope links` which imply that VPC traffic is not routed, eliminating the need for a gateway.

* VPC connections are using the same physical network cables across multiple Compute Instances. Thus the connections are shared resource on a physical level, there are no bandwidth guarantees.
* Anticipate the bandwidth to be several times faster than your Compute Instance's uplink.
* Latency, or round trip times, will be significantly improved, with a range of usually less than 0.1 ms.

## FAQs

### What are the limitations of VPC?

A network size of `/22` allows for a maximum of 1,024 addresses.

### Is it possible to add a Compute Instance to multiple VPCs simultaneously?

It is possible to add a Compute Instance to multiple VPCs in parallel.

### Is it possible to manage VPC functionalities using the API / CLI?

Yes, please check instructions on how to use the API & CLI here <https://dev.fybe.com/>

### Is it possible for me to establish a VPC that spans across multiple data centers?

It is only possible to create VPCs in a single data center at a time, and private networks can only include instances located in that same data center.

