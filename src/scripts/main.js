document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('par').addEventListener('click', function(evento) {
        evento.preventDefault();
        let jogador = document.getElementById('jogada').value;
        jogador = parseInt(jogador);

        let numeroAleatorio = Math.random() * 10;
        numeroAleatorio = Math.round(numeroAleatorio);

        let resto = (numeroAleatorio + jogador) % 2;

        if ( resto == 0) {
            document.querySelector  ('.mostrar-par').style.display = 'none';
            document.querySelector  ('.mostrar-impar').style.display = 'none';
            document.querySelector  ('#mostrar-par-id').style.display = 'none';
            document.querySelector  ('#mostrar-impar-id').style.display = 'none';
            
            document.querySelector  ('.derrota').style.display = 'none';
            document.querySelector  ('.vitoria').style.display = 'none';
            
            document.getElementById ('resultado-valor-vitoria').innerText = numeroAleatorio;
            
            document.querySelector  ('#mostrar-par-id').style.display = 'block';
            document.querySelector  ('.vitoria').style.display = 'block';
        } else {
            document.querySelector  ('.mostrar-par').style.display = 'none';
            document.querySelector  ('.mostrar-impar').style.display = 'none';
            document.querySelector  ('#mostrar-par-id').style.display = 'none';
            document.querySelector  ('#mostrar-impar-id').style.display = 'none';
            
            document.querySelector  ('.derrota').style.display = 'none';
            document.querySelector  ('.vitoria').style.display = 'none';
            
            document.getElementById ('resultado-valor-derrota').innerText = numeroAleatorio;
            
            document.querySelector  ('.mostrar-impar').style.display = 'block';
            document.querySelector  ('.derrota').style.display = 'block';
        }
    })

    document.getElementById('impar').addEventListener('click', function(evento) {
        evento.preventDefault();
        let jogador = document.getElementById('jogada').value;
        jogador = parseInt(jogador);

        let numeroAleatorio = Math.random() * 10;
        numeroAleatorio = Math.round(numeroAleatorio);

        let resto = (numeroAleatorio + jogador) % 2;

        if ( resto != 0) {
            document.querySelector  ('.mostrar-par').style.display = 'none';
            document.querySelector  ('.mostrar-impar').style.display = 'none';
            document.querySelector  ('#mostrar-par-id').style.display = 'none';
            document.querySelector  ('#mostrar-impar-id').style.display = 'none';

            document.querySelector  ('.derrota').style.display = 'none';
            document.querySelector  ('.vitoria').style.display = 'none';

            document.getElementById ('resultado-valor-vitoria').innerText = numeroAleatorio;

            document.querySelector  ('#mostrar-impar-id').style.display = 'block';
            document.querySelector  ('.vitoria').style.display = 'block';
        } else {
            document.querySelector  ('.mostrar-par').style.display = 'none';
            document.querySelector  ('.mostrar-impar').style.display = 'none';
            document.querySelector  ('#mostrar-par-id').style.display = 'none';
            document.querySelector  ('#mostrar-impar-id').style.display = 'none';

            document.querySelector  ('.derrota').style.display = 'none';
            document.querySelector  ('.vitoria').style.display = 'none';

            document.getElementById ('resultado-valor-derrota').innerText = numeroAleatorio;

            document.querySelector  ('.mostrar-par').style.display = 'block';
            document.querySelector  ('.derrota').style.display = 'block';
        }
    })
})
