import PodcastShowContainer from '../../../app/javascript/react/containers/PodcastShowContainer.js'
import fetchMock from 'fetch-mock'
import { mount } from 'enzyme'
import React from 'react'
import { Link } from 'react-router'
import jasmineEnzyme from 'jasmine-enzyme'

describe('PodcastShowContainer', () => {
  let wrapper, podcast

  beforeEach(() => {
    jasmineEnzyme()

    podcast = {
      id: 1,
      title: 'PodCat',
      description: 'cool podcast',
      url: 'http://google.com',
      availability: 'yes',
      creators: ['Tyler', 'Bob']
    }

    fetchMock.get('/api/v1/podcasts/1', {
      status: 200,
      body: podcast
    })

    wrapper = mount(
      <PodcastShowContainer
        params={{id: 1}}
      />
    );
  });

  afterEach(fetchMock.restore)

  it('should have initial empty state', () => {
    expect(wrapper.state()).toEqual({ podcast: {} })
  })

  it('should have full state after api call', (done) => {
    setTimeout(() => {
      expect(wrapper.state()).toEqual({podcast: podcast})
      done()
    }, 0)
  })

  it('should render show page contents after api call', (done) => {
    setTimeout(() => {
      let expectIncludes = (wrapper, value) => {
        expect(wrapper.text().includes(value)).toEqual(true)
      }
      expectIncludes(wrapper, podcast.title)
      expectIncludes(wrapper, podcast.description)
      expectIncludes(wrapper, podcast.url)
      expectIncludes(wrapper, podcast.availability)
      expectIncludes(wrapper, podcast.creators.join(''))
      done()
    }, 0)
  })


});
