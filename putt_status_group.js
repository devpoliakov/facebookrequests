// https://www.facebook.com/groups/your_group_id/
// url for sending data
// https://www.facebook.com/ajax/groups/members/add_post.php

var textareaCont = document.querySelector('textarea[name="xhpc_message_text"]');
var formTrigger = document.querySelector('div[data-testid="react-composer-root"]');
var buttonStatusSendus = document.querySelector('button[data-testid="react-composer-post-button"]');
    if (textareaCont)
    {
        textareaCont.value = "не балуйте штучний інтелект своїми лайками )";
        }else{
        console.log('textareaCont wrong...');
        }

if(formTrigger){
        formTrigger.click();
        console.log('good connection formTrigger');
        }else{
        console.log('formTrigger wrong...');
        }

if(buttonStatusSendus){
        buttonStatusSendus.click();
        console.log('good connection buttonStatusSendus');
        }else{
        console.log('buttonStatusSendus wrong...');
        }