const exec = require('child_process').exec

function _getCommand() {
    const commands = {
        'aix': 'defaultbrowser',
        'android': null,
        'darwin': 'open',
        'freebsd': 'open',
        'linux': 'xdg-open',
        'openbsd': 'open',
        'sunos': 'xdg-open', // maybe should detect the os version for Solaris 11 and later
        'win32': 'start'
    }
    Object.freeze(commands)
    return commands[process.platform] || null
}

function open(url) {
    const command = _getCommand()
    if (!command) {
        console.error(`Your platform ${platform} is not supported, please use other package instead`)
        return
    }
    exec(`${command} ${url}`)
}

module.exports = open
