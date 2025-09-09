document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const campos = {
        nome: document.getElementById('nome'),
        email: document.getElementById('email'),
        telefone: document.getElementById('telefone'),
        mensagem: document.getElementById('mensagem')
    };

    function validarCampo(campo) {
        const valor = campo.value.trim();
        const mensagemErro = campo.nextElementSibling;
        
        if (!valor) {
            campo.classList.add('invalido');
            campo.classList.remove('valido');
            mensagemErro.textContent = 'campo obrigatório';
            return false;
        }
        
        campo.classList.add('valido');
        campo.classList.remove('invalido');
        mensagemErro.textContent = '';
        return true;
    }

    Object.values(campos).forEach(campo => {
        campo.addEventListener('input', function() {
            if (this.value.trim()) {
                validarCampo(this);
            }
        });
        
    });

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let formularioValido = true;
        
        Object.values(campos).forEach(campo => {
            if (!validarCampo(campo)) {
                formularioValido = false;
            }
        });
        
        if (formularioValido) {
            formulario.reset();
            
            Object.values(campos).forEach(campo => {
                campo.classList.remove('valido', 'invalido');
                campo.nextElementSibling.textContent = '';
            });
        }
    });
});