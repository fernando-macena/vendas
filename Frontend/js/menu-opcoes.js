/*Função para configurar um menu-dropdown*/

function mostrarConteudoMenu(elemento) {
		const conteudoMenu = elemento.nextElementSibling; /* Pegando o elemento irmao(conteudo) para setar o display */

		if(elemento.classList.contains('titulo-desativo')) {

			conteudoMenu.className = 'conteudo-menu-ativado';

			elemento.classList.remove('titulo-desativo')

			elemento.classList.add('titulo-ativo')

		} else if (elemento.classList.contains('titulo-ativo')) {
			conteudoMenu.className = 'conteudo-menu-desativado';

			elemento.classList.remove('titulo-ativo')

			elemento.classList.add('titulo-desativo')
		}
}

