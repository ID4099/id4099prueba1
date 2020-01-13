function requiredValue(){
    jQuery.fn.reverse = [].reverse;
    var error = 0;
    $('.required-value').reverse().each(function(){
        if(!this.value || this.value == ''){
            this.focus();
            error = 1;
        }
    });
    return error;
}

function emailValidate(){
    jQuery.fn.reverse = [].reverse;
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    var error = 0;

    $('.email-validate').reverse().each(function(){
        if (regex.test(this.value.trim())) {
    
        } 
        else if(this.value != ''){
            this.focus();
            error = 1;

        }
    });
    return error;
}

function confirmPassword(idPassword1, idPassword2){
    var valorPs1 = $(idPassword1).val();
    var valorPs2 = $(idPassword2).val();
    var error = 0;

    if(valorPs1 != valorPs2){
        error = 1;

        $(idPassword1).val("");
        $(idPassword2).val("");

        $(idPassword1).focus();

    }

    return error;
}

function rutValidate(idCampoRut){
	var stringRut = $(idCampoRut).val();
    if(stringRut != ''){

        if(Rut(`${stringRut}`) == false){
            $(idCampoRut).val('')
            $(idCampoRut).focus()
    
            Swal.fire({
                title: 'Error',
                text: "El RUT es Incorrecto.",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ok'
            });
            
        }
        else{
            $(idCampoRut).val(rutFormat(`${stringRut}`))
        }
    }
}

function formValidations(idForm, idPassword1, idPassword2){
    if(confirmPassword(idPassword1, idPassword2) == 1){
        Swal.fire({
            title: 'Error',
            text: "Las contraseñas tienen que ser exactamente iguales.",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ok'
        });
    }
    else if(requiredValue() == 1){
        Swal.fire({
            title: 'Error',
            text: "Los campos son requeridos.",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ok'
        });
    }
    else if(emailValidate() == 1){
        Swal.fire({
            title: 'Error',
            text: "Verifique que el correo este correcto.",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ok'
        });
    }
    else{
        Swal.fire({
            title: 'Mensaje',
            text: "Datos Ingresados Correctamente.",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ok'
        }).
        then((result) => {
            if (result.value) {
                $(idForm).submit();                    
            }
            else{
                $(idForm).submit();                    
            }
        })
    }
}