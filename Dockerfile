FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY apps/mantine.dev/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
