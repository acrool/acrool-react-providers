import {screen} from '@testing-library/dom';
import {render} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import composedProviders from './composedProviders';

// 測試用的 Providers
const LoaderProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => (
    <div data-testid="loader">{children}</div>
);

const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => (
    <div data-testid="theme">{children}</div>
);

const providerWithProps = (Comp: React.FC<any>, props: any) => ({
    Comp,
    props,
});

// 測試用的子元件
interface ITaskModalProps {
    taskId: string;
}
const TaskModal: React.FC<ITaskModalProps> = ({taskId}) => (
    <div data-testid="task-modal">Task ID: {taskId}</div>
);

// 測試用 Providers 配置
const providers = [
    providerWithProps(LoaderProvider, {}),
    providerWithProps(ThemeProvider, {}),
];

describe('composedProviders', () => {
    it('應該正確渲染子元件', () => {
        const WithProvider = composedProviders(providers)(TaskModal);

        render(<WithProvider taskId="12345" />);

        // 驗證子元件渲染
        const taskModal = screen.getByTestId('task-modal');
        expect(taskModal).toBeInTheDocument();
        expect(taskModal).toHaveTextContent('Task ID: 12345');
    });

    it('應該正確渲染所有 Providers', () => {
        const WithProvider = composedProviders<ITaskModalProps>(providers)(TaskModal);

        render(<WithProvider taskId="12345" />);

        // 驗證 LoaderProvider 渲染
        const loader = screen.getByTestId('loader');
        expect(loader).toBeInTheDocument();

        // 驗證 ThemeProvider 渲染
        const theme = screen.getByTestId('theme');
        expect(theme).toBeInTheDocument();

        // Providers 應包含子元件
        expect(loader).toContainElement(theme);
        expect(theme).toContainElement(screen.getByTestId('task-modal'));
    });

    it('應該正確傳遞 props 到子元件', () => {
        const WithProvider = composedProviders(providers)(TaskModal);

        render(<WithProvider taskId="98765" />);

        const taskModal = screen.getByTestId('task-modal');
        expect(taskModal).toHaveTextContent('Task ID: 98765');
    });

    it('應該支持無 props 的子元件', () => {
        const SimpleComponent: React.FC = () => (
            <div data-testid="simple">Hello, World!</div>
        );
        const WithProvider = composedProviders(providers)(SimpleComponent);

        render(<WithProvider />);

        const simple = screen.getByTestId('simple');
        expect(simple).toBeInTheDocument();
        expect(simple).toHaveTextContent('Hello, World!');
    });
});
