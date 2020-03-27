FROM alpine:3.11
RUN apk add --update squid tzdata
ENTRYPOINT ["squid", "--foreground"]
