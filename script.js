// Seleciona elementos do DOM
const inputUsername = document.getElementById('uname');
const inputPassword = document.getElementById('pass');
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('login-btn');
const btnContainer = document.querySelector('.btn-container');

// Validação em tempo real
inputUsername.addEventListener('input', toggleBtnState);
inputPassword.addEventListener('input', toggleBtnState);

function toggleBtnState() {
    // Habilita o botão apenas se ambos os campos estiverem preenchidos
        loginBtn.disabled = !(inputUsername.value.trim() && inputPassword.value.trim());
        }

        // Efeito de botão "fujão" se clicado sem preencher
        loginBtn.addEventListener('click', (e) => {
            if (loginBtn.disabled) {
                    e.preventDefault();
                            shiftButton();
                                    showErrorMsg();
                                        }
                                        });

                                        function shiftButton() {
                                            const positions = ['shift-left', 'shift-right', 'shift-top', 'shift-bottom'];
                                                
                                                    // Remove classe anterior (se existir)
                                                        positions.forEach(pos => loginBtn.classList.remove(pos));
                                                            
                                                                // Adiciona nova posição aleatória
                                                                    const randomPos = positions[Math.floor(Math.random() * positions.length)];
                                                                        loginBtn.classList.add(randomPos);
                                                                            
                                                                                // Reseta a posição após 0.5s
                                                                                    setTimeout(() => {
                                                                                            loginBtn.classList.remove(randomPos);
                                                                                                }, 500);
                                                                                                }

                                                                                                function showErrorMsg() {
                                                                                                    const errorMsg = document.createElement('p');
                                                                                                        errorMsg.textContent = 'Preencha todos os campos!';
                                                                                                            errorMsg.style.color = 'red';
                                                                                                                errorMsg.style.marginTop = '10px';
                                                                                                                    
                                                                                                                        // Remove mensagens anteriores
                                                                                                                            const existingMsg = document.querySelector('.error-msg');
                                                                                                                                if (existingMsg) existingMsg.remove();
                                                                                                                                    
                                                                                                                                        errorMsg.classList.add('error-msg');
                                                                                                                                            btnContainer.appendChild(errorMsg);
                                                                                                                                                
                                                                                                                                                    // Remove a mensagem após 3s
                                                                                                                                                        setTimeout(() => {
                                                                                                                                                                errorMsg.remove();
                                                                                                                                                                    }, 3000);
                                                                                                                                                                    }