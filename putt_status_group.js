//https://www.facebook.com/groups/your_group_id/
    var textareaCont = document.querySelector('textarea[name="xhpc_message_text"]');
    var formStatusSendus = document.querySelector('form[rel="async"]');
    if (textareaCont)
    {
        textareaCont.value = "hello world )";
        if(textareaCont){
                formStatusSendus.submit();
            }
                else{
                console.log('form wrong...');
                }
    }else{
    console.log('something wrong...');
    }
