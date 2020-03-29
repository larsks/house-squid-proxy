FROM alpine:3.11
RUN apk add --update squid tzdata
COPY start.sh /start.sh

# Make this a volume so we can get at the pid file
# from another container.
VOLUME /var/run

ENTRYPOINT ["/bin/sh", "/start.sh"]
