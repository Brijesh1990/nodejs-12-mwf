// validations 
function valid()
{
    // each field applied validations
    if(document.frm.name.value=="")
    {
        // alert('Please enter your name here')
        Swal.fire({
            title: "Error",
            text: "Please Enter your name here",
            icon: "error"
          });
        document.frm.name.focus();
        return false;
    }
    // applied regular expression for only accept name is alphabetic character
    var nm=/^[A-Za-z]+$/;
    if(!nm.test(document.frm.name.value))
    {
        // alert('Please enter your name only in alphabetic character here')
        Swal.fire({
            title: "Error",
            text: "Please Enter your name alphabetic character only here",
            icon: "error"
          });
        document.frm.name.focus();
        return false;
    }


    if(document.frm.email.value=="")
        {
            // alert('Please enter your name here')
            Swal.fire({
                title: "Error",
                text: "Please Enter your email here",
                icon: "error"
              });
            document.frm.email.focus();
            return false;
        }

    var em=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/    

    if(!em.test(document.frm.email.value))
        {
            // alert('Please enter your name only in alphabetic character here')
            Swal.fire({
                title: "Error",
                text: "Please Enter Your valid email address",
                icon: "error"
              });
            document.frm.email.focus();
            return false;
        }
    
        if(document.frm.mobile.value=="")
            {
                // alert('Please enter your name here')
                Swal.fire({
                    title: "Error",
                    text: "Please Enter your mobile here",
                    icon: "error"
                  });
                document.frm.mobile.focus();
                return false;
            }
        
            if(document.frm.address.value=="")
                {
                    // alert('Please enter your name here')
                    Swal.fire({
                        title: "Error",
                        text: "Please Enter your address here",
                        icon: "error"
                      });
                    document.frm.address.focus();
                    return false;
                }

                if(document.frm.pincode.value=="")
                    {
                        // alert('Please enter your name here')
                        Swal.fire({
                            title: "Error",
                            text: "Please Enter your pincode here",
                            icon: "error"
                          });
                        document.frm.pincode.focus();
                        return false;
                    }
}