// Props:

// Estamos utilizando interfaces para definir as propriedades
// do componente.

// Para que o componente assuma a propriedade criada a partir
// da interface, é necessário passar no parâmetro da função
// que retorna o elemento em si, a propriedade via tipagem.

interface ButtonProps {
  color: string;
}

export function Button(props: ButtonProps) {
  return (
    <button type="button" style={{ backgroundColor: props.color }}>Botão - { props.color }
    </button>
  );
}