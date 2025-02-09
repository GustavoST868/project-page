const projetos = [

    {
        name: "Link Page",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "O objetivo deste projeto foi criar uma página simples para reunir todos os links relacionado a mim. Construí a estrutura do projeto com o Vite e fiz a janela o mais simples possível. Na interface, estão disponíveis os links para o GitHub, Linkedin, Instagram, currículo e página de projetos.",
        repository: "https://github.com/GustavoST868/links_page",
        deploy: "",
        image: "./img/link-page.png",
    },

    {
        name: "Sistemas de Lista de Tarefas",
        technologies: ["Java"],
        description: "Criar um algoritmo que tenhas as funcionalidades de criar, deletar, pesquisar, editar tarefas e mostrar tarefas no prompt. Outros recursos implementados foram a listagem de usuário criados, retornar a lista de prioridade de tarefas, conteúdos, usuários, criptografia e descriptografia por algoritmo simples, e uma classe para verificar o tipo dos dados que chegavam, com intuito de alterar o modo como o algoritmo lida com a entrada dado o tipo da informação.",
        repository: "https://github.com/GustavoST868/java/tree/main/sistema_de_listas_de_tarefas",
        deploy: "",
        image: "#",
    },

    {
        name: "API de Usuários",
        technologies: ["Java", "SpringBoot"],
        description: "Algoritmo que contém as classes Store, User e UserController. A classe Store implementa métodos para armazenar e carregar os usuários e senhas. A classe User possui métodos para getters e setters simples, juntamente com métodos para criação, deleção, atualização, verificação de existência e disponibilização dos dados. Além de métodos para contagem dos usuários armazenados.",
        repository: "https://github.com/GustavoST868/java/tree/main/api-usuarios",
        deploy: "",
        image: "",
    },

    {
        name: "Formulário de Registro Web",
        technologies: ["HTML", "CSS", "JavaScript", "Python"],
        description: "Projeto para receber dados de um usuário e salvá-lo em uma espécie de banco de dados. Utilizei Flask Python para subir a aplicação para o local host e armazenei os dados em um banco SQLite. Como os dados remetiam a um período de validade, com seu vencimento, os dados referentes aquele registro eram apagados automaticamente. Implementei uma página para mostrar os dados em forma de tabela e rotas para gerenciar as informações.",
        repository: "https://github.com/GustavoST868/python/tree/main/formulario_de_registro_web_python",
        deploy: "",
        image: "",
    },


    {
        name: "Formulário de Registro de Dados",
        technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL","C#","ASP .NET"],
        description: "Criei um formulário simples que consome uma API, ambos ASP .NET. A API gerencia a troca de informações e operações entre o banco de dados PostgreSQL e a aplicação Web. Implementei métodos e rotas relacionados as operações básicas(CRUD).",
        repository: "https://github.com/GustavoST868/formulario-web-asp-net",
        deploy: "",
        image: "./img/formulario-dotnet.jpg",
    },
   
];

function About(){
    const right = document.getElementById('right');
    right.innerHTML = `
        <div class="about" id="about">
            <p class="apresentation-title">Olá, meu nome é <strong style="color: rgb(42, 34, 87);">Gustavo</strong>,</p>
                <p class="apresentation-content"> 
                    Sou estudante de Ciência da Computação na Universidade Federal de Jataí.
                    Construí esta página para mostrar os projetos que desenvolvi ao longo da minha trajetória na programação. 
                    Ela conterá uma descrição detalhada das ferramentas e da lógica que utilizei para criar os algoritmos.
                </p>
            <div class="icon-link">
                <a href="https://github.com/GustavoST868"><img src="./icon/github.png" alt=""></a>
                <a href="https://www.linkedin.com/in/gustavo-santos-teixeira-0a68b327b"><img src="./icon/linkedin.png" alt="" style="margin-left: 1%;"></a>
            </div>
        </div>
    `;
    document.getElementById('button-skills').addEventListener('click',Skills);
}

function Skills(){
    const right = document.getElementById('right');
    right.innerHTML = `
        <div class="skills" id="skills">
            <p class="skills-title"><strong style="color: rgb(42, 34, 87);">Habilidades</strong></p>
                <p class="skills-content">HTML, CSS e JavaScript (Intermediário)</p>
                <p class="skills-content">C e Java (Intermediário)</p>
                <p class="skills-content">SQL (Intermediário)</p>
                <p class="skills-content">MariaDB e PostgreSQL (Intermediário)</p>
        </div>
    `;
}

function Projects(){
    const right = document.getElementById('right');
    right.innerHTML = `
        <div class="container-project" id="container-project">
            
        </div>
    `;

    const container = document.getElementById("container-project"); 

    projetos.forEach(projeto => {
        const divProjeto = document.createElement("div");
        divProjeto.classList.add("project-content");
        
        const nome = document.createElement("p");
        nome.classList.add("project-name"); 
        nome.innerHTML = "<br><strong style='color: rgb(0, 33, 94);font-size:110%;margin-top:10px'>"+projeto.name+"</strong>";

        const tecnologias = document.createElement("p");
        tecnologias.classList.add("project-technologies"); 
        tecnologias.innerHTML = "<strong>Tecnologias:</strong>" +"<br>"+projeto.technologies.join(", ");

        const descricao = document.createElement("p");
        descricao.classList.add("project-description"); 
        descricao.innerHTML = "<strong>Descrição:</strong>" +"<br>"+ projeto.description;

        const repositorio = document.createElement("a");
        repositorio.classList.add("project-repository"); 
        repositorio.href = projeto.repository;
        repositorio.innerHTML = '<p style = "margin-top: 10px;color: rgb(0, 33, 94);text-decoration:none;" >GitHub</p>';
        repositorio.target = "_blank"; 

        const deploy = projeto.deploy ? document.createElement("a") : null;
        if (deploy) {
            deploy.classList.add("project-deploy");
            deploy.href = projeto.deploy;
            deploy.innerHTML = '<p style = "margin-top: -15px;color: rgb(0, 33, 94);">Deploy</p>';
            deploy.target = "_blank"; 
        }

        // Corrigir a inserção da imagem criando um elemento separado
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("project-image"); // Adiciona uma classe para estilizar a imagem

        const img = document.createElement("img");
        img.src = projeto.image;
        img.alt = projeto.name; // Coloque um alt relevante
        imgDiv.appendChild(img); // Adiciona a imagem ao div
        
        // Adiciona os elementos ao projeto
        divProjeto.appendChild(nome);
        divProjeto.appendChild(tecnologias);
        divProjeto.appendChild(descricao);
        divProjeto.appendChild(repositorio);
        if (deploy) divProjeto.appendChild(deploy);
        divProjeto.appendChild(imgDiv); // Coloca o contêiner da imagem no final
        
        container.appendChild(divProjeto);
    });
}


About();

document.getElementById('button-about').addEventListener('click',About);
document.getElementById('button-skills').addEventListener('click',Skills);
document.getElementById('button-projects').addEventListener('click',Projects);