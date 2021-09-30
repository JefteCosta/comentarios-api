# Como será
- Em primeiro lugar iremos criar todo o fluxo de padronização de commits com commitlint, husky e commitzen
- depois iremos configurar as branch para receberem commits diversos e às branch serão separadas em 2 a branch main que será a breach de produção e a developer que receberá commits diversos
- para controlar as versões estaremos utilizando o standard-version para estar gerando as realese automáticos com as ações do github
- para api estaremos utilizando o nextjs para desenvolver a api o deploy da api será colocado na vercel devido a hospedagem se gratuita será melhor para acesso e teste da api
- o front-end será desenvolvido em vuejs será um desafio maior devido o nextjs ser uma tecnologia react então estarei utilizando o vue  para dar um contraste.
- para controlarmos o fluxo de atividades e demandas iremos utilizar o próprio projects daqui do github estarei cadastrando as features com issues e controlando as issues pelo kanban do projects
- o link para as atividade do projeto encontrace aqui [comments-api](https://github.com/JefteCosta/comment-api/projects/2)
- para o monitoramento da api e controle será utilizado o pm2 com pm2 monitor para acompanhar os processos e se o backend está dando algum erro
- para a utilização e controle do fluxo da esteira e pipelines será utilizado o próprio github actions por não ter custo de servidores e ser open sources 

# tecnologias empregadas neste projeto

1. Commitlint
2. Husky
3. Commitzen
4. Standard-version
5. Nextjs
6. Vue
7. Pm2
8. Github Actions
9. Vercel
- todos as tecnologias utilizadas são opensources ou gratuitas e não foi empregado custo algum

# Controle de esteira
- Para haver um controle da esteira CI/CD estaremos partindo desde o princípio que é a separação das branches e controle de commits para cada pull request aqui no github, como seria isso haverá duas branches principais a main e a develop essa serão as breach principais que adotaremos neste projeto (podemos utilizar a padronização do workflow com gitflow para controlar as branches, mas não será o caso aqui). cada dev poderá criar sua própria branch a partir da branch develop no meu caso jefte-dev.
- quando uma feature for finalizada na minha breach estarei fazendo um pull request para a breach develop.
- a Branch Develop quando receber um pull request fará alguns testes e validações para verificar se o commit estar de acordo com a Conventional Commits
- ao final dos teste na branch develop o pipeline enviar um pull request para a branch main a qual fará o build e deploy da aplicação na vercel e do frontend no github page

