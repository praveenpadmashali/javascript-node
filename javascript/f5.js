function callback(yes,no)
{
    console.log(yes()+ ' ' +no());

}

function yes()
{
    return 'yes';
}

function no()
{
    return 'no'
}
callback(yes,no)
callback (function(){return 'rem'},function(){return 'rum'});
callback(()=>"rem",()=>'rahim')