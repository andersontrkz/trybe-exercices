Comece o exercício analisando a página em uma tela de tamanho pequeno, para simular como ela pode parecer em um dispositivo móvel (você pode usar o Chrome para isso, veja no detalhe nos Recursos adicionais ).
Agora você vai ajustar o CSS para melhorar a visualização da página.
Realize as seguintes tarefas:
Faça o tamanho da fonte ser maior;
Faça o tamanho da fonte dos elementos h1 ser menor;
Aumente o espaçamento entre as figuras;
Adicione um pouco de margin na página.
Ao pensar no design de uma tela pequena primeiro, estamos aplicando a abordagem do mobile first . Fazendo isso, começamos com um design básico (mínimo denominador comum) e então trabalhamos em melhorias mais sofisticadas para os navegadores com funcionalidades avançadas e layouts específicos.
Isso garante que estamos desenvolvendo uma experiência que funcionará para todos. Também tem um efeito colateral, que isso também nos ajuda a perceber qual o conteúdo é realmente importante na nossa página.
Dica: no Chrome você pode facilmente encontrar qual o tamanho da sua tela usando o "Inspecionar elemento". Abra-o e redimensione a janela, enquanto isso preste atenção no topo da tela: as dimensãoes de largura e altura irão aparecer conforme você redimensiona a tela.
Comece a expandir a largura da sua tela. Faça isso até chegar em um ponto onde o design atual da página não funciona mais.
Por exemplo, o comprimento das linhas pode começar a ficar muito grande para que o texto seja facilmente lido. Ou talvez a página fique com uma largura grande o suficiente que não faça mais sentido as imagens serem mostradas uma abaixo da outra...
Realize as seguintes tarefas:
Guarde a largura da tela no ponto que você identificou que o layout atual não funcionou bem (por exemplo 800px) . Esse será o primeiro breakpoint do layout . Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar;
Crie uma media query no seu arquivo CSS , usando a dimensão em pixels que você guardou como o min-width do teste da media query . Dentro desse breakpoint , adicione os seguintes ajustes:
Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito) ;
Ajuste o tamanho da fonte;
Ajuste as margens da página;
Faça as imagens serem mostradas em duas colunas.
Agora, você vai criar outro breakpoint para telas grandes. Redimensione sua tela de novo para encontrar um novo breakpoint .
Crie uma nova media query no seu arquivo CSS usando a dimensão que você encontrou para telas grandes (por exemplo 1300px) , e realize os seguintes ajustes dentro do breakpoint :
Altere a cor de fundo;
Ajuste o tamanho da fonte;
Ajuste as margens da página;
Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.