// =====================
// TEMA GLOBAL
// =====================

const themeBtn =
document.getElementById("themeBtn");

// CARREGAR TEMA

const temaSalvo =
localStorage.getItem("tema");

if(temaSalvo === "light"){

    document.body.classList.add("light-mode");

}

// ALTERAR TEMA

if(themeBtn){

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){

            localStorage.setItem("tema", "light");

        }

        else{

            localStorage.setItem("tema", "dark");

        }

    });

}

// =====================
// FORMULÁRIO
// =====================

const form =
document.getElementById("missionForm");

if(form){

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        // DADOS

        const nome =
        document.getElementById("missionName").value;

        const destino =
        document.getElementById("destination").value;

        const tipoOperacao =
        document.getElementById("operationType").value;

        const prioridade =
        document.getElementById("priority").value;

        const tripulacao =
        document.getElementById("crew").value;

        const descricao =
        document.getElementById("description").value;

        // OBJETO

        const operacao = {

            nome,
            destino,
            tipoOperacao,
            prioridade,
            tripulacao,
            descricao

        };

        // SALVAR

        localStorage.setItem(
            "operacaoAtual",
            JSON.stringify(operacao)
        );

        // RESULTADO

        document.getElementById("missionResult").innerHTML =

        `
        <h2>✅ Operação Inicializada</h2>

        <br>

        <p><strong>Operação:</strong> ${nome}</p>

        <p><strong>Ambiente:</strong> ${destino}</p>

        <p><strong>Tipo:</strong> ${tipoOperacao}</p>

        <p><strong>Prioridade:</strong> ${prioridade}</p>

        <p><strong>Tripulação:</strong> ${tripulacao}</p>

        <br>

        <p>
        O sistema ORBITAL X iniciou
        o monitoramento científico da operação.
        </p>

        <br>

        <p>
        Sensores climáticos ativados.
        Comunicação orbital estabelecida.
        Dados ambientais sendo processados.
        </p>
        `;

        // REDIRECIONAR

        setTimeout(() => {

            window.location.href =
            "index.html";

        }, 4000);

    });

}

// =====================
// DASHBOARD
// =====================

const nomeMissaoDashboard =
document.getElementById("nomeMissaoDashboard");

const descricaoMissao =
document.getElementById("descricaoMissao");

const logs =
document.getElementById("logContainer");

const alerta =
document.getElementById("alertText");

// CARDS

const temperatura =
document.getElementById("temperatura");

const energia =
document.getElementById("energia");

const combustivel =
document.getElementById("combustivel");

const radiacao =
document.getElementById("radiacao");

const comunicacao =
document.getElementById("comunicacao");

// OPERAÇÃO SALVA

const operacaoSalva =
JSON.parse(localStorage.getItem("operacaoAtual"));

// CONFIGURAÇÃO

let configOperacao = {

    temperaturaMin:-140,
    temperaturaMax:-120,

    radiacaoMin:10,
    radiacaoMax:20,

    combustivelMin:70,
    combustivelMax:95,

    descricao:
    "Monitoramento atmosférico em ambiente extremo."

};

// DESTINOS

if(operacaoSalva){

    nomeMissaoDashboard.innerText =
    operacaoSalva.nome;

    descricaoMissao.innerText =
    operacaoSalva.descricao;

    // TITÃ

    if(operacaoSalva.destino === "Titã"){

        configOperacao = {

            temperaturaMin:-145,
            temperaturaMax:-120,

            radiacaoMin:10,
            radiacaoMax:20,

            combustivelMin:70,
            combustivelMax:95,

            descricao:
            "Monitoramento climático e atmosférico da lua Titã."

        };

    }

    // MARTE

    else if(operacaoSalva.destino === "Marte"){

        configOperacao = {

            temperaturaMin:-80,
            temperaturaMax:-40,

            radiacaoMin:5,
            radiacaoMax:15,

            combustivelMin:60,
            combustivelMax:90,

            descricao:
            "Análise ambiental e climática da superfície marciana."

        };

    }

    // EUROPA

    else if(operacaoSalva.destino === "Europa"){

        configOperacao = {

            temperaturaMin:-180,
            temperaturaMax:-150,

            radiacaoMin:20,
            radiacaoMax:40,

            combustivelMin:75,
            combustivelMax:100,

            descricao:
            "Monitoramento de radiação e atividade criogênica em Europa."

        };

    }

    // LUA

    else if(operacaoSalva.destino === "Lua"){

        configOperacao = {

            temperaturaMin:-100,
            temperaturaMax:-20,

            radiacaoMin:5,
            radiacaoMax:10,

            combustivelMin:55,
            combustivelMax:80,

            descricao:
            "Coleta de dados ambientais da superfície lunar."

        };

    }

    // OPERAÇÕES

    if(operacaoSalva.tipoOperacao ===
    "Monitoramento Atmosférico"){

        configOperacao.radiacaoMin = 5;
        configOperacao.radiacaoMax = 15;

    }

    else if(operacaoSalva.tipoOperacao ===
    "Análise de Radiação"){

        configOperacao.radiacaoMin = 25;
        configOperacao.radiacaoMax = 50;

    }

    else if(operacaoSalva.tipoOperacao ===
    "Pesquisa Climática"){

        configOperacao.temperaturaMin -= 20;
        configOperacao.temperaturaMax -= 10;

    }

    else if(operacaoSalva.tipoOperacao ===
    "Comunicação Orbital"){

        configOperacao.combustivelMin = 40;
        configOperacao.combustivelMax = 70;

    }

    // DESCRIÇÃO

    descricaoMissao.innerText =
    configOperacao.descricao;

    // LOG INICIAL

    const novoLog =
    document.createElement("p");

    novoLog.innerText =
    `🚀 Operação ${operacaoSalva.nome} iniciada em ${operacaoSalva.destino}.`;

    logs.appendChild(novoLog);

}

// =====================
// MONITORAMENTO
// =====================

// TEMPERATURA

function atualizarTemperatura(){

    let valor =

    Math.floor(

        Math.random() *

        (
            configOperacao.temperaturaMax -
            configOperacao.temperaturaMin
        )

    )

    + configOperacao.temperaturaMin;

    temperatura.innerText =
    valor + "°C";

}

// ENERGIA

function atualizarEnergia(){

    let valor =
    Math.floor(Math.random() * 20) + 80;

    energia.innerText =
    valor + "%";

}

// COMBUSTÍVEL

function atualizarCombustivel(){

    let valor =

    Math.floor(

        Math.random() *

        (
            configOperacao.combustivelMax -
            configOperacao.combustivelMin
        )

    )

    + configOperacao.combustivelMin;

    combustivel.innerText =
    valor + "%";

}

// RADIAÇÃO

function atualizarRadiacao(){

    let valor =

    Math.floor(

        Math.random() *

        (
            configOperacao.radiacaoMax -
            configOperacao.radiacaoMin
        )

    )

    + configOperacao.radiacaoMin;

    radiacao.innerText =
    valor + " RAD";

}

// COMUNICAÇÃO

function atualizarComunicacao(){

    const estados = [

        "Estável",
        "Oscilando",
        "Sinal Fraco"

    ];

    comunicacao.innerText =

    estados[
        Math.floor(Math.random() * estados.length)
    ];

}

// ALERTAS

function atualizarAlertas(){

    const mensagens = [

        "✔ Sistemas operando normalmente.",

        "⚠ Oscilação detectada na comunicação orbital.",

        "⚠ Ajuste automático de rota executado.",

        "⚠ Nível de radiação acima do esperado."

    ];

    alerta.innerText =

    mensagens[
        Math.floor(Math.random() * mensagens.length)
    ];

}

// LOGS

function adicionarLogs(){

    const mensagens = [

        "✔ Sensores ambientais atualizados.",

        "✔ Dados científicos enviados para a central.",

        "✔ Coleta atmosférica concluída.",

        "✔ Nave estabilizada com sucesso.",

        "✔ Processamento climático realizado."

    ];

    const novoLog =
    document.createElement("p");

    novoLog.innerText =

    mensagens[
        Math.floor(Math.random() * mensagens.length)
    ];

    logs.appendChild(novoLog);

}

// EXECUÇÃO

if(temperatura){

    atualizarTemperatura();

    atualizarEnergia();

    atualizarCombustivel();

    atualizarRadiacao();

    atualizarComunicacao();

    setInterval(atualizarTemperatura, 4000);

    setInterval(atualizarEnergia, 5000);

    setInterval(atualizarCombustivel, 6000);

    setInterval(atualizarRadiacao, 7000);

    setInterval(atualizarComunicacao, 5000);

    setInterval(atualizarAlertas, 7000);

    setInterval(adicionarLogs, 6000);

}