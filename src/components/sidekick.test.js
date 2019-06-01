import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './sidekick';
import renderer from 'react-test-renderer';

describe('My component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Comp />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      
      it('renders the UI as expected', () => {
          const tree = renderer
            .create(<Comp/>)
            .toJSON();
          expect(tree).toMatchSnapshot();  
          });
          
});