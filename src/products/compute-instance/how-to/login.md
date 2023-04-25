# First Steps - Login to your Compute Instance

Basically your Compute Instance is intalled with Linux/BSD or Windows depending on your choice during purchase or reinstallation. As those operating sytems are different in terms of access they will be described separately.

## Access Linux/BSD based Compute Instances

Linux/BSD based system are usually accessed by using [`SSH`](https://en.wikipedia.org/wiki/Secure_Shell). SSH can either be used with passwords which is discouraged for security reasons or with private / public key pairs (=ssh keys). Here it is assumed that you already setup your SSH keys or defined your password.

### Your local machine is Linux/BSD

Usually a ssh client is available by default an can be invoked in a terminal like the following:

```sh
ssh USERNAME@DOMAINNAME
# e.g.
# ssh admin@1.2.3.4
```

### Your local machine is Windows

In case you are using Windows please make sure that you have an appropiate SSH client available. [PuTTY](https://www.putty.org/) is a quite popular example.

## Access Windows based Compute Instances

Windows based system are usually accessed by using [`Remote Desktop`](https://en.wikipedia.org/wiki/Remote_Desktop_Protocol).

### Your local machine is Linux/BSD

You will need to install a Remote Desktop compatible tool like e.g. `rdesktop`.

On Debian / Ubuntu systems you might install it via

```sh
sudo apt-get install rdesktop
```

Start it by providing the IpV4 address, user name and password to access the graphical user interface.

### Your local machine is Windows

On Windows usually a tool named `Remote Desktop Connection` is already available. Please start it and provide the IPv4 address, user name and password to see the graphical user interface.
