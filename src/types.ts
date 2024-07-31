import {ComponentClass, FC} from "react";

export type TComponent<P = {}> = FC<P> | ComponentClass<P>;

export interface IComponentProps<T = {}> {
    Comp: TComponent<T>,
    props?: T
}
