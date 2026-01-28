# Portfólio Pessoal – Gustavo Santos Teixeira

Este projeto consiste em um portfólio pessoal desenvolvido como uma aplicação web estática, cujo objetivo é apresentar de forma organizada e acessível informações acadêmicas, profissionais, projetos de programação e produções científicas do autor. A aplicação foi construída utilizando HTML, CSS e JavaScript, com apoio do framework Tailwind CSS para estilização e da biblioteca Font Awesome para ícones.

O portfólio foi projetado para ser leve, responsivo e facilmente navegável, funcionando inteiramente no lado do cliente, sem dependência de backend ou banco de dados. Todo o conteúdo é carregado diretamente no navegador, o que torna o projeto simples de hospedar e manter.

# Estrutura Geral da Aplicação

A aplicação está organizada em um único arquivo HTML que concentra a estrutura da página, os estilos personalizados e a lógica de interação. Essa abordagem facilita a portabilidade do projeto, permitindo que ele seja executado localmente ou publicado em serviços de hospedagem estática sem necessidade de configuração adicional.

A página é composta por três grandes blocos: cabeçalho, conteúdo principal e rodapé. Cada bloco possui responsabilidades bem definidas, garantindo clareza visual e separação conceitual das informações.

# Cabeçalho e Identidade Visual

O cabeçalho apresenta o nome completo do autor, sua formação acadêmica e a instituição de ensino, funcionando como um resumo inicial do perfil profissional. Também estão presentes links diretos para perfis externos relevantes, como GitHub, LinkedIn e e-mail, facilitando o contato e a navegação para repositórios de código e redes profissionais.

Um botão de alternância de idioma permite que o usuário altere dinamicamente o conteúdo da página entre português e inglês. Essa funcionalidade amplia o alcance do portfólio, tornando-o acessível a um público internacional sem a necessidade de múltiplas páginas ou recarregamento do site.

# Conteúdo Principal e Organização em Seções

O conteúdo principal do portfólio é organizado em seções expansíveis, que podem ser abertas ou fechadas pelo usuário. Essa abordagem reduz a poluição visual e permite que o visitante explore apenas as informações de interesse.

A seção de programação reúne projetos desenvolvidos em diferentes linguagens e tecnologias, como Java, Python, C, JavaScript, Node.js, React e ASP.NET. Cada projeto é apresentado com um título, uma breve descrição técnica e links para seus respectivos repositórios ou materiais complementares. Essa organização permite demonstrar diversidade técnica, experiência prática e evolução ao longo da formação acadêmica.

A seção de pesquisas apresenta produções científicas do autor, incluindo título, resumo e identificadores digitais persistentes (DOI). O texto descritivo destaca o contexto do trabalho, os objetivos da pesquisa e as principais contribuições, evidenciando experiência com pesquisa acadêmica, modelagem formal e análise de sistemas complexos.

A seção de formação acadêmica descreve o curso de Bacharelado em Ciência da Computação, a instituição, o período de realização e um conjunto de disciplinas cursadas. Essa parte do portfólio fornece uma visão estruturada da base teórica e técnica adquirida ao longo da graduação, complementando as experiências práticas mostradas nos projetos.

# Sistema de Internacionalização

O projeto implementa um sistema de internacionalização inteiramente em JavaScript, baseado em um objeto de traduções que mapeia identificadores de elementos HTML para seus respectivos textos em português e inglês. A troca de idioma ocorre dinamicamente, sem recarregar a página, por meio da manipulação direta do DOM.

A preferência de idioma do usuário é armazenada no localStorage do navegador, garantindo persistência entre sessões. Ao carregar a página, o sistema verifica se existe um idioma previamente salvo e o aplica automaticamente, proporcionando uma experiência personalizada.

# Interatividade e Comportamento Dinâmico

As seções expansíveis são controladas por funções JavaScript que manipulam propriedades de estilo, como altura máxima e rotação de ícones, criando animações suaves e intuitivas. Esse comportamento melhora a usabilidade e reforça a sensação de organização do conteúdo.

Além disso, o projeto utiliza eventos de carregamento da página para inicializar o idioma correto e configurar os manipuladores de interação, garantindo que todos os elementos estejam prontos para uso assim que o site é exibido.

# Estilização e Responsividade

A estilização do portfólio combina utilitários do Tailwind CSS com estilos CSS personalizados. Essa combinação permite manter um design limpo, consistente e responsivo, adaptando-se adequadamente a diferentes tamanhos de tela, desde dispositivos móveis até monitores maiores.

O uso de cores neutras, tipografia simples e espaçamento equilibrado reforça a legibilidade e transmite uma aparência profissional, adequada tanto para contextos acadêmicos quanto para apresentações no mercado de trabalho.

# Rodapé e Acesso a Materiais Complementares

O rodapé do portfólio apresenta novamente a identificação do autor e disponibiliza links diretos para download do currículo em formato PDF e para contato por e-mail. Essa seção funciona como um ponto final claro da navegação, oferecendo caminhos diretos para ações relevantes após a exploração do conteúdo.
