

// RAM -> Na serveru
// a1b2c3d4-e5f6-7890-abcd-ef1234567890 -> SID -> Session ID
sessions = {
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890': {username: "Toma", loggedIn: true}
};


// CookieStorage (in browser)
{sid: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'}


/**
 * Korisnik dolazi na sajt
 *  -> Da li ovaj korisnik u svom cookiu ima podatak koji se zove "sid"
 *      -> Ako ima, pretrazi na serveru da li imamo neke podatke sa tim SID
 */

res.setHeader('Set-Cookie', {sid: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'})
res.end('Loggedin in');