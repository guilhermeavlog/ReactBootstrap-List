interface Prop {
  desc: string;
}

const Button = ({ desc }: Prop) => {
  return (
    <button type="button" className={desc}>
      Pepe
    </button>
  );
};

export default Button;
