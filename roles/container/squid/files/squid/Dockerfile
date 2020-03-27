FROM alpine:3.11
RUN apk add --update squid tzdata
COPY start.sh /start.sh
ENTRYPOINT ["/bin/sh", "/start.sh"]
