import {IProviderPropsObj, TComponent, TOmitChild} from './types';


/**
 * 檢查是否為 ProviderObj
 * @param provider
 */
export const checkIsProviderObj = <T extends TComponent|IProviderPropsObj>(provider: T): provider is Extract<T, IProviderPropsObj> => {
    return 'Comp' in provider;
};


/**
 * Compose 單一個
 * @param Comp
 * @param props
 */
export const providerWithProps = <T>(Comp: TComponent<T>, props: TOmitChild<T>): IProviderPropsObj<T> => ({
    Comp,
    props: props as T
});
