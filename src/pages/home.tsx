import { h, Component, render } from 'preact';
import PageTemplate from 'Templates/BasicTemplate';

interface Props {
    path: string;
}

interface State {
    useOptional: boolean;
}

export default class Home extends Component<Props, State> {
    state: State = {
        useOptional: false,
    };

    componentWillMount(): void {
        //fetch('/some/api/')
        //  .then((response: any) => response.json())
        //  .then(({ useOptional }) => this.setState({ useOptional }));
    }

    render({ path }: Props, { useOptional }: State): JSX.Element {
        return (
            <div>
                Hello World! {path} {useOptional}
            </div>
        );
    }
}

render(<PageTemplate />, document.getElementById('app'));
