//https://www.facebook.com/
    var textareaCont = document.querySelector('textarea[name="xhpc_message"]');
    var formStatusSendus = document.querySelector('form[rel="async"]');
    if (textareaCont)
    {
        textareaCont.value = "hello world )";
        if(textareaCont){
                formStatusSendus.submit();}
                else{
                console.log('form wrong...');
                }
    }else{
    console.log('something wrong...');
    }
