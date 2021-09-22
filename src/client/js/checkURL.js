
    function checkURL(value)
{    var regexp = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(regexp != null){
        return regexp;
    } 
}

export { checkURL }

