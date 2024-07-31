import {providers, EStatus} from '@acrool/react-providers';
import AcroolTable from '@acrool/react-table';
import Button from '../../components/Button';


const Example = () => {


    return <div style={{display: 'flex', gap: '10px', alignItems: 'flex-start', width: '100%'}}>

        <AcroolTable
            isDark
            isVisiblePaginate={false}
            tableCellMediaSize={768}
            gap="10px"
            title={{
                name: {text: 'Name', col: '200px'},
                use: {text: 'Use', col: true},
            }}
            data={[
                {
                    id: 1,
                    onClickRow: () => {
                        providers({message: 'step1 test providers', code: 'TEST1'});
                        // providers.error('step2 test providers');
                    },
                    field: {
                        name: 'Default',
                        use: 'providers({message: \'Good afternoon, Imagine how are you doing today?\'})',
                    }
                },
                {
                    id: 3,
                    onClickRow: () => providers.success('You have been logged in successfully',{
                        onClick: () => console.log('xxx'),
                        code: 'SYS_ERR_500',
                        path: 'auth/sign',
                    }),
                    field: {
                        name: <Button color="success" size="md">Success</Button>,
                        use: 'providers.success(\'You have been logged in successfully\')',
                    }
                },
                {
                    id: 4,
                    onClickRow: () => providers.info('You have a new message'),
                    field: {
                        name: <Button color="info" size="md">Info</Button>,
                        use: 'providers.info(\'You have a new message\')',
                    }
                },
                {
                    id: 5,
                    onClickRow: () => providers.warning('Please check if your parameter settings are correct?'),
                    field: {
                        name: <Button color="warning" size="md">Warning</Button>,
                        use: 'providers.warning(\'Please check if your parameter settings are correct?\')',
                    }
                },
                {
                    id: 6,
                    onClickRow: () => providers.error('Sorry, the account password you entered is wrong'),
                    field: {
                        name: <Button color="danger" size="md">Danger</Button>,
                        use: 'providers.danger(\'Sorry, the account password you entered is wrong\')',
                    }
                },
                {
                    id: 7,
                    onClickRow: () => providers({
                        message: 'Please enter the name of the team you want to delete<store class="team-name">「Acrool Frontend」</store> and click OK to delete. Make sure you know what you are doing.',
                        status: EStatus.error,
                        code: 'SYS_ERR_500',
                        path: 'auth/sign',
                        confirmPlaceholder: 'type your team name',
                        buttons: [
                            {
                                children: 'Delete',
                                color: 'danger',
                                onClick: (e, confirmValue) => console.log(confirmValue)
                            },
                            {
                                children: 'Cancel',
                                color: 'gray'
                            },
                        ],
                    }),
                    field: {
                        name: <Button color="grayDanger" size="md">Custom</Button>,
                        use: 'providers(\'You have been logged out successfully!\', {status: EStatus.success})',
                    }
                },
                {
                    id: 8,
                    onClickRow: () => providers.confirm(
                        'Type "1+1=?" to make sure you are sure you want to delete',
                        {
                            code: 'SYS_ERR_500',
                            path: 'auth/sign',
                            confirmPlaceholder: 'type your answer',
                            onClick: (e, confirmValue) => {
                                if(confirmValue !== '2'){
                                    providers.error('not type is "2"');
                                    return false;
                                }
                                requestAnimationFrame(() => {
                                    providers.error('You are not the workspace owner or team owner and cannot update a team');
                                });
                            }
                        }),
                    field: {
                        name: <Button color="grayDanger" size="md">Confirm</Button>,
                        use: 'providers(\'You have been logged out successfully!\', {status: EStatus.success})',
                    }
                },
                {
                    id: 9,
                    onClickRow: () => providers.error(
                        'Add code info',
                        {
                            code: '@SYS_ERR_500',
                            path: 'auth/sign',
                        }),
                    field: {
                        name: <Button color="grayDanger" size="md">Confirm</Button>,
                        use: 'providers(\'You have been logged out successfully!\', {status: EStatus.success})',
                    }
                },

            ]}

        />


    </div>;
};

export default Example;



