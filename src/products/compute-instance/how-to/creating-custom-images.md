# Create a Custom Image

Although it is possible to create a Custom Image from scratch, the following example will demonstrate how to build upon an existing Debian cloud image. Many Linux distributions offer compatible images in the `.qcow2` format that can be readily used on a Fybe Compute Instance.

__NOTE__: The commands provided are intended to be executed on a Linux Compute Instance. For this example, a new and empty instance with Debian installed was used.

To explore all available options with the `virt-customize` command, please refer to the official [libguestfs documentation](https://www.libguestfs.org/virt-customize.1.html). This example will cover only the basic function

```bash
# Install libguestfs-tools
sudo apt install -y --no-install-recommends libguestfs-tools

# Create a new directory and cd into it
mkdir deb_custom
cd deb_custom

# Download the official Debian 11 cloud image
wget -O deb11custom.qcow2 https://cloud.debian.org/images/cloud/bullseye/latest/debian-11-genericcloud-amd64.qcow2

# Customize the image
virt-customize -a deb_custom.qcow2 \
  --run-command 'growpart /dev/sda 1' \
  --run-command 'resize2fs /dev/sda1' \
  --update \
  --install ca-certificates,rsync

# Spin up a temporary HTTP server to serve the image, CTRL+C to stop
python3 -m http.server
```

Your Custom Image is now prepared and can be downloaded to your Fybe Custom Image repository. You have the option to use either the [Cockipt](https://cockpit.fybe.com/) interface or the CLI tool on your local machine to perform this task.

```sh
fybe create image --name 'Debian Custom' \
  --description 'Custom Debian Image with rsync' \
  --url http://<instance_ipv4>:8000/deb_custom.qcow2 \
  --osType Linux \
  --version 11
```

Substitute `instance_ipv4` with the public IPv4 address of the instance where you built the image. Remember to stop the temporary HTTP server once the image download is complete.
