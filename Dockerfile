FROM nginx:alpine

RUN rm /usr/share/nginx/html/index.html
COPY . /usr/share/nginx/html
COPY assets /usr/share/nginx/html/assets

RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx vhost directives
COPY nginx/conf.d /etc/nginx/conf.d
