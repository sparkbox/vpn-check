const menubar = require('menubar');
const network = require('on-change-network');
/*
  * TODO interface is just a checkbox to send a notification or not
  * TODO store that single preference in local storage
  ** Notifications WITH actions
    https://www.npmjs.com/package/electron-notifications
  ** Start VPN for the user:
    http://superuser.com/questions/358513/start-configured-vpn-from-command-line-osx
*/

const params = {
  index: `file://${__dirname}/index.html`,
  icon: './assets/iconTemplate.png',
};

const mb = menubar(params);

mb.on('ready', () => {
  network(() => mb.tray.setImage('./assets/show.png'));
})

mb.on('show', () => {
  console.log('show');
})

mb.on('hide', () => {
  console.log('hide');
})
