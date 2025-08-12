# Guia de Início Rápido para Aplicações Expo

Este guia detalha os passos para configurar um ambiente de desenvolvimento e criar sua primeira aplicação Expo.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado os seguintes softwares em seu computador:

*   **Node.js** (versão recomendada: \>= 20.0.0)
*   **npm** ou **yarn** (gerenciador de pacotes)
*   **Editor de código** (ex: VS Code, Sublime Text)
*   **Dispositivo móvel** (Android ou iOS) ou emulador/simulador
*   **Expo Go** (aplicativo para testes em dispositivos)

## Passo a Passo

1.  **Instalação do Expo CLI:**

    Abra o terminal e execute o seguinte comando para instalar o Expo CLI:

    ```bash
    npm install -g expo-cli
    # ou
    yarn global add expo-cli
    ```

2.  **Criação do Projeto Expo:**

    Navegue até o diretório onde deseja criar o projeto e execute:

    ```bash
    expo init meu-primeiro-app
    ```

    *   Escolha um template (ex: "blank" para começar do zero, "tabs" para uma aplicação com abas, "typescript" para usar TypeScript).
    *   Escolha o gerenciador de pacotes (npm ou yarn).

3.  **Navegação no Projeto:**

    Entre no diretório do seu projeto:

    ```bash
    cd meu-primeiro-app
    ```

4.  **Executando a Aplicação:**

    Inicie o servidor de desenvolvimento Expo:

    ```bash
    npm start
    # ou
    yarn start
    ```

    *   Um navegador abrirá com o Expo Dev Tools.
    *   Você pode escanear o QR code com o aplicativo Expo Go no seu dispositivo móvel ou usar um emulador/simulador.
    *   O Expo Dev Tools agora oferece opções para simular diferentes dispositivos e tamanhos de tela.

5.  **Testando no Dispositivo:**

    *   **Android:** Use o aplicativo Expo Go (disponível na Google Play Store) e escaneie o QR code.
    *   **iOS:** Use o aplicativo Expo Go (disponível na App Store) e escaneie o QR code.
    *   **Emulador/Simulador:** O Expo Dev Tools detectará automaticamente e abrirá a aplicação.

6.  **Estrutura do Projeto:**

    O projeto Expo terá a seguinte estrutura básica:

    ```
    meu-primeiro-app/
    ├── App.js          # Arquivo principal da aplicação
    ├── app.json        # Configurações da aplicação
    ├── node_modules/   # Dependências do projeto
    ├── package.json    # Informações do projeto e dependências
    ├── .expo/          # Diretório de cache e configurações do Expo
    └── ...
    ```

7.  **Desenvolvimento:**

    *   Edite o arquivo `App.js` (ou `App.tsx` se você usou TypeScript) para começar a desenvolver sua aplicação.
    *   Use os componentes e APIs do React Native e Expo.
    *   O Expo agora suporta atualizações "over-the-air" (OTA) mais facilmente, permitindo que você atualize sua aplicação sem precisar enviar uma nova versão para as lojas.

8.  **Publicação:**

    Quando sua aplicação estiver pronta, você pode publicá-la:

    ```bash
    expo publish
    ```

    *   Isso irá gerar um link para que outros possam acessar sua aplicação.
    *   **Novo:** O Expo agora oferece mais opções de personalização para a publicação, incluindo a possibilidade de definir um domínio personalizado.

## Dicas e Recursos Adicionais

*   **Documentação do Expo:** Explore a documentação oficial para obter informações detalhadas: https://docs.expo.dev
*   **Expo SDK:** Mantenha seu Expo SDK atualizado para obter as últimas funcionalidades e correções de bugs.
*   **Expo CLI:** Use a Expo CLI para gerenciar seu projeto, incluindo a instalação de dependências, a criação de builds e a publicação.
*   **React Native:** Aprenda os fundamentos do React Native para construir interfaces de usuário nativas.
*   **Comunidade Expo:** Participe da comunidade Expo para obter suporte e compartilhar suas experiências.
