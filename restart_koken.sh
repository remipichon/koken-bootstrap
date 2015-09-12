docker rm -f koken
docker run --restart=always -p 80:80 -v ~/data/koken/www:/usr/share/nginx/www -v ~/data/koken/mysql:/var/lib/mysql -d --name=koken koken/koken-lemp /sbin/my_init
docker logs -f koken