import {ComponentClass, FC} from 'react';

export type TComponent<P = {}> = FC<React.PropsWithChildren<P>> | ComponentClass<React.PropsWithChildren<P>>;

export interface IProviderPropsObj<T = {}> {
    Comp: TComponent<T>,
    props?: T
}

export type TOmitChild<P> = Omit<P, 'children'>;
