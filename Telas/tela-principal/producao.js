function executarHealthCheck(instancia) {
    // Simulação dos resultados do health check
    const healthCheckResult = {
        "SQL Server": {
            "Banco de Dados": "OK",
            "Conexão de Rede": "OK",
            "Uso de CPU": "Normal",
            "Espaço em Disco": "Suficiente"
        },
        "Oracle": {
            "Banco de Dados": "OK",
            "Conexão de Rede": "OK",
            "Uso de CPU": "Alto",
            "Espaço em Disco": "Suficiente"
        },
        "MySQL": {
            "Banco de Dados": "OK",
            "Conexão de Rede": "Lenta",
            "Uso de CPU": "Normal",
            "Espaço em Disco": "Baixo"
        },
        "MongoDB": {
            "Banco de Dados": "OK",
            "Conexão de Rede": "OK",
            "Uso de CPU": "Normal",
            "Espaço em Disco": "Suficiente"
        }
    };

    // Pegar os resultados para a instância selecionada
    const resultado = healthCheckResult[instancia];

    // Mostrar o resultado no elemento HTML
    let resultDiv = document.getElementById('resultados');
    resultDiv.innerHTML = `<h3>Health Check - ${instancia}</h3>`;
    for (let item in resultado) {
        resultDiv.innerHTML += `<p>${item}: ${resultado[item]}</p>`;
    }
}

// Função para atualizar todos os health checks
function atualizarHealthCheck() {
    const instancias = ['SQL Server', 'Oracle', 'MySQL', 'MongoDB'];
    let resultDiv = document.getElementById('resultados');
    resultDiv.innerHTML = '<h3>Atualizando Health Check...</h3>';

    // Simula o delay de atualização
    setTimeout(() => {
        resultDiv.innerHTML = ''; // Limpa a mensagem de atualização
        instancias.forEach(instancia => executarHealthCheck(instancia));
    }, 2000); // Simula 1 segundo de espera para atualizar
}