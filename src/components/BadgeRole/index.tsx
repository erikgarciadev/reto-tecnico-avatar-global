import { Role } from "../../interfaces/characters";
import { classNames } from "../../utils/util";

interface Props {
  role: Role;
}

export default function BadgeRole({ role }: Props) {
  const isMain = role === Role.Main;
  const text = isMain ? "Principal" : "Secundario";
  return (
    <span
      className={classNames(
        " text-xs font-medium px-2.5 py-0.5 rounded-full",
        isMain ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
      )}
    >
      {text}
    </span>
  );
}
