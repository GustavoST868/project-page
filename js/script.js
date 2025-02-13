const projetos = [

    {
        name: "Sistemas de Lista de Tarefas",
        technologies: ["Java"],
        description: "Criar um algoritmo que tenhas as funcionalidades de criar, deletar, pesquisar, editar tarefas e mostrar tarefas no prompt. Outros recursos implementados foram a listagem de usuário criados, retornar a lista de prioridade de tarefas, conteúdos, usuários, criptografia e descriptografia por algoritmo simples, e uma classe para verificar o tipo dos dados que chegavam, com intuito de alterar o modo como o algoritmo lida com a entrada dado o tipo da informação.",
        repository: "https://github.com/GustavoST868/java/tree/main/sistema_de_listas_de_tarefas",
        deploy: ""
    },

    {
        name: "API de Usuários",
        technologies: ["Java", "SpringBoot"],
        description: "Algoritmo que contém as classes Store, User e UserController. A classe Store implementa métodos para armazenar e carregar os usuários e senhas. A classe User possui métodos para getters e setters simples, juntamente com métodos para criação, deleção, atualização, verificação de existência e disponibilização dos dados. Além de métodos para contagem dos usuários armazenados.",
        deploy: ""
    },

    {
        name: "Formulário de Registro Web",
        technologies: ["HTML", "CSS", "JavaScript", "Python"],
        description: "Projeto para receber dados de um usuário e salvá-lo em uma espécie de banco de dados. Utilizei Flask Python para subir a aplicação para o local host e armazenei os dados em um banco SQLite. Como os dados remetiam a um período de validade, com seu vencimento, os dados referentes aquele registro eram apagados automaticamente. Implementei uma página para mostrar os dados em forma de tabela e rotas para gerenciar as informações.",
        repository: "https://github.com/GustavoST868/python/tree/main/formulario_de_registro_web_python",
        deploy: ""
    },


    {
        name: "Formulário de Registro de Dados",
        technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL","C#","ASP .NET"],
        description: "Criei um formulário simples que consome uma API, ambos ASP .NET. A API gerencia a troca de informações e operações entre o banco de dados PostgreSQL e a aplicação Web. Implementei métodos e rotas relacionados as operações básicas(CRUD).",
        repository: "https://github.com/GustavoST868/formulario-web-asp-net",
        deploy: ""
    },
   
];

const rep = [

    {
        name: "HTML, CSS e JavaScript",
        description: "Armazena pequenos projetos para treinar ferramentas voltadas para desenvolvimentos Web. Nele, há arquivos de resolução de questões de programação cuja interface foi desenvolvida para navegador.",
        repository: "https://github.com/GustavoST868/formulario-web-asp-net"
    },

    {
        name: "Python",
        description: "Repositório para guardar algoritmo que desenvolvi durante a prática de lógica de programação. Alguns dos algoritmos exemplificam a utilização de banco de dados e  criação de interfaces simples.",
        repository: "https://github.com/GustavoST868/formulario-web-asp-net"
    },

    {
        name: "C",
        description: "Algoritmos desenvolvidos durante a aprendizagem da linguagem. Muitos dos algoritmos aqui depositados foram criados durante a faculdade, nas matérias de AP1 e AP2.",
        repository: "https://github.com/GustavoST868/formulario-web-asp-net"
    },

    {
        name: "Java",
        description: "Soluções desenvolvidas para praticar lógica de programação. Os algoritmos envolvem programação orientada a objetos, questões de programação e desenvolvimento Web.",
        repository: "https://github.com/GustavoST868/formulario-web-asp-net"
    },

    {
        name: "Faculdade",
        description: "Arquivos produzidos durante a faculdade. Contém algoritmos desenvolvidos nas matérias e outros tipos de trabalhos.",
        repository: "https://github.com/GustavoST868/formulario-web-asp-net"
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
                <a style="margin-right: 2%;" href="https://github.com/GustavoST868"><img src="./icon/github.png" alt=""></a>
                <a style="margin-right: 2%;" href="https://www.linkedin.com/in/gustavo-santos-teixeira-0a68b327b"><img src="./icon/linkedin.png" alt="" style="margin-left: 1%;"></a>
                <a href="https://mail.google.com/mail/u/0/?to=gustavosantosteixeira98@gmail.com&fs=1&tf=cm"><img src="./icon/email.png" alt="" style="margin-left: 1%;"></a>
            </div>
        </div>
    `;
}


function Projects(){
    const right = document.getElementById('right');
    right.innerHTML = `
        <div class="container-project" id="container-project"></div>
    `;

    const container = document.getElementById("container-project"); 

    projetos.forEach(projeto => {
        const divProjeto = document.createElement("div");
        divProjeto.classList.add("project-content");
        
        const nome = document.createElement("p");
        nome.classList.add("project-name"); 
        nome.innerHTML = "<strong style='color: rgb(0, 55, 158);font-size:110%;margin-top:3px'>"+projeto.name+"</strong>";

        const tecnologias = document.createElement("p");
        tecnologias.classList.add("project-technologies"); 
        tecnologias.innerHTML = "<strong>Tecnologias:</strong>" +"<br>"+projeto.technologies.join(", ");

        const descricao = document.createElement("p");
        descricao.classList.add("project-description"); 
        descricao.innerHTML = "<strong>Descrição:</strong>" +"<br>"+ projeto.description;

        const repositorio = document.createElement("a");
        repositorio.classList.add("project-repository"); 
        repositorio.href = projeto.repository;
        repositorio.innerHTML = '<p style = "margin-top: 10px;color: rgb(0, 89, 255);" >GitHub</p>';
        repositorio.target = "_blank"; 

        const deploy = projeto.deploy ? document.createElement("a") : null;
        if (deploy) {
            deploy.classList.add("project-deploy");
            deploy.href = projeto.deploy;
            deploy.innerHTML = '<p style = "margin-top: 0px;color: rgb(0, 89, 255);">Deploy</p>';
            deploy.target = "_blank"; 
        }

        divProjeto.appendChild(nome);
        divProjeto.appendChild(tecnologias);
        divProjeto.appendChild(descricao);
        divProjeto.appendChild(repositorio);
        if (deploy) divProjeto.appendChild(deploy);
        container.appendChild(divProjeto);
    });
}



function Repository(){
    const right = document.getElementById('right');
    right.innerHTML = `
        <div class="container-repository" id="container-repository">
        </div>
    `;

    const containerRepository = document.getElementById('container-repository');

    rep.forEach(element => {
        const repositoryContent = document.createElement('div');
        repositoryContent.classList.add('repository-content');

        const nameRepository = document.createElement('p');
        nameRepository.classList.add('name-repository');
        nameRepository.innerHTML = `<strong style='color: rgb(0, 55, 158);font-size:110%;margin-top:3px'>${element.name}</strong>`;

        const descriptionRepository = document.createElement('p');
        descriptionRepository.classList.add('description-repository');
        descriptionRepository.innerHTML = `<strong>Descrição:</strong><br>${element.description}`;


        const linkRepository = document.createElement('a');
        linkRepository.classList.add('link-repository');
        linkRepository.href = element.repository;
        linkRepository.innerHTML = `<p style="margin-top:'10px;color:rgb(7, 89, 241);">GitHub</p>`;
        linkRepository.target = "_blank";



        repositoryContent.appendChild(nameRepository);
        repositoryContent.appendChild(descriptionRepository);
        repositoryContent.appendChild(linkRepository);
        containerRepository.appendChild(repositoryContent);
    });

    
}

About();
document.getElementById('button-about').addEventListener('click',About);
document.getElementById('button-projects').addEventListener('click',Projects);
document.getElementById('button-repository').addEventListener('click',Repository);