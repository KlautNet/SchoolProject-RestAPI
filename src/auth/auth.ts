const tokens = require('./api-tokens.json');

function checkAPIToken(key: string) {
    for (var i = 0; i < tokens.apiTokens.length; i++) {
        if (key == tokens.apiTokens[i]) {
            return true;
        }
    }

    return false;
}

export default checkAPIToken;
