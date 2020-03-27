#!/bin/sh

chown -R squid:squid /var/log/squid
exec /usr/sbin/squid --foreground "$@"
