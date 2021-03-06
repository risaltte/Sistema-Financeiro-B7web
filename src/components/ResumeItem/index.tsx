import * as C from "./styles";
import { formatMoneyBr } from "../../helpers/formatNumbers"

type Props = {
    title: string;
    value: number;
    color?: string;
};

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>{formatMoneyBr(value)}</C.Info>
        </C.Container>
    );
}