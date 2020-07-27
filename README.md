# node-chat
nodejs with socketio chat realtime

#manejo de pm2
pm2 ls
sudo chown alex:alex /home/alex/.pm2/rpc.sock /home/alex/.pm2/pub.sock
pm2 start --name https "/opt/apache/apache2.4/bin/apachectl -f /opt/apps/http-2.4/lab_https/conf/httpd.conf -k start"
pm2 start ecosystem.config.js
pm2 save --force
pm2 log web-chat
pm2 logs
pm2 stop 1
pm2 delete 1
#sudo  PATH=/usr/local/bin pm2 startup systemd --hp /home/alex
