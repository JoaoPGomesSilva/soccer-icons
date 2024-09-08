let dados = [
    {
        nome: "Edson Arantes (Pelé)",
        idade: 82, // Idade ao falecer
        titulos: ["Copa do Mundo (3x)", "Campeonato Brasileiro", "Copa Libertadores"],
        descricao: "Conhecido como o Rei do Futebol, Pelé foi o maior jogador de todos os tempos, com habilidades únicas e gols memoráveis.",
        atuando: false,
        tags: ["pele"],
        esporte: "futebol",
        falecimento: "29 de dezembro de 2022",
        posicao: "Atacante",
        nacionalidade: "Brasileira",
        clubes: ["Santos", "New York Cosmos"],
        prêmios_individuais: ["Melhor Jogador do Século (FIFA)", "Bola de Ouro honorária"],
        link: "https://pt.wikipedia.org/wiki/Pel%C3%A9",
        redes_sociais: {
            instagram: "https://www.instagram.com/pele/"
        }
    },
    {
        nome: "Ruud Gullit",
        idade: 62,
        titulos: ["Eurocopa 1988", "Liga dos Campeões", "Campeonato Italiano"],
        descricao: "Ruud Gullit foi um dos maiores jogadores holandeses, reconhecido por sua técnica, força e liderança em campo.",
        atuando: false,
        esporte: "futebol",
        falecimento: null,
        posicao: "Meia",
        nacionalidade: "Holandesa",
        clubes: ["Feyenoord", "PSV", "Milan", "Chelsea"],
        prêmios_individuais: ["Bola de Ouro 1987"],
        link: "https://pt.wikipedia.org/wiki/Ruud_Gullit",
        redes_sociais: {
            instagram: "https://www.instagram.com/ruudgullit/"
        }
    },
    {
        nome: "Paolo Maldini",
        idade: 56,
        titulos: ["Liga dos Campeões (5x)", "Campeonato Italiano (7x)"],
        descricao: "Paolo Maldini foi um ícone do Milan e um dos maiores defensores da história do futebol, famoso por sua classe e liderança.",
        atuando: false,
        esporte: "futebol",
        falecimento: null,
        posicao: "Defensor",
        nacionalidade: "Italiana",
        clubes: ["Milan"],
        prêmios_individuais: ["Melhor Defensor da UEFA"],
        link: "https://pt.wikipedia.org/wiki/Paolo_Maldini",
        redes_sociais: {
            instagram: "https://www.instagram.com/paolomaldini/"
        }
    },
    {
        nome: "Diego Maradona",
        idade: 60, // Idade ao falecer
        titulos: ["Copa do Mundo", "Campeonato Italiano, Espanhol e Argentino"],
        descricao: "Um gênio do futebol, conhecido por sua habilidade individual e gols memoráveis.",
        atuando: false,
        posicao: "Meia",
        nacionalidade: "Argentino",
        esporte: "futebol",
        falecimento: "25 de novembro de 2020",
        link: "https://pt.wikipedia.org/wiki/Diego_Maradona",
        redes_sociais: {
            instagram: null // Maradona não tinha perfil oficial no Instagram
        }
    },
    {
        nome: "Johan Cruyff",
        idade: 68, // Idade ao falecer
        titulos: ["Copa dos Campeões Europeus, Campeonato Holandês, Espanhol"],
        descricao: "Um dos maiores jogadores e treinadores da história, conhecido por sua visão de jogo e filosofia total.",
        atuando: false,
        nacionalidade: "Holandesa",
        posicao: "Atacante",
        esporte: "futebol",
        falecimento: "28 de março de 2016",
        link: "https://pt.wikipedia.org/wiki/Johan_Cruyff",
        redes_sociais: {
            instagram: null // Cruyff não usava redes sociais
        }
    },
    {
        nome: "Lionel Messi",
        idade: 36,
        titulos: ["Copa do Mundo, La Liga (10x), Champions League (4x)"],
        descricao: "Considerado um dos maiores jogadores da história, Messi é conhecido por sua habilidade técnica e dribles mágicos.",
        atuando: true,
        posicao: "Meia",
        esporte: "futebol",
        tags: ["argentino"],
        nacionalidade:"Argentina",
        falecimento: null,
        link: "https://pt.wikipedia.org/wiki/Lionel_Messi",
        redes_sociais: {
            instagram: "https://www.instagram.com/leomessi/"
        }
    },
    {
        nome: "Zico",
        idade: 65,
        titulos: ["Campeonato Brasileiro, Libertadores"],
        descricao: "Considerado um dos maiores jogadores brasileiros de todos os tempos, conhecido por sua habilidade técnica e chutes potentes.",
        atuando: false,
        posicao: "Meia",
        nacionalidade:"Brasileira",
        esporte: "futebol",
        falecimento: null,
        link: "https://pt.wikipedia.org/wiki/Zico",
        redes_sociais: {
            instagram: "https://www.instagram.com/zico/"
        }
    },
    {
        nome: "Franz Beckenbauer",
        idade: 78,
        titulos: ["Copa do Mundo, Copa dos Campeões Europeus"],
        descricao: "Um dos maiores defensores da história, conhecido por sua elegância e visão de jogo.",
        atuando: false,
        posicao: "Defensor",
        nacionalidade:"Alemã",
        esporte: "futebol",
        falecimento: null,
        link: "https://pt.wikipedia.org/wiki/Franz_Beckenbauer",
        redes_sociais: {
            instagram: null // Não encontrado
        }
    },
    {
        nome: "Michel Platini",
        idade: 68,
        titulos: ["Campeonato Italiano, Copa dos Campeões Europeus, Copa do Mundo"],
        descricao: "Um dos maiores meias da história, conhecido por sua habilidade técnica e visão de jogo.",
        atuando: false,
        esporte: "futebol",
        falecimento: null,
        posicao: "Meia",
        nacionalidade: "França",
        link: "https://pt.wikipedia.org/wiki/Michel_Platini",
        redes_sociais: {
            instagram: null // Não encontrado
        }
    },
    {
        nome: "Ronaldo Fenômeno",
        idade: 46,
        titulos: ["Copa do Mundo (2x), Campeonato Espanhol, Italiano, Inglês"],
        descricao: "Um dos maiores atacantes da história, conhecido por sua velocidade, finalização e habilidade técnica.",
        atuando: false,
        esporte: "futebol",
        tags: ["r9, fenômeno"],
        falecimento: null,
        posicao: "Atacante",
        nacionalidade: "Brasil",
        link: "https://pt.wikipedia.org/wiki/Ronaldo_Lu%C3%ADs_Naz%C3%A1rio_de_Lima",
        redes_sociais: {
            instagram: "https://www.instagram.com/ronaldo/"
        }
    },
    {
        nome: "Zinedine Zidane",
        idade: 50,
        titulos: ["Copa do Mundo, Champions League (3x como jogador e 3x como técnico)"],
        descricao: "Um dos maiores meias da história, conhecido por sua elegância e gols memoráveis.",
        atuando: false,
        esporte: "futebol",
        falecimento: null,
        posicao: "Meia",
        nacionalidade: "França",
        link: "https://pt.wikipedia.org/wiki/Zinedine_Zidane",
        redes_sociais: {
            instagram: "https://www.instagram.com/zidane/"
        }
    },
    {
        nome: "Ronaldinho Gaúcho",
        idade: 43,
        titulos: ["Copa do Mundo, Champions League, La Liga, Campeonato Brasileiro"],
        descricao: "Conhecido por sua alegria em campo e dribles mágicos, Ronaldinho é um dos maiores showmen do futebol.",
        atuando: false,
        esporte: "futebol",
        falecimento: null,
        tags: ["Bruxo"],
        posicao: "Meia-atacante",
        nacionalidade: "Brasileira",
        clubes: ["Grêmio", "Paris Saint-Germain", "Barcelona", "Milan", "Flamengo"],
        prêmios_individuais: ["Bola de Ouro", "FIFA World Player"],
        link: "https://pt.wikipedia.org/wiki/Ronaldinho_Ga%C3%BAcho",
        redes_sociais: {
            instagram: "https://www.instagram.com/ronaldinho/"
        }
    },
    {
        nome: "Garrincha",
        idade: 49, // Idade ao falecer
        titulos: ["Copa do Mundo (2x), Campeonato Brasileiro"],
        descricao: "Considerado um dos maiores gênios do futebol, conhecido por sua ginga e dribles desconcertantes.",
        atuando: false,
        esporte: "futebol",
        falecimento: "20 de janeiro de 1983",
        posicao: "Atacante",
        tags: ["Perna tortas"],
        nacionalidade: "Brasileira",
        clubes: ["Botafogo"],
        prêmios_individuais: [], // Garrincha não recebeu muitos prêmios individuais na época
        link: "https://pt.wikipedia.org/wiki/Garrincha",
        redes_sociais: {
            instagram: null // Não encontrado
        }
    },
    {
        nome: "Cristiano Ronaldo",
        idade: 39,
        titulos: ["Champions League (5x), Premier League, La Liga, Serie A"],
        descricao: "Um dos maiores artilheiros da história, conhecido por sua força física, velocidade e habilidade de finalização.",
        atuando: true,
        esporte: "futebol",
        falecimento: null,
        tags: ["Cr7"],
        posicao: "Atacante",
        nacionalidade: "Portuguesa",
        clubes: ["Sporting CP", "Manchester United", "Real Madrid", "Juventus"],
        prêmios_individuais: ["Bola de Ouro (5x), Chuteira de Ouro (multiple)"],
        link: "https://pt.wikipedia.org/wiki/Cristiano_Ronaldo",
        redes_sociais: {
            instagram: "https://www.instagram.com/cristiano/"
        }
    },
    {
        nome: "Neymar Jr.",
        idade: 31,
        titulos: ["Ligue 1, Copa do Brasil, Copa Libertadores"],
        descricao: "Um dos maiores jogadores da atualidade, conhecido por sua habilidade técnica e dribles desconcertantes.",
        atuando: true,
        esporte: "futebol",
        falecimento: null,
        posicao: "Atacante",
        nacionalidade: "Brasileira",
        clubes: ["Santos", "Barcelona", "Paris Saint-Germain"],
        prêmios_individuais: ["Bota de Ouro"],
        link: "https://pt.wikipedia.org/wiki/Neymar",
        redes_sociais: {
            instagram: "https://www.instagram.com/neymarjr/"
        }
    },
    {
        nome: "Eusebio",
        idade: 72,
        titulos: ["Copa dos Campeões Europeus (1x)"],
        descricao: "Eusebio é uma lenda do futebol português, conhecido por sua velocidade e capacidade de finalização.",
        atuando: false,
        esporte: "futebol",
        falecimento: "2014-01-05",
        posicao: "Atacante",
        nacionalidade: "Português",
        clubes: ["Benfica"],
        prêmios_individuais: ["FIFA World Cup Golden Boot"],
        link: "https://pt.wikipedia.org/wiki/Eusébio",
        redes_sociais: {
            instagram: "https://www.instagram.com/eusebio/"
        }
    },
    {
        nome: "Lev Yashin",
        idade: 60,
        titulos: ["Copa dos Campeões Europeus (1x)"],
        descricao: "Conhecido como a 'Aranha Negra', Yashin é considerado o maior goleiro da história do futebol.",
        atuando: false,
        esporte: "futebol",
        falecimento: "1990-03-20",
        posicao: "Goleiro",
        nacionalidade: "Russo",
        clubes: ["Dynamo Moscow"],
        prêmios_individuais: ["Ballon d'Or (1x)"],
        link: "https://pt.wikipedia.org/wiki/Lev_Yashin",
        redes_sociais: {
            instagram: "https://www.instagram.com/levyashin/"
        }
    },
    {
        nome: "Roberto Baggio",
        idade: 57,
        titulos: ["Copa da Europa (1x)"],
        descricao: "Baggio é lembrado por sua habilidade técnica e pelos momentos decisivos na seleção italiana.",
        atuando: false,
        esporte: "futebol",
        falecimento: null,
        posicao: "Meio-campista",
        nacionalidade: "Italiano",
        clubes: ["Juventus", "Milan"],
        prêmios_individuais: ["FIFA World Player"],
        link: "https://pt.wikipedia.org/wiki/Roberto_Baggio",
        redes_sociais: {
            instagram: "https://www.instagram.com/robertobaggio/"
        }
    },
    {
        nome: "Paulo Silas",
        idade: 67,
        titulos: ["Copa Libertadores (2x)"],
        descricao: "Paulo Silas foi um meio-campista criativo e uma peça-chave para as equipes que jogou.",
        atuando: false,
        esporte: "futebol",
        falecimento: null,
        posicao: "Meio-campista",
        nacionalidade: "Brasileiro",
        clubes: ["Internacional", "Flamengo"],
        prêmios_individuais: ["Melhor Jogador Brasileiro"],
        link: "https://pt.wikipedia.org/wiki/Paulo_Silas",
        redes_sociais: {
            instagram: "https://www.instagram.com/paulosilas/"
        }
    },
    {
        nome: "Rivaldo",
        idade: 51,
        titulos: ["Copa do Mundo (1x)", "Liga dos Campeões (1x)"],
        descricao: "Rivaldo foi um dos jogadores mais habilidosos e impactantes do futebol brasileiro.",
        atuando: false,
        esporte: "futebol",
        falecimento: null,
        posicao: "Meio-campista",
        nacionalidade: "Brasileiro",
        clubes: ["Barcelona", "Milan"],
        prêmios_individuais: ["FIFA World Player"],
        link: "https://pt.wikipedia.org/wiki/Rivaldo",
        redes_sociais: {
            instagram: "https://www.instagram.com/rivaldo/"
        }
    },
    {
        nome: "Andrés Iniesta",
        idade: 40,
        titulos: ["Copa do Mundo (1x)", "Liga dos Campeões (4x)"],
        descricao: "Iniesta é conhecido por sua visão e habilidade excepcionais, sendo uma peça-chave na equipe do Barcelona e na seleção espanhola.",
        atuando: true,
        esporte: "futebol",
        falecimento: null,
        posicao: "Meio-campista",
        nacionalidade: "Espanhol",
        clubes: ["Barcelona", "Vissel Kobe"],
        prêmios_individuais: ["FIFA World Player"],
        link: "https://pt.wikipedia.org/wiki/Andrés_Iniesta",
        redes_sociais: {
            instagram: "https://www.instagram.com/andresiniesta8/"
        }
    },
    {
        nome: "Carlos Alberto Torres",
        idade: 78,
        titulos: ["Copa do Mundo (1x)"],
        descricao: "Carlos Alberto foi um defensor icônico conhecido por seu gol na final da Copa do Mundo de 1970.",
        atuando: false,
        esporte: "futebol",
        falecimento: "2016-10-25",
        posicao: "Defensor",
        nacionalidade: "Brasileiro",
        clubes: ["Santos"],
        prêmios_individuais: ["Melhor Jogador da Copa do Mundo"],
        link: "https://pt.wikipedia.org/wiki/Carlos_Alberto_Torres",
        redes_sociais: {
            instagram: "https://www.instagram.com/carlosalberto/"
        }
    },
    {
        nome: "Kaka",
        idade: 42,
        titulos: ["Liga dos Campeões (1x)", "Campeonato Italiano (1x)"],
        descricao: "Kaka foi um meio-campista talentoso e um dos melhores jogadores de sua geração.",
        atuando: false,
        esporte: "futebol",
        falecimento: null,
        posicao: "Meio-campista",
        nacionalidade: "Brasileiro",
        clubes: ["Milan", "Real Madrid"],
        prêmios_individuais: ["FIFA Ballon d'Or"],
        link: "https://pt.wikipedia.org/wiki/Kaká",
        redes_sociais: {
            instagram: "https://www.instagram.com/kaka/"
        }
    },
    {
        nome: "Ryan Giggs",
        idade: 50,
        titulos: ["Liga dos Campeões (2x)", "Campeonato Inglês (13x)"],
        descricao: "Giggs foi um dos maiores jogadores da história do Manchester United, conhecido por sua consistência e habilidade.",
        atuando: false,
        esporte: "futebol",
        falecimento: null,
        posicao: "Meio-campista",
        nacionalidade: "Gales",
        clubes: ["Manchester United"],
        prêmios_individuais: ["FIFA World Player"],
        link: "https://pt.wikipedia.org/wiki/Ryan_Giggs",
        redes_sociais: {
            instagram: "https://www.instagram.com/ryangiggs/"
        }
    },
    {
        nome: "Paulo Futre",
        idade: 58,
        titulos: ["Liga dos Campeões (1x)"],
        descricao: "Futre foi um atacante talentoso, conhecido por sua habilidade e velocidade.",
        atuando: false,
        esporte: "futebol",
        falecimento: null,
        posicao: "Atacante",
        nacionalidade: "Português",
        clubes: ["Atletico de Madrid"],
        prêmios_individuais: ["Melhor Jogador Português"],
        link: "https://pt.wikipedia.org/wiki/Paulo_Futre",
        redes_sociais: {
            instagram: "https://www.instagram.com/paulofutre/"
        }
    },
    {
        nome: "Samuel Eto'o",
        idade: 43,
        titulos: ["Liga dos Campeões (2x)", "Campeonato Italiano (3x)"],
        descricao: "Eto'o é conhecido por sua incrível capacidade de marcar gols e seu impacto no futebol europeu e africano.",
        atuando: false,
        esporte: "futebol",
        falecimento: null,
        posicao: "Atacante",
        nacionalidade: "Camaronês",
        clubes: ["Barcelona", "Inter de Milão"],
        prêmios_individuais: ["Melhor Jogador Africano"],
        link: "https://pt.wikipedia.org/wiki/Samuel_Eto%27o",
        redes_sociais: {
            instagram: "https://www.instagram.com/samueleto/"
        }
    },
    {
        nome: "Gerd Müller",
        idade: 78,
        titulos: ["Copa do Mundo (1x)", "Liga dos Campeões (1x)"],
        descricao: "Müller, conhecido como 'O Canhão', foi um dos maiores artilheiros da história do futebol.",
        atuando: false,
        esporte: "futebol",
        falecimento: "2021-08-15",
        posicao: "Atacante",
        nacionalidade: "Alemão",
        clubes: ["Bayern de Munique"],
        prêmios_individuais: ["FIFA World Cup Golden Boot"],
        link: "https://pt.wikipedia.org/wiki/Gerd_Müller",
        redes_sociais: {
            instagram: "https://www.instagram.com/gerdmuller/"
        }
    },
];

