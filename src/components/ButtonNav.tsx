interface color {
  color: string;
}
function ButtonNav({ color }: color) {
  return <button className={" min-w-[48px] h-12 border-[10px] rounded-full " + color}></button>;
}

export default ButtonNav;
