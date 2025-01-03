
const projects = [
    {name: "Página de Links - HTML, CSS", description: "Página web criada com o objetivo de exibir as redes sociais e repositórios.", repository: "https://github.com/GustavoST868/links_page"},
    {name: "Jogo de Corrida Simples - Java", description: "Projeto criado com o objetivo de praticar noções de programação.", repository: "https://github.com/GustavoST868/jogo-de-corrida-simples"},
    {name: "API de Usuário e Senha - Java", description: "Armazena os usuários e senhas, além de salvá-los, garantindo que não sejam perdidos ao fechar o programa.", repository: "https://github.com/GustavoST868/api-usuarios"},
    {name: "Portfólio", description: "Projeto para apresentar informações de contato e exibir os projetos desenvolvidos.", repository: "https://github.com/GustavoST868/portfolio"},
    {name: "Interface Humano-Computador", description: "Materiais do componente curricular voltado aos fundamentos da interação entre humanos e computadores.", repository: ""},
    {name: "Algoritmos - Python", description: "Algoritmos simples para treinar lógica de programação.", repository: "https://github.com/GustavoST868/algoritmos_em_python"},
    {name: "Estrutura de Dados - C", description: "Projeto desenvolvido para praticar estrutura de dados e armazenar os arquivos das disciplinas ED1 e ED2 na faculdade.", repository: "https://github.com/GustavoST868/estrutura_de_dados"},
    {name: "Algoritmos e Programação - C", description: "Repositório para armazenar materiais e algoritmos desenvolvidos nas disciplinas AP1 e AP2 na faculdade.", repository: "https://github.com/GustavoST868/algoritmos_e_programacao_faculdade"},
    {name: "Banco de Dados - MariaDB", description: "Repositório com os arquivos relacionados à disciplina de Banco de Dados na faculdade.", repository: "https://github.com/GustavoST868/banco_de_dados_faculdade"},
    {name: "Algoritmo de Kruskal - C", description: "Implementação do algoritmo de grafos para encontrar a árvore geradora mínima.", repository: "https://github.com/GustavoST868/algoritmo_de_kruskal_c"},
    {name: "Sistema de Tarefas - Java", description: "Sistema simples para gerenciar atividades, com a implementação de fundamentos básicos de criptografia.", repository: "https://github.com/GustavoST868/sistema_de_listas_de_tarefas"},
    {name: "Engenharia de Software", description: "Repositório criado para armazenar os arquivos da disciplina de Engenharia de Software na faculdade.", repository: "https://github.com/GustavoST868/engenharia_de_software"},
    {name: "Lógica para Ciência da Computação", description: "Repositório para armazenar os arquivos da disciplina de Lógica na faculdade.", repository: "https://github.com/GustavoST868/logica_para_ciencias_da_computacao"},
    {name: "Empreendedorismo", description: "Repositório para armazenar os arquivos da disciplina de Empreendedorismo na faculdade.", repository: "https://github.com/GustavoST868/empreendedorismo_faculdade"},
    {name: "Arquitetura de Computadores - Assembly", description: "Repositório para armazenar os arquivos da disciplina de Arquitetura de Computadores na faculdade.", repository: ""},
    {name: "Estrutura de Armazenamento - C#", description: "Implementação de um sistema de armazenamento e análise de dados, utilizando classes para organizar funcionalidades de inserção, remoção, busca, impressão e salvamento de dados.", repository: "https://github.com/GustavoST868/estrutura_de_armazenamento_csharp"},
    {name: "Aplicação de Vendas Simples - Python", description: "Estrutura para simular um ambiente de vendas de produtos com orientação a objetos e modelagem de vendas.", repository: "https://github.com/GustavoST868/vendas_python_back-end"},
    {name: "Diagrama C4", description: "Utilização do PlantUML para criar diagramas seguindo o modelo C4.", repository: "https://github.com/GustavoST868/c4_plantuml"},
    {name: "Página Web de Vendas Simples - Python, HTML, CSS", description: "Site simples para venda de produtos online, desenvolvido com Python.", repository: "https://github.com/GustavoST868/vendas_web_python"},
    {name: "Restaurante Universitário - Java", description: "Sistema de restaurante universitário desenvolvido nas aulas de Programação Orientada a Objetos.", repository: "https://github.com/GustavoST868/restaurante_universitario_java"},
    {name: "Algoritmos - Java", description: "Repositório criado para armazenar algoritmos de lógica de programação utilizando a linguagem Java.", repository: "https://github.com/GustavoST868/algoritmos_em_java"},
    {name: "Aplicação de Investimentos - C#, HTML, CSS, JavaScript", description: "Trabalho da disciplina de Paradigmas de Programação, utilizando a linguagem F# como back-end para uma aplicação web.", repository: "https://github.com/GustavoST868/trabalho_de_linguagem_funcional"},
    {name: "Minecraft2D - Java", description: "Jogo estilo Minecraft desenvolvido durante as aulas de Programação Orientada a Objetos na faculdade.", repository: "https://github.com/GustavoST868/minecraft2d_poo"},
    {name: "Formulário Web - Python, SQLITE", description: "Aplicação para registro de informações do usuário, utilizando a linguagem Python e a biblioteca Flask para o back-end. O banco de dados utilizado é o SQLite.", repository: "https://github.com/GustavoST868/formulario_de_registro_web_python"},
    {name: "Algoritmos - C", description: "Repositório com algoritmos desenvolvidos em linguagem C, com o objetivo de treinar lógica de programação.", repository: "https://github.com/GustavoST868/algoritmos_em_c"},
    {name: "Portfólio Simples - HTML,CSS,JavaScript", description: "Portfolio simples, voltado a mostrar as informações de modo claro. ", repository: "https://github.com/GustavoST868/Portfolio-Simples"},
    {name: "Anotações Referentes a Livros", description: "Repositório para guardar anotações que fiz durante a leitura de livros.", repository: "https://github.com/GustavoST868/Anotacoes-Livros"},
    {name: "Cia de Pulverização - JavaScritp, Vite, CSS e HTML", description: "Algoritmo destinado a resolver um problema de programação. ", repository: "https://github.com/GustavoST868/cia-de-pulverizacao.git"}
];




function displayProjects(projectsToDisplay) {
    const projectLists = document.getElementById('projectsList');
    projectLists.innerHTML = ''; 

 
    projectsToDisplay.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
        <a href="${project.repository}">
            <h3>${project.name}</h4><br>
                <p>${project.description}</p><br>
        </a>
        `;
        projectLists.appendChild(projectElement);
    });
}

function searchProjects() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase(); 

    if (searchTerm === '') {
        displayProjects(projects); 
    } else {

        
        const filteredProjects = projects.filter(
            project => project.name.toLowerCase().includes(searchTerm)
        );
        displayProjects(filteredProjects); 
    }
}


displayProjects(projects);


document.getElementById('searchBar').addEventListener('keyup', searchProjects);
