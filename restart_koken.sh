docker rm -f koken
docker run --restart=always -p 80:8080 -v /data/koken/www:/usr/share/nginx/www -v /data/koken/mysql:/var/lib/mysql -d --name=koken koken/koken-lemp /sbin/my_init
#docker run --restart=always -p 80:8080 -d --name=koken koken/koken-lemp /sbin/my_init
docker logs -f koken