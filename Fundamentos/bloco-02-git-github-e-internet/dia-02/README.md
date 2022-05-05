# Recapitulando

<ins>O Git é um sistema de versionamento distribuído (DVCS);</ins>

#### <ins>A maior vantagem do Git é:</ins>

  Ele é distribuído, ou seja, o repositório fica na sua máquina e você não precisa se preocupar em fazer "lock" de arquivos assim como em outros VCS's;
Vimos que a instalação do Git e sua configuração são simples. Basta baixar o instalador e configurá-lo usando o comando git config;

#### <ins>Para iniciar um repositório local, vimos que você tem duas opções:</ins>
- git init (para criar um novo repositório Git);
- git clone (para copiar um repositório Git existente para sua máquina e, assim, poder criar branches e Pull Requests).

*O GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git*

#### <ins>Vimos também que, para subir seu código para o GitHub, basta você verificar qual das opções abaixo deseja:</ins>
- Criar um repositório do zero localmente, na sua máquina, onde utilizará o comando git init;
- Trabalhar num repositório já existente, onde utilizará o comando git clone;

*Esses dois comandos são excludentes, ou seja, você usa um, ou usa o outro, nunca os dois ao mesmo tempo. Após isso, siga um dos dois fluxos abaixo*

## Fluxo 1 - Após git init:
- Criar seu primeiro commit;
- Criar o repositório remoto na sua conta do GitHub;
- Adicionar a URL do repositório remoto;
- Executar o famoso push.

## Fluxo 2 - Após git clone:
- Criar sua branch dentro do repositório clonado;
- Fazer checkout na sua branch;
- Criar seu primeiro commit;
- Executar o famoso push.
