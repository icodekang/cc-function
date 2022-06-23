FROM nginx:1-alpine

ENV APPDIR /usr/share/nginx/html
RUN mkdir -p $APPDIR 

RUN cat /etc/nginx/conf.d/default.conf

WORKDIR $APPDIR

ADD ./.deploy /usr/share/nginx/html