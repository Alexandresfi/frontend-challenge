import IconPedra from "../../assets/icon-pedra.svg";
import IconPapel from "../../assets/icon-papel.svg";
import IconTesoura from "../../assets/icon-tesoura.svg";

interface ItemProps {
  icon: "pedra" | "papel" | "tesoura";
}

export function ItemPlay({ icon }: ItemProps) {
  return (
    <div className={` item item-color`}>
      {icon === "pedra" && <img src={IconPedra} alt="icon-papel" />}
      {icon === "papel" && <img src={IconPapel} alt="icon-papel" />}
      {icon === "tesoura" && <img src={IconTesoura} alt="icon-papel" />}
    </div>
  );
}
