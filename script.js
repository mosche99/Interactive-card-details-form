const $formulario = document.getElementById('form'),
$completed = document.getElementById('completed-state'),
$inputTitular = document.getElementById('titular'),
$inputTargetNumber = document.getElementById('numero-de-tarjeta'),
$inputExpirationMonth = document.getElementById('mes'),
$inputExpirationYear = document.getElementById('year'),
$inputSecurityNumber = document.getElementById('clave-de-seguridad'),
$cardSecurityCode = document.getElementById('security-code'),
$cardNumber = document.getElementById('card-number'),
$cardName = document.getElementById('card-name'),
$cardDate = document.getElementById('card-date'),
$cardMonth = document.getElementById('card-month'),
$cardYear = document.getElementById('card-year'),
$submit = document.getElementById('confirmar');


let letters =  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

const validarTitular = (titular) => {
    if (titular.length === 0) {
        return 'Este campo no puede estar vacío';
    } else if (!titular.match(letters)) {
        return 'Este campo no puede contener números';
    } else {
        return '';
    }

}

const validarNumero = (numero) => {
    if (numero.length === 0) {
        return 'Este campo no puede estar vacío';
    } else if (numero.match(letters)) {
        return 'Este campo no puede contener letras';
    } else if (numero.length !== 19) {
        return 'Este campo debe contener 16 números';
    } else {
        return '';
    }
}

const validarMes = (mes) => {
    if (mes.length === 0) {
        return 'Este campo no puede estar vacío';
    } else if (mes.match(letters)) {
        return 'Este campo no puede contener letras';
    } else if (mes.length !== 2) {
        return 'Este campo debe contener 2 números'
    } else {
        return '';
    }
}

const validarYear = (year) => {
    if (year.length === 0) {
        return 'Este campo no puede estar vacío';
    } else if (year.match(letters)) {
        return 'Este campo no puede contener letras';
    } else if (year.length !== 2) {
        return 'Este campo debe contener 2 números'
    } else {
        return '';
    }
}

const validarClave = (clave) => {
    if (clave.length === 0) {
        return 'Este campo no puede estar vacío';
    } else if (clave.match(letters)) {
        return 'Este campo no puede contener letras';
    } else if (clave.length !== 3) {
        return 'Este campo debe contener 3 números'
    } else {
        return '';
    }
}


const validarForm = () => {
    const titular = $inputTitular.value,
    numero = $inputTargetNumber.value,
    month = $inputExpirationMonth.value,
    year = $inputExpirationYear.value,
    clave = $inputSecurityNumber.value;

    const errorTitular = validarTitular(titular);
    const errorNumero = validarNumero(numero);
    const errorMonth = validarMes(month);
    const errorYear = validarYear(year);
    const errorClave = validarClave(clave);

    const errors = {
        titular: errorTitular,
        numero: errorNumero,
        month: errorMonth,
        year: errorYear,
        clave: errorClave,
    }

    const success = handlingErrors(errors) === 0;

    if (success) {
        $formulario.classList.add('hide');
        $completed.classList.remove('hide');
    }
}

const handlingErrors = (errors) => {
    const $errorsTitular = document.getElementById('errores-nombre');
    const $errorsNumber = document.getElementById('errores-numero');
    const $errorsMonth = document.getElementById('errores-mes');
    const $errorsYear = document.getElementById('errores-year');
    const $errorsClave = document.getElementById('errores-clave');

    let cantErrors = 0;
    
    if (errors.titular !== '') {
        cantErrors++;
        $errorsTitular.textContent = errors.titular;
        $inputTitular.classList.add('error');
    }
    if (errors.numero !== '') {
        cantErrors++;
        $errorsNumber.textContent = errors.numero;
        $inputTargetNumber.classList.add('error');
    }
    if (errors.month !== '') {
        cantErrors++;
        $errorsMonth.textContent = errors.month;
        $inputExpirationMonth.classList.add('error');
    }
    if (errors.year !== '') {
        cantErrors++;
        $errorsMonth.textContent = errors.month;
        $inputExpirationYear.classList.add('error');
    }
    if (errors.clave !== '') {
        cantErrors++;
        $errorsClave.textContent = errors.clave;
        $inputSecurityNumber.classList.add('error');
    }

    return cantErrors;

    

}

$formulario.addEventListener('submit', e => {
    validarForm();
    
    e.preventDefault();
})






$formulario.addEventListener('input', e => {
    if(e.target === $inputTitular) {
        if ($inputTitular.value !== '') {
            $cardName.textContent = $inputTitular.value;
        }
    }
    if (e.target === $inputSecurityNumber) {
        if ($inputSecurityNumber.value !== '') {
            $cardSecurityCode.textContent = $inputSecurityNumber.value;
        }
    }
    if (e.target === $inputExpirationMonth) {
        if ($inputExpirationMonth.value !== '') {
            $cardMonth.textContent = $inputExpirationMonth.value;
        }
    }
    if (e.target === $inputExpirationYear) {
        if ($inputExpirationYear.value !== '') {
            $cardYear.textContent = $inputExpirationYear.value;
        }
    }
    if (e.target === $inputTargetNumber) {
        if ($inputTargetNumber.value !== '') {
            $cardNumber.textContent = $inputTargetNumber.value;
        }
    }

    e.preventDefault();
    
})

