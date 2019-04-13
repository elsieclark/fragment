import { h, Component, render } from 'preact';
import PageTemplate from '../templates/BasicTemplate/BasicTemplate.tsx';

export interface Props {
    path: string;
}

export interface State {
    useOptional: boolean;
}

export default class Home extends Component<Props, State> {
    constructor() {
        super();
        this.state = {
            useOptional: false,
        };
    }

    componentWillMount() {
        //fetch('/some/api/')
        //  .then((response: any) => response.json())
        //  .then(({ useOptional }) => this.setState({ useOptional }));
    }

    render({ path }: Props, { useOptional }: State) {
        return <div>Hello World! {path}</div>;
    }
}

render(<PageTemplate />, document.getElementById('app'));
