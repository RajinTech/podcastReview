import PodcastIndexTile from '../../../app/javascript/react/components/PodcastIndexTile.js'
import { mount } from 'enzyme'
import React from 'react'
import { Link } from 'react-router'
import jasmineEnzyme from 'jasmine-enzyme'

describe('PodcastIndexTile', () => {
  let wrapper,
      podcast = {
        id: 1,
        title: 'PodCat',
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

  describe("should render a <Link>", () => {
    it("that has prop \'title\' as text", () => {
      console.log(wrapper.find('Link').debug());
      expect(wrapper.find('Link').props().children).toBe('PodCat')
    })

    it("to the podcast's show page", () => {
      expect(wrapper.find('Link').props().to).toBe('/podcasts/1')
    })
  })

  it('should render prop \'creators\'', () => {
    expect(wrapper.exists(
      <h2>By Tyler and Bob</h2>
    )).toEqual(true)
  })

});
