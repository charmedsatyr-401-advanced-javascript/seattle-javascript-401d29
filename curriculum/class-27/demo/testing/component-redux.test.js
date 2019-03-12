import React from 'react';
import {shallow,mount} from 'enzyme';

import {Provider} from 'react-redux';
import createStore from '../../app/store';

import Categories from '../../components/categories/category-container';

describe('<Categories />', () => {

  let store, wrapper;

  beforeEach(() => {
    store = createStore();
    wrapper = mount(<Provider store={store}><Categories/></Provider>);
  });

});

