---
layout: post
published: true
title: Installing Discourse with in Docker Container
categories: Discourse
---

Since we need to install Discourse with in Docker container lets install Docker first before starting to install Discourse .

I am writing these instructions for installing Docker and Discourse in UBUNTU 13.10 64bit operating system , If you have the same its good , if not please refer [official documentation](https://www.docker.io/gettingstarted/#h_installation) .


Just start running these commands with a sudo previlaged user

```sh
sudo apt-get update
sudo apt-get install linux-image-extra-`uname -r`
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 36A1D7869245C8950F966E92D8576A8BA88D21E9
sudo sh -c "echo deb http://get.docker.io/ubuntu docker main\ > /etc/apt/sources.list.d/docker.list"
sudo apt-get update
sudo apt-get install lxc-docker
```

Now you installed docker successfully . To test just try running

```sh
docker

```

You should see all those help commands.

Lets start installing Discourse now with in Docker container .

Make sure you run sudo su and login as root other wise identity wont get transferred to container .

```sh
git clone https://github.com/discourse/discourse_docker.git /var/docker
cp samples/standalone.yml containers/app.yml
```
edit app.yml with your details [Refer configuration details](https://github.com/discourse/discourse_docker#container-configuration)

```sh
./launcher bootstrap app
./launcher start app
```
Now docker is up and running in a discourse container .

if you want to ssh to that running container you can just type in

```sh
ssh -p 2222 root@0.0.0.0
```

Now you will be in to the container, you can host your own jekyll site or php site or wordpress site along with docker by doing neccessary installations

