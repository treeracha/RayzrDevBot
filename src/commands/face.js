const cool = require('cool-ascii-faces');

exports.run = (bot, msg) => {
    msg.delete();
    msg.channel.sendMessage(cool());
};

exports.info = {
    name: 'face',
    usage: 'face',
    description: 'Shows a random ascii face'
};