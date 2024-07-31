import {ComponentClass, FC} from 'react';

export type TComponent<P = {}> = FC<P> | ComponentClass<P>;

export interface IProviderPropsObj<T = {}> {
    Comp: TComponent<T>,
    props?: T
}

export type TOmitChild<P> = Omit<P, 'children'>;
