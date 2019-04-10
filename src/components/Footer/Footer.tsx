import { h, Component } from 'preact';

export interface Props {
  path: string,
  optionalValue?: string
}

export interface State {
  useOptional: boolean
}

export default class Other extends Component<Props, State> {

  constructor() {
    super();
    this.state = {
      useOptional: false
    };
  }

  componentWillMount() {
    //fetch('/some/api/')
    //  .then((response: any) => response.json())
    //  .then(({ useOptional }) => this.setState({ useOptional }));
  }

  render({ path, optionalValue }: Props, { useOptional }: State) {
    return (
      <div>Hello Other World! {path} {useOptional ? optionalValue : null}</div>
    );
  }

}
