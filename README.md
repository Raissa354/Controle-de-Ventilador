## Resumo de como funciona

 Esse código cria uma **interface de um ventilador virtual** usando HTML, CSS e JavaScript.

 - **HTML:** cria a estrutura da página: o ventilador, as hélices, o botão de ligar/desligar, o status e os botões de velocidade **1, 2 e 3**.
- **CSS:** define a aparência do ventilador, usando cores rosas, círculos e formas para representar as hélices. Também cria a animação de rotação com `@keyframes girar`.
- **JavaScript:** controla o funcionamento:
  - Ao clicar em **Ligar**, o ventilador começa a girar.
  - Ao clicar em **Desligar**, a animação para.
  - Os botões **1, 2 e 3** alteram a velocidade da animação.
  - A velocidade é controlada por `animationDuration`: quanto menor o tempo, mais rápido o ventilador gira.
  - O texto do status é atualizado para mostrar se está **Desligado** ou **Ligado - Velocidade X**.
  - A classe `.selecionada` destaca a velocidade escolhida.

 **Em resumo:** o HTML monta o ventilador, o CSS deixa ele bonito e cria a animação, e o JavaScript faz os botões controlarem o ventilador e suas velocidades.
