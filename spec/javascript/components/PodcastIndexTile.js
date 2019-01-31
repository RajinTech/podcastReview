import PodcastIndexTile from '../../../app/javascript/react/components/PodcastIndexTile.js'
import { mount } from 'enzyme'
import React from 'react'
import { Link } from 'react-router'
import jasmineEnzyme from 'jasmine-enzyme'

describe('PodcastIndexTile', () => {
  let wrapper,
      podcast = {
        id: 1,
        title: 'Example podcast',
        creators: ["Tyler", "Bob"]
      }

  beforeEach(() => {
    jasmineEnzyme()
    wrapper = mount(
      <PodcastIndexTile
        key={podcast.id}
        id={podcast.id}
        title={podcast.title}
        creators={podcast.creators}
      />
    );
  });

  describe("renders a <Link>", () => {
    it("<Link> has prop \'title\' as text", () => {
      expect(wrapper.find('Link').props().children).toBe('Example podcast')
    })

    it("<Link> leads to the podcast's show page", () => {
      expect(wrapper.find('Link').props().to).toBe('/podcasts/1')
    })
  })

  it('should display the names of the podcast\'s creators', () => {
    expect(wrapper.find('h2')).toIncludeText('Tyler')
    expect(wrapper.find('h2')).toIncludeText('Bob')
  })

});
