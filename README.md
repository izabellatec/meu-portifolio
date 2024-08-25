<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>portifolo izabella Christine</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
    crossorigin="anonymous" referrerpolicy="no-referrer" /> 
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap">


  <link rel="stylesheet" href="assets/fonts/neue-machina-.zip">
  <link rel="stylesheet" href="assets/css/header.css">
  <link rel="stylesheet" href="assets/css/global.css">
  <link rel="stylesheet" href="/assets/css/acordeon.css">
  <link rel="stylesheet" href="/assets/css/languages.css">
  <link rel="stylesheet" href="/assets/css/portfolio.css">
  <link rel="stylesheet" href="assets/css/experience.css">
  <link rel="stylesheet" href="/assets/css/skills.css">
  <link rel="stylesheet" href="/assets/css/footer.css">
  </head>

<body>

    <main class="main">
        <header class="header">
            <img src="assets/img/my-photo.png" alt="Foto de Perfil" class="photo" id="profile.photo">

            <h1 class="title">
                Olá, <br>eu sou <span id="profile.name">Carregando...</span>
            </h1>

            <div class="informations">
                <p class="job" id="profile.job">Carregando...</p>
                <p class="location" id="profile.location">Carregando...</p>
                <p class="phone">
                    <a href="tel:(91)98880-8274" id="profile.phone">Carregando...</a>
                </p>
                <p class="email">
                    <a href="mailto:ex@mail.com" id="profile.email">carregando@mail.com</a>
                </p>
            </div>
        </header>

        <section class="acordeon">
            <button class="trigger" type="button">
                <h2>Skills</h2>
            </button>

            <div class="content">
                <div class="skills">
                    <section class="tools">
                        <h3>Ferramentas:</h3>
                        <ul id="profile.skills.hardSkills">
                        </ul>
                    </section>

                    <section class="personal">
                        <h3>Pessoal:</h3>
                        <ul id="profile.skills.softSkills">
                            <li>Carregando...</li>
                            <li>Carregando...</li>
                            <li>Carregando...</li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>

        <section class="acordeon">
            <button class="trigger" type="button">
                <h2>Idiomas</h2>
            </button>

            <div class="content">
                <ul class="languages" id="profile.languages">
                    <li>Carregando...</li>
                </ul>
            </div>
        </section>

        <section class="acordeon">
            <button class="trigger" type="button">
                <h2>Portfólio</h2>
            </button>

            <div class="content">
                <ul class="portfolio" id="profile.portfolio">
                </ul>
            </div>
        </section>

        <section class="acordeon">
            <button class="trigger" type="button">
                <h2>Experiência Profissional</h2>
            </button>

            <div class="content">
                <ul class="experience" id="profile.professionalExperience">
                </ul>
            </div>
        </section>

        <footer>
            <a href="https://www.dio.me/" target="_blank">
                <img src="/assets/img/dio.svg" alt="DIO">
            </a>
        </footer>

    
    </main>
       
   
      
</div>
  <script src="/assets/js/acordeon.js"></script>
  <script src="/assets/js/api.js"></script>
  <script src="/assets/js/main.js"></script>
</body>
</html>
