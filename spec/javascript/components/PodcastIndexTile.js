import PodcastIndexTile from '../../../app/javascript/react/components/PodcastIndexTile.js'
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'
import React from 'react'
import { Router } from 'react-router'

describe('PodcastIndexTile', () => {
  let wrapper,
      podcast = {
        id: 1,
        title: 'PodCat',
        creators: ['Tyler', 'Bob']
      }

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <PodcastIndexTile
          key={podcast.id}
          id={podcast.id}
          title={podcast.title}
          creators={podcast.creators}
        />
      </Router>
    );
  });

  it('should render prop title as a link', () => {
    expect(wrapper.find(Link).props().children).toBe('PodCat')
    expect(wrapper.find(Link).props().to).toBe('/podcasts/1')
  })

  it('should render prop creators', () => {
    expect(wrapper.text().includes('Tyler')).toEqual(true)
    expect(wrapper.text().includes('Bob')).toEqual(true)
  })

});
