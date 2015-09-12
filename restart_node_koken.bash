docker rm -f node_koken
docker run -ti -d -v ~/koken/koken-bootstrap:/data/koken-bootstrap --name=node_koken node bash 
#docker logs -f node_koken 

npm install -g bower
npm install
bower install --allow-root
grunt init
grunt