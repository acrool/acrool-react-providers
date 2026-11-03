import {ComponentType, createElement, Fragment} from 'react';

import {IProviderPropsObj} from './types';
import {checkIsProviderObj} from './utils';




/**
 * 合併提供者
 * @param providers 提供者們
 * @param displayName 元件名稱
 */
export const composedProviders = (
    providers: IProviderPropsObj<any>[],
    displayName = 'ComposedProviders',
) => {
    // P 由 ChildComponent 推斷，包裝後的元件沿用相同的 props 型別
    return <P extends {}>(ChildComponent: ComponentType<P>) => {
        const innerFirstProviders = [...providers, ChildComponent].reverse();

        function Composed(props: P) {
            const {children} = props as React.PropsWithChildren<P>;
            return innerFirstProviders.reduce<React.ReactElement>(
                (curr, provider) => {
                    if(checkIsProviderObj(provider)){
                        const {Comp, props} = provider;
                        return createElement(Comp, props, curr);
                    }
                    return createElement(provider as ComponentType<any>, props, curr);
                }, createElement(Fragment, null, children));
        }
        Composed.displayName = displayName;

        return Composed;
    };
};

export default composedProviders;
