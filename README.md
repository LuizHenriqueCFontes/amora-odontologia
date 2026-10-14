# Amora Odontologia

Landing page responsiva de uma clínica odontológica, desenvolvida com React,
TypeScript e Vite. O conteúdo e a identidade visual da Amora são demonstrativos
e podem ser adaptados para a clínica real.

## Desenvolvimento

```sh
npm install
npm run dev
```

## Verificação

```sh
npm run build
npm run lint
```

## Organização

- `src/App.tsx` compõe as seções da página.
- `src/components/` reúne os componentes reutilizáveis e seus estilos
  encapsulados em arquivos `.module.css`.
- `src/index.css` contém estilos globais, tokens visuais e ajustes de
  acessibilidade.

As imagens são carregadas do Unsplash e as fontes do Google Fonts. O formulário
de contato valida os campos no navegador, mas é apenas demonstrativo: para
receber agendamentos, conecte-o a um serviço de atendimento e atualize o conteúdo
e os dados da clínica.
