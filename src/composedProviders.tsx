import {createElement, Fragment} from 'react';

import {IProviderPropsObj, TComponent} from './types';
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
    return (ChildComponent: TComponent) => {
        const innerFirstProviders = [...providers, ChildComponent].slice().reverse();

        function Composed<P extends {}>(props: React.PropsWithChildren<P>) {
            return innerFirstProviders.reduce<React.ReactElement>(
                (curr, provider) => {
                    if(checkIsProviderObj(provider)){
                        const {Comp, props} = provider as IProviderPropsObj<P>;
                        return createElement(Comp, props, curr);
                    }
                    return createElement(provider, null, curr);
                }, createElement(Fragment, null, props.children));
        }
        Composed.displayName = displayName;

        return Composed;
    };
};

export default composedProviders;
