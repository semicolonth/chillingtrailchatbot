# Chilling Trail Chat Bot
Trail running information LINE chat bot by Chilling Trail

# Sample .env file
```
listenIP = 127.0.0.1
listenPort = 60001
channelAccessToken = 92834792739487239423
channelSecret = 485934587357934
```

# Deployment
* nodejs version 8.2.1
* npm install -g pm2
* npm install
* pm2 server.js

# Command List
```
!racelist [<period code>]
!raceinfo <race code>
!raceplan <race code> [<category>] [<target time>]
```
