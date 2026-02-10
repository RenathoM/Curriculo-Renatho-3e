<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Currículo - Larissa</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Container principal -->
  <div class="container">

    <!-- Cabeçalho -->
    <div class="header">
      <img src="https://i.pinimg.com/474x/f9/7f/cd/f97fcdffe027258f8a6ac8fdf9e42686.jpg" 
      alt="Foto de perfil">
      <h1>Seu Nome Completo</h1>
      <p>Nacionalidade, Sua Idade</p>
      <p>Sua Cidade – Seu Estado</p>
      <p>📞 (00) 00000-0000 | ✉ seuemail@exemplo.com</p>
      <p>
        <a href="https://www.linkedin.com/in/seu-usuario">LinkedIn</a> |
        <a href="https://lattes.cnpq.br/seu-codigo">Currículo Lattes</a> |
        <a href="https://github.com/seuusuario">GitHub</a>
      </p>
    </div>

    <!-- Perfil -->
    <h2>Perfil</h2>
    <p>Seu perfil profissional em 3–5 linhas. Fale sobre suas áreas de interesse, principais habilidades e objetivos de carreira.</p>

    <!-- Formação -->
    <h2>Formação</h2>
    <ul>
      <li>Seu Curso – Sua Instituição (AAAA–AAAA)</li>
      <li>Outro Curso/Certificação – Instituição (AAAA–AAAA)</li>
      <li>Curso em andamento – Instituição (AAAA) – Cursando</li>
    </ul>

    <!-- Experiência Profissional -->
    <h2>Experiência Profissional</h2>
    <ul>
      <li><b>Seu Cargo</b> – Nome da Empresa (MMM/AAAA – MMM/AAAA)</li>
      <li><b>Seu Cargo</b> – Nome da Empresa (MMM/AAAA – Atual)</li>
    </ul>

    <!-- Projetos -->
    <h2>Projetos</h2>
    <ul>
      <li><b>Nome do Projeto</b> (AAAA) – Breve descrição, tecnologias usadas e seu papel.</li>
      <li><b>Outro Projeto</b> (AAAA) – O que foi feito, impacto e stack.</li>
    </ul>

    <!-- Qualificações -->
    <h2>Qualificações</h2>
    <ul>
      <li>Habilidade/Competência 1</li>
      <li>Habilidade/Competência 2</li>
      <li>Habilidade/Competência 3</li>
    </ul>

    <!-- Idiomas -->
    <h2>Idiomas</h2>
    <ul>
      <li>Inglês – Nível (ex.: B2)</li>
      <li>Outro Idioma – Nível</li>
    </ul>

    <!-- Informações Adicionais -->
    <h2>Informações Adicionais</h2>
    <ul>
      <li>Tecnologias: HTML, CSS, JavaScript, Python, …</li>
      <li>Ferramentas: Pacote Office, Git, Figma, …</li>
      <li>Outros: Edição de imagens, participação em eventos, voluntariado, …</li>
    </ul>

  </div>
</body>
</html>



/* ======== ESTILO BASE DO SITE ======== */
body {
  font-family: Arial, sans-serif;   /* Fonte padrão usada em toda a página */
  background-color: #f4f4f4;        /* Cor de fundo cinza claro */
  margin: 0;                        /* Remove a margem padrão do navegador */
  padding: 0;                       /* Remove o espaçamento interno padrão */
}

/* ======== CONTAINER PRINCIPAL ======== */
.container {
  max-width: 900px;                 /* Largura máxima do currículo = 900px */
  margin: 40px auto;                /* 40px em cima/baixo + auto nas laterais -> centraliza no meio */
  background: #fff;                 /* Fundo branco dentro do cartão */
  padding: 30px;                    /* Espaço interno para afastar o texto da borda */
  box-shadow: 0 4px 10px rgba(0,0,0,.1); /* Sombra leve embaixo do container */
  border-radius: 10px;              /* Bordas arredondadas */
}

/* ======== CABEÇALHO (foto + nome + contatos) ======== */
.header {
  text-align: center;               /* Centraliza todo o conteúdo dentro do cabeçalho */
  margin-bottom: 20px;              /* Espaço abaixo do cabeçalho */
}

/* Estilo da foto do perfil */
.header img {
  width: 150px;                     /* Largura da foto */
  height: 150px;                    /* Altura da foto */
  object-fit: cover;                /* Mantém a proporção da foto sem distorcer */
  border-radius: 50%;               /* Transforma a foto em um círculo */
  border: 3px solid #2b6cb0;        /* Borda azul ao redor da foto */
}

/* Nome principal (H1) */
.header h1 {
  margin: 15px 0 5px;               /* Espaço em cima (15px), embaixo (5px) */
  color: #2b6cb0;                   /* Cor azul do título */
}

/* Informações do cabeçalho (idade, cidade, contato) */
.header p {
  margin: 2px 0;                    /* Espaçamento pequeno entre as linhas */
  color: #555;                      /* Cor cinza escuro para o texto */
}

/* ======== TÍTULOS DE SEÇÃO (H2) ======== */
    h2 {
    color: #2b6cb0;                   /* Cor azul do título */
    border-bottom: 2px solid #2b6cb0; /* Linha azul logo abaixo do título */
    padding-bottom: 5px;              /* Espaço entre o texto e a linha */
    margin-top: 30px;                 /* Espaço acima de cada seção */
    }

    /* ======== TEXTO (parágrafos e itens de lista) ======== */
    p,
    li {
    text-align: justify;              /* Texto justificado (alinha dos dois lados) */
  line-height: 1.6;                 /* Aumenta o espaçamento entre linhas -> melhora leitura */
}

/* ======== LISTAS ======== */
ul {
  list-style: none;                 /* Remove os marcadores padrão (bolinha preta) */
  padding: 0;                       /* Remove espaçamento interno da lista */
}

/* Criação de marcadores personalizados */
ul li::before {
  content: "• ";                    /* Insere uma bolinha manualmente antes de cada item */
  color: #2b6cb0;                   /* Define a cor da bolinha (azul) */
  font-weight: bold;                /* Deixa a bolinha mais grossa/forte */
}